import axios from "axios";
import type {ActionResult} from "~/types/common";


const host = "http://localhost:8080/api/v1/todos";

export async function testTodoList(page:string, size:string) {

    const res = await axios.get(`${host}/list?page=${page}&size=${size}`);

    return res.data
}

export async function testTodoAdd(todo:TodoAdd):Promise<ActionResult<number>> {

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(todo);

    return {result:'success', data: 123}

}