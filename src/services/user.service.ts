import { cookies } from "next/headers";

const cookieStore = await cookies();

export const userService = {
  getSession: async () => {
    try {
      const res = await fetch(`${process.env.SERVER_API}/api/auth/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();
      return { data: session, error: null };
    } catch (error) {
      console.error("Error fetching session:", error);
      return { data: null, error: { message: "Failed to fetch session" } };
    }
  },
};
