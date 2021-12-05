import { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { TTodo } from "../../../TTodo";
import { TDataTodos } from "./TDataTodos";

export function fetchData(
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  axios
    .get("http://localhost:4000/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result: AxiosResponse<TDataTodos>) => {
      setTodos(result.data.todos);
      setIsLoading(false);
    })
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        setIsLoading(false);
        console.log(`error.response`, error.response);
      }
    });
}
