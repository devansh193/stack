import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface BoardIdPageProps {
    params:{
        boardId: string
    };
};

const BoardIdPage = async ({params}:BoardIdPageProps) =>{
    const {orgId} = auth();
    if(!orgId){
        redirect("/select-org");
    }
    return(
        <div>
            
        </div>
    );
};
export default BoardIdPage;