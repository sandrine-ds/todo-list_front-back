import { TTodo } from "../../TTodo";

export interface ITodoForm {
    edit?: TTodo;
    onSubmit: (todo: TTodo) => void;
  }