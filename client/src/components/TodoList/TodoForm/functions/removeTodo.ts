import { AxiosError, AxiosResponse } from "axios";
import { TTodo } from "../../../TTodo";
import axios from "axios";

export default async function removeTodo(id: number): Promise<TTodo | void> {
  const url: string = `http://localhost:4000/delete/${id}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  await axios
    .delete(url, config)
    .then((result: AxiosResponse<void>): void =>
      console.log("successfully removed")
    )
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        console.log(`error.response`, error.response);
      }
    });
}
