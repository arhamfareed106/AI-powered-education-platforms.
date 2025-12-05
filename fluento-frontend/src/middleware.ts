import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/', '/login', '/signup', '/forgot-password', '/features', '/pricing', '/about', '/contact', '/blog', '/support', '/settings', '/student/dashboard', '/student/assignments', '/student/conversation', '/student/lessons', '/student/analytics', '/teacher/dashboard', '/teacher/assignments', '/teacher/classes', '/teacher/students', '/school-admin/dashboard', '/school-admin/billing', '/school-admin/teachers'];
const studentPaths = ['/dashboard', '/ai-tutor', '/assignments', '/progress', '/settings'];
const teacherPaths = ['/teacher', '/teacher/dashboard', '/teacher/assignments', '/teacher/students'];
const adminPaths = ['/admin', '/admin/schools', '/admin/users'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Check for auth token
  const token = request.cookies.get('access_token')?.value;
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Role-based access control would go here
  // For now, just allow authenticated users
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
