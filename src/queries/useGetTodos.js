import { useQuery } from '@tanstack/react-query';
import { todosKeys } from './query-keys';
import todoService from '../services/todoService';

export function useGetTodos() {
    const todosQuery = useQuery({
        queryKey: todosKeys.all(),
        queryFn: todoService.getAll,
        staleTime: 10 * 1000,
        initialData: [],
    });

    return todosQuery;
}

