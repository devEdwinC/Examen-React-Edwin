import { helpHttp } from "../helpers/helpHttp";
import { ServiceProps } from "../types/types";
import { IListEmployees } from "../types/types";
import { ENDPOINT } from "./settings";
export default async function getEmployes(name:ServiceProps["name"]) {
    let url:string = `${ENDPOINT}/v1/examen/employees/:${name}`;
    let options:Object = {
      headers: {
        "content-type": "application/json",
      },
    };
    return await helpHttp().get(url, options).then((res):Promise<IListEmployees> => {
      return res;
    }).then((res:IListEmployees) => {
      return res;
    });
  }