
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Board } from "./board";
const OrganizationPage =  async () =>{
    const board = await db.board.findMany();
    const {userId, orgId} = auth();
    return (
        <div className="flex flex-col space-y-4">
            <form action={create}>
            <input
            id="title"
            name="title"
            required
            placeholder="Enter the title"
            className="border-black border p-2 rounded-md"
            />
            <Button type="submit">Submit</Button>
            </form>
            <div className="space-y-2">
                {board.map((board)=>(
                   <Board key={board.id} title={board.title} id={board.id}/>
                ))}
            </div>
        </div>
    );
};

export default OrganizationPage;