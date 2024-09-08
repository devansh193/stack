"use client";

import { ListWithCards } from "@/types";

interface ListItemProps {
    data: ListWithCards;
    index: number;
}

export const ListItem = ({data, index}:ListItemProps) =>{
    return (
         <div>
            <h1 className="text-white test-xl">List item.</h1>
            
         </div>
    );
};
 