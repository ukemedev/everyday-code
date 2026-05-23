export async function authenticateOAuthRequest(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  const token = authHeader.replace("Bearer ", "");
  if (!token) return null;
  
  // Return mock user for development
  return { userId: "dev-user-123" };
}
