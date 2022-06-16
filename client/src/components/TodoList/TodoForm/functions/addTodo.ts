import { AxiosError, AxiosResponse } from "axios";
// import axiosConfig from "../../../../config/axiosConfig";
import { TTodo } from "../../../TTodo";
import axios from "axios";

export default async function addTodo(todo: TTodo): Promise<TTodo | void> {
  if (!todo.text || /^\s*$/.test(todo.text)) {
    return;
  }
  const data = {
    id: "",
    text: todo.text,
  };
  const url: string = "http://localhost:4000/add";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios
    .post(url, data, config)
    .then((result: AxiosResponse<TTodo>): TTodo => result.data)
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        console.log(`error.response`, error.response);
      }
    });
}
