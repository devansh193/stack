"use client";

import { List } from "@prisma/client";
import { ListForm } from "./list-form";

interface ListContainerData {
    data: List[];
    boardId: string;
};

export const ListContainer = ({boardId, data}:ListContainerData)=>{
    return(
        <ol>
            <ListForm/>
            <div className="flex shrink-0 w-1"/>
        </ol>
    )
}

