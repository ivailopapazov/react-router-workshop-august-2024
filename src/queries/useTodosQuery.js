import { useQuery } from '@tanstack/react-query';
import { todosKeys } from './query-keys';
import todoService from '../services/todoService';

export function useTodosQuery() {
    const todosQuery = useQuery({
        queryKey: todosKeys.all(),
        queryFn: todoService.getTodos,
        staleTime: 1 * 60 * 1000,
        initialData: [],
    });

    return todosQuery;
}

