import { useMutation, useQueryClient } from "@tanstack/react-query";

import todoService from "../services/todoService";
import { todosKeys } from "./query-keys";

export function useTodosUpdate() {
    const queryClient = useQueryClient();

    const todoMutation = useMutation({
        mutationFn: todoService.updateTodo,
        mutationKey: todosKeys.update(),
        onSuccess: ({ data }) => {
            console.log(data);
            queryClient.setQueryData(todosKeys.all(), (oldTodos) =>
                oldTodos.map(todo => todo.id === data.id ? data : todo)
            );
        },
    });

    return todoMutation;
}
