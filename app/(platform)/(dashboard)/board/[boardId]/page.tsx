import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ListContainer } from "./_components/list-container";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { orgId } = auth();
  if (!orgId) {
    redirect("/select-org");
  }
  const lists =await  db.list.findMany({
    where: {
      id: params.boardId,
      board: {
        orgId,
      },
    },
    include: {
      card: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

return (
    <div className="p-4 h-full overflow-x-auto">
        <ListContainer
            boardId={params.boardId}
            data={lists}
        />
        Board Id
    </div>
);
};
export default BoardIdPage;
