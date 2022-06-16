import { AxiosError, AxiosResponse } from "axios";
import { TTodo } from "../../../TTodo";
import axios from "axios";

export default async function updateTodo(
  newValue: TTodo
): Promise<TTodo | void> {
  if (!newValue.text || /^\s*$/.test(newValue.text)) {
    return;
  }
  const data = {
    id: newValue._id,
    text: newValue.text,
  };
  const url: string = `http://localhost:4000/edit/${newValue._id}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios
    .patch(url, data, config)
    .then((result: AxiosResponse<TTodo>): TTodo => result.data)
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        console.log(`error.response`, error.response);
      }
    });
}
