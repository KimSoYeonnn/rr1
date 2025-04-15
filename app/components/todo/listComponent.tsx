import {useQuery} from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import {testTodoList} from "~/api/todoAPI";


function TodoListComponent () {

    const [searchParams] = useSearchParams();

    const pageStr = searchParams.get("page") || "1"
    const sizeStr = searchParams.get("size") || "10"

    console.log("pageStr: ", pageStr, " sizeStr: ", sizeStr)

    // Queries
    const query = useQuery({
        queryKey: ['todos'],
        queryFn: () => testTodoList(pageStr, sizeStr),
        staleTime: 10 * 60 * 1000, // 신선도 판단 기준
    })

    const {isFetching, data, error } = query

    return (
        <div>
            <div className={'text-4xl'}>Todo List Component </div>
            <div className={'text-3xl bg-amber-600'}> {isFetching && <h1>Loading.........</h1>}</div>

            {data && <div className={'text-2xl'}>List 출력</div>}
        </div>
    )
}

export default TodoListComponent