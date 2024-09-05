import {z} from "zod";

export const UpdateBoard = z.object({
    title: z.string({
        required_error:"Title is required",
        invalid_type_error:"Title is required",
    }).min(3,{
        message:"Minimum three characters required."
    }),
    id: z.string(), 
});