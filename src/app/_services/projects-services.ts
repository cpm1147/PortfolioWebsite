import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServices {
  projects: Project[] = [
    {
      id: 0,
      name: 'Career Task Team',
      summary: 'A full-stack web application designed as a community feature for Go Bear AI where users can make friends, join teams, and collaborate on tasks while earning points and badges through a gamified system. Built using React as the frontend, Express as the backend, and Firebase for the database.',
      description: 'As part of a six-member Agile development team, I was responsible for designing and developing key features of the application, including the dashboard, task management system, and notification system. I built responsive and user-friendly interfaces using React, ensuring seamless interaction between the frontend and backend services. For the dashboard, I implemented dynamic data displays to provide users with an overview of their tasks, teams, and progress. In the task management system, I developed functionality for creating, assigning, and tracking tasks, including input validation and real-time updates using Firebase. I also designed and integrated a notification system that informed users of important events such as task updates, team invitations, and activity changes, improving overall user engagement. Throughout the project, I worked closely with other developers, designers, and the product owner in an Agile Scrum environment, participating in sprint planning, stand-ups, and retrospectives.',
      projectLink: 'https://future-forge-project.vercel.app/',
      gitHubLink: 'https://github.com/sophiaullrich/FutureForgeProject',
      showProjectLink: true,
      showGitHubLink: true,
      tags: [Tag.REACT, Tag.EXPRESS, Tag.FIREBASE, Tag.JAVASCRIPT, Tag.HTML, Tag.CSS],
      media: [
        '/images/gobear/gobear-image1.png',
        '/images/gobear/gobear-image2.png', 
        '/images/gobear/gobear-image3.png', 
        '/images/gobear/gobear-image4.png', 
        '/images/gobear/gobear-image5.png', 
      ]
    },
    {
      id: 1,
      name: 'SPEED Article Manager',
      summary: 'This is a full-stack web application for managing, moderating, and reviewing articles. Users can register, log in, submit, and access articles, while admins have elevated permissions for moderation and user management.',
      description: 'In a team of four, we developed a full-stack article management system following Agile Scrum practices and iterative development. The platform supports multiple user roles including general users who can submit and view approved articles, moderators who moderate pending articles and have full access functionalities and analysts who can view and evaluate article data for insights and reporting purposes. I contributed to the development of the article submission and moderation workflow, enabling users to submit article metadata through validated forms, which are then stored in a MongoDB database and queued for review. I also developed and implemented the moderation system and dashboard where moderators can approve or reject submissions, detect duplicate entries using title/DOI checks, and track previously rejected articles. The system ensures data integrity and workflow efficiency through role-based access control, validation mechanisms, and automated duplicate detection. Additionally, we integrated backend APIs with a responsive frontend interface, enabling seamless interaction between users and the system.\n\nAdmin Credentials\nUsername: admin\nPassword: admin',
      projectLink: 'https://speed-article-manager.vercel.app/',
      gitHubLink: 'https://github.com/cpm1147/SPEED-Article-Manager',
      showProjectLink: true,
      showGitHubLink: true,
      tags: [Tag.REACT, Tag.NEXTJS, Tag.NODEJS, Tag.NESTJS, Tag.MONGODB, Tag.TYPESCRIPT, Tag.HTML, Tag.TAILWIND],
      media: [
        '/images/SPEED/speed-image1.png',
        '/images/SPEED/speed-image2.png',
        '/images/SPEED/speed-image3.png',
        '/images/SPEED/speed-image4.png',
        '/images/SPEED/speed-image5.png',
        '/images/SPEED/speed-image6.png',
      ]
    },
    {
      id: 2,
      name: '3D RPG',
      summary: 'A 3D role-playing game developed in Unity where players can explore an interactive environment, pursue a basic quest, and engage in combat mechanics.',
      description: 'In a team of four, following Agile development principles, we designed and developed a 3D role-playing game using Unity and C#. I was in charge of core gameplay mechanics such as player movement, camera control, and combat systems. I implemented character controls using physics-based movement and input handling, allowing smooth navigation within a 3D environment. I designed and integrated combat functionality, including attack actions, dodging systems, a target locking combat system and basic enemy interactions. I implemented game assets and animations to deliver an immersive gameplay experience and leveraged Unity’s component-based architecture to manage game objects, scripts, and interactions efficiently.',
      projectLink: '/videos/Combat-demo.mp4',
      gitHubLink: 'https://github.com/Daniil-AUT/Ubihard_Game',
      showProjectLink: true,
      showGitHubLink: true,
      tags: [ Tag.UNITY, Tag.CSHARP],
      media: [
        '/images/3D-RPG/3D-RPG-image1.png',
        '/images/3D-RPG/3D-RPG-image2.png',
        '/images/3D-RPG/3D-RPG-image3.png',
        '/images/3D-RPG/3D-RPG-image4.png',
        '/images/3D-RPG/3D-RPG-image5.png',
      ]
    },
    {
      id: 3,
      name: 'Flight Booking System',
      summary: 'A simulated flight booking system where users can sign up and login, search and book flights, and view booking details though an SQL table.',
      description: 'Developed a full-featured flight booking system using Java Swing that simulates an end-to-end airline booking experience. The application allows users to create accounts, log in, search for flights, select departure and return dates, choose service classes, and book seats through an interactive graphical interface. Object-oriented programming principles were applied such as encapsulation, inheritance, and modular class design to model core entities such as accounts, flights, seats, and tickets, with a structured system for managing flight routes and seat availability in real time. The system includes input validation for user data and handles booking logic, including seat availability checks and prevention of invalid date selections. An embedded Apache Derby database was integrated using JDBC to persist booking data, which can be viewed in a tabular interface. Event-driven programming was used to manage user interactions across multiple screens, ensuring a smooth and responsive user experience. The project was developed using Java in Apache NetBeans IDE, focusing on clean code structure, logical data handling, and user interaction through a simple interface.',
      projectLink: '',
      gitHubLink: 'https://github.com/cpm1147/PDC_Assignment2_22183127',
      showProjectLink: false,
      showGitHubLink: true,
      tags: [Tag.JAVA],
      media: [
        '/images/flight-booking/flight-image1.png',
        '/images/flight-booking/flight-image2.png',
        '/images/flight-booking/flight-image3.png',
        '/images/flight-booking/flight-image4.png',
      ]
    },
    
    {
      id: 4,
      name: 'Portfolio Website',
      summary: 'A personal portfolio website showcasing projects, skills, and professional experience. Built with Angular and modern web technologies, the site ensures responsiveness, smooth animations, and an intuitive user experience.',
      description: 'Developed a fully responsive, single-page portfolio website using Angular, TypeScript, Bootstrap, and CSS, featuring dynamic sections with smooth scrolling and fade-in animations. The site includes an interactive project showcase with carousel-based displays, live links, and skill tags, as well as a contact form with email validation, reCAPTCHA, and toast notifications for success or error messages. Modern design elements such as gradient backgrounds, glass-morphism cards, and subtle animations provide a polished and engaging user experience. Navigation is enhanced with a sticky navbar, active section tracking, smooth scrolling, and hover underline effects.',
      projectLink: 'williedong.com',
      gitHubLink: 'https://github.com/cpm1147/PortfolioWebsite',
      showProjectLink: true,
      showGitHubLink: true,
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP],
      media: ['/images/portfolio-website/portfolio-website-image.png']
    },
  ];

  GetProjects(){
    return this.projects;
  }

  GetProjectsById(id: number) : Project{
    let project = this.projects.find(project => project.id===id);
    if( project === undefined){
      throw new TypeError('There is no project that matches the id:' + id);
    }
    return project;
  }

  GetProjectByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
  
}
