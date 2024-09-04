import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { BoardNavbar } from "./[boardId]/_components/board-navbar";
import { date } from "zod";

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
    className="min-h-screen w-full bg-no-repeat bg-cover bg-center"
    style={{backgroundImage: `url(${board.imageFullUrl})`}}>
      <BoardNavbar data={board}/>
      <div className="absolute inset-0 bg-black/10"/>
      <main className="relative pt-28 h-full">
        {children}
      </main>
    </div>
  );
};
export default BoardIdLayout;
