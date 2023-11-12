import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { username, password } = await req.json();

  // Your authentication logic here
  const isAuthenticated = authenticateUser(username, password);

  if (isAuthenticated) {
    // Set the authentication cookie or handle the authentication success as needed
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // Expires in 7 days

    const cookieOptions = {
      path: "/",
      expires: expirationDate,
      // Add other cookie options as needed (e.g., domain, secure, httpOnly)
    };
    const cookieStore = cookies();
    cookieStore.set("token", `LoginTokenIsHere ${serialize(cookieOptions)}`);

    // Return a success response
    return NextResponse.json({ success: true, message: "Login successful" });
  } else {
    // Return a failure response
    return NextResponse.json({
      success: false,
      message: "Authentication failed",
    });
  }
}

// Helper function to authenticate the user (replace this with your actual authentication logic)
function authenticateUser(username: string, password: string): boolean {
  // Your authentication logic here
  // For example, check against a database, validate against stored credentials, etc.
  // Return true if authentication is successful, false otherwise
  if (username === "admin" && password === "12345") {
    return true;
  }
  return false;
}

// Helper function to serialize cookie options
function serialize(options: Record<string, any>): string {
  // Your serialization logic here
  // This might involve converting options into a string format for the Set-Cookie header

  // Example: Serialize expiration date
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  return Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");
}
