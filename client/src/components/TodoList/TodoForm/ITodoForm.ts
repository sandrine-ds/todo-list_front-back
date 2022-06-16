import { TTodo } from "../../TTodo";

export interface ITodoForm {
  edit?: TTodo;
  setNeedReload: React.Dispatch<React.SetStateAction<boolean>>;
  setEdit?: React.Dispatch<React.SetStateAction<TTodo>>;
}
