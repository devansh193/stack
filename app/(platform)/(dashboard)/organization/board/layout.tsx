import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  const { orgId } = auth();
  if (!orgId) {
    redirect("/select-org");
  }

  const board = await db.board.findFirst({
    where: {
      id: params.boardId,
      orgId,
    },
  });
  
  if (!board) {
    notFound();
  }

  return (
    <div
    className="relative h-full bg-no-repeat bg-cover bg-center"
    style={{backgroundImage: `url(${board.imageFullUrl})`}}>
      <main className="relative pt-20 h-full">
        {children}
      </main>
    </div>
  );
};
export default BoardIdLayout;
