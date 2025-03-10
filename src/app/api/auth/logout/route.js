import { cookies } from "next/headers";

export async function GET() {
    cookies().delete("accessToken");
    return Response.json({ message: "Logged out successfully" }, { status: 200 });
}
