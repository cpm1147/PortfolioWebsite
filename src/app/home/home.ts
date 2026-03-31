import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest: Point[];
  active?: number;
  circle?: Circle;
}

class Circle {
  constructor(
    public pos: Point,
    public radius: number,
    public active: number = 0
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(95,205,255,${this.active})`;
    ctx.fill();
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {
  @ViewChild('bgCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  private width = 0;
  private height = 0;

  private points: Point[] = [];
  private target = { x: 0, y: 0 };
  private animateHeader = true;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Willie Dong - Home');
  }

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;

    this.init();
    this.animate();
  }

  private init() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.target = { x: this.width / 2, y: this.height / 2 };

    this.createPoints();
    this.findClosestPoints();
    this.createCircles();
  }

  private createPoints() {
    this.points = [];
    const density = 20;

    for (let x = 0; x < this.width; x += this.width / density) {
      for (let y = 0; y < this.height; y += this.height / density) {
        const px = x + Math.random() * (this.width / density);
        const py = y + Math.random() * (this.height / density);

        this.points.push({
          x: px,
          y: py,
          originX: px,
          originY: py,
          closest: []
        });
      }
    }
  }

  private findClosestPoints() {
    this.points.forEach(p1 => {
      const closest: Point[] = [];

      this.points.forEach(p2 => {
        if (p1 === p2) return;

        if (closest.length < 5) {
          closest.push(p2);
        } else {
          for (let k = 0; k < 5; k++) {
            if (this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
              closest[k] = p2;
              break;
            }
          }
        }
      });

      p1.closest = closest;
    });
  }

  private createCircles() {
    this.points.forEach(p => {
      p.circle = new Circle(p, 2 + Math.random() * 2);
    });
  }

  private animate = () => {
    if (this.animateHeader) {
      this.ctx.clearRect(0, 0, this.width, this.height);

      this.points.forEach(p => {
        const dist = this.getDistance(this.target, p);

        if (dist < 4000) {
          p.active = 0.3;
          p.circle!.active = 0.6;
        } else if (dist < 20000) {
          p.active = 0.1;
          p.circle!.active = 0.3;
        } else if (dist < 40000) {
          p.active = 0.02;
          p.circle!.active = 0.1;
        } else {
          p.active = 0;
          p.circle!.active = 0;
        }

        this.drawLines(p);
        p.circle!.draw(this.ctx);

        this.shiftPoint(p);
      });
    }

    requestAnimationFrame(this.animate);
  };

  private shiftPoint(p: Point) {
    p.x += (Math.random() - 0.5) * 0.5;
    p.y += (Math.random() - 0.5) * 0.5;
  }

  private drawLines(p: Point) {
    if (!p.active) return;

    p.closest.forEach(c => {
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(c.x, c.y);
      this.ctx.strokeStyle = `rgba(95,205,255,${p.active})`;
      this.ctx.stroke();
    });
  }

  private getDistance(p1: any, p2: any) {
    return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.target.x = e.clientX;
    this.target.y = e.clientY;
  }

  @HostListener('window:resize')
  onResize() {
    this.init();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.animateHeader = window.scrollY <= this.height;
  }
}