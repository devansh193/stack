import { Separator } from "@/components/ui/separator";
import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";


const OrganizationPage =  async () =>{
   

    return (
        <div className="flex flex-col space-y-4 w-full mb-20">
            <Info/>
            <Separator className="my-4"/>
            <div className="px-3 md:px-4">
                <BoardList/>
            </div>
        </div>
    );
};

export default OrganizationPage;