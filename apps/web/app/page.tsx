import { prisma } from "@repo/database";

export default async function Home() {
  const user = await prisma.user.findFirst();

  return (
    <div>
      First name haha:
      {user?.email}
      password:
      {user?.password}
    </div>
  );
}
