import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Function to check authentication status based on cookies or other mechanisms
function checkAuthentication(request: NextRequest): boolean {
  // Implement your authentication logic here
  // For example, check if a specific authentication cookie exists
  const cookieStore = cookies();
  const authCookie = cookieStore.get("token");
  // Return true if the user is authenticated, false otherwise
  return Boolean(authCookie);
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middleware was called")
  // Check if the user is authenticated by examining cookies or any other authentication mechanism
  const isAuthenticated = checkAuthentication(request);

  if (isAuthenticated) {
    console.log("yes logged in")
    // User is authenticated, allow access to the wishlist page
    return NextResponse.next();
  } else {
    // User is not authenticated, redirect to the login page
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/wishlist/:path*",
};
