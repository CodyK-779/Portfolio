import z from "zod";
import { formSchema } from "./schema";

export const send = (data: z.infer<typeof formSchema>) => {
  console.log(data);
};
