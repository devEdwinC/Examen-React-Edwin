import { helpHttp } from "../helpers/helpHttp";
import { FormEmployeeState } from "../types/types"
import { ENDPOINT } from "./settings";
import { resSetEmpleado } from "../types/types";


export default async function setEmployee({name, last_name}:FormEmployeeState, date:string|undefined) {
    let url: string = `${ENDPOINT}/v1/examen/employees/edwin_contreras`;
    let options: Object = {
        body: {
            name: name,
            last_name: last_name,
            birthday: date,
        },
        headers: {
            "content-type": "application/json",
        },
    };
    return await helpHttp().post(url, options).then((res):Promise<resSetEmpleado> => {
        return res;
    }).then((res:resSetEmpleado) => {
        return res;
    });
}