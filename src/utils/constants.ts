export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROCESS: '/process',
  PORTFOLIO: '/portfolio',
  DIFFERENTIATION: '/differentiation',
  CONTACT: '/contact',
  ADMIN: '/admin',
  ADMIN_PORTFOLIO: '/admin/portfolio',
  ADMIN_CONTACTS: '/admin/contacts'
} as const;

export const VIDEO_FORMATS = ['mp4', 'mov', 'avi', 'mkv'] as const;
export const IMAGE_FORMATS = ['jpg', 'jpeg', 'png', 'webp'] as const;

export const MAX_FILE_SIZE = {
  VIDEO: 100 * 1024 * 1024, // 100MB
  IMAGE: 5 * 1024 * 1024,   // 5MB
} as const;

export const COMPANY_INFO = {
  name: 'Video Crew',
  email: 'info@videocrew.com',
  phone: '(555) 123-4567',
  address: '123 Creative St, Video City, VC 12345'
} as const;