export const environment = {
  production: true,
  emailJsServiceId: (process.env['EMAILJS_SERVICE_ID'] as string) || '',
  emailJsTemplateId: (process.env['EMAILJS_TEMPLATE_ID'] as string) || '',
  emailJsPublicKey: (process.env['EMAILJS_PUBLIC_KEY'] as string) || '',
  recaptchaSiteKey: (process.env['RECAPTCHA_SITE_KEY'] as string) || ''
};