"use client";

import { List } from "@prisma/client";
import { ListForm } from "./list-form";
import { useEffect, useState } from "react";
import { ListItem } from "./list-item";

interface ListContainerData {
  data: List[];
  boardId: string;
}

export const ListContainer = ({ boardId, data }: ListContainerData) => {
  const [orderedData, setOrderedData] = useState(data);
  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className="flex gap-x-3 h-full">
        {orderedData.map((list, index)=>{
            return (
                <ListItem
                key={list.id}
                index={index}
                data={list}
                />
            )
        })}
      <ListForm />
      <div className="flex shrink-0 w-1" />
    </ol>
  );
};
