import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { todosKeys } from './query-keys';

export function useTodosQuery() {
    const todosQuery = useQuery({
        queryKey: todosKeys.all(),
        queryFn: getTodos,
        staleTime: 5 * 60 * 1000,
        retry: 0,
        initialData: [],
    });

    return todosQuery;
}

async function getTodos() {
    const result = await axios.get('https://dummyjson.com/todos')

    return result.data.todos;
}
