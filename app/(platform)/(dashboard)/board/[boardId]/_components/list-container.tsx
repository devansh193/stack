"use client";

import { List } from "@prisma/client";

interface ListContainerData {
    data: List[];
    boardId: string;
};

export const ListContainer = ({boardId, data}:ListContainerData)=>{
    return(
        <div>
            list container.
        </div>
    )
}

