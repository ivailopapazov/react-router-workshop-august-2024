import { useQuery } from "@tanstack/react-query";

import todoService from "../services/todoService";
import { todosKeys } from "./query-keys";

export function useGetTodo(todoId) {
    const todoQuery = useQuery({
        queryKey: todosKeys.one(todoId),
        queryFn: () => todoService.getOne(todoId),
    });

    return todoQuery;
}
