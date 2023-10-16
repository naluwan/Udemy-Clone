import { authMiddleware } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware

// 下方authMiddleware可在publicRoutes中加入路徑，可使路徑不受保護(不登入也可查看)
// export default authMiddleware({
//   publicRoutes: ['/test'],
// });
export default authMiddleware({});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
