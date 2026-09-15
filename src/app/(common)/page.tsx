import { userService } from "@/services/user.service";

export default async function Home() {
  const session = await userService.getSession();

  return (
    <div>
      <h1>Welcome To Schreibkreis</h1>
      <p>Current User: {session.data?.user?.email}</p>
    </div>
  );
}
