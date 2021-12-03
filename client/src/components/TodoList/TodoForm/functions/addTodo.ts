import { AxiosError, AxiosResponse } from "axios";
// import axiosConfig from "../../../../config/axiosConfig";
import { TTodo } from "../../../TTodo";
import axios from "axios";

export default async function addTodo(todo: TTodo): Promise<TTodo | void> {
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
  console.log(`data`, data);
  await axios
    .post(url, data, config)
    .then((result: AxiosResponse<TTodo>): TTodo => result.data)
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        console.log(`error.response`, error.response);
      }
    });

  // const url: string = "http://localhost:4000/add";

  // console.log(`todo`, todo);
  // return await axiosConfig({
  //   method: todo.id ? "PATCH" : "POST",
  //   url: todo.id ? `${url}/${todo.id}` : url,
  //   data: data,
  // })
  //   .then((result: AxiosResponse<TTodo>): TTodo => result.data)
  //   .catch((error: AxiosError<any>): void => {
  //     if (error.response) {
  //       console.log(`error.response`, error.response);
  //     }
  //   });
}
