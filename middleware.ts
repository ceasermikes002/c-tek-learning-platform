import { withAuth } from "next-auth/middleware"

export default withAuth({
  // Optionally, you can specify which pages should be protected
  pages: {
    // signIn: "/sign-in"
  }
})

export const config = {
  // Specify which paths should be protected
  matcher: [
    "/protected/:path*",
    "/dashboard/:path*",
    // Add other protected routes
  ]
}