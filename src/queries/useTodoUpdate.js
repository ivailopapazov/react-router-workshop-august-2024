import { useMutation, useQueryClient } from "@tanstack/react-query";

import todoService from "../services/todoService";
import { todosKeys } from "./query-keys";

export function useTodoUpdate(todoId) {
    const queryClient = useQueryClient();

    const todoMutation = useMutation({
        mutationFn: todoService.update,
        mutationKey: todosKeys.update(),
        onSuccess: ({ data }) => {
            queryClient.setQueryData(todosKeys.one(todoId), data);
        },
    });

    return todoMutation;
}
