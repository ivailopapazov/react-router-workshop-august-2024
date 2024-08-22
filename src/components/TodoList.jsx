import * as React from 'react';

import { useTodosUpdate } from '../queries/useTodosUpdate';
import { useGetTodos } from '../queries/useGetTodos';

import List from '@mui/material/List';
import TodoListItem from './TodoListItem';

export default function TodoList() {
    const todosQuery = useGetTodos();
    const todoMutation = useTodosUpdate();

    const todoClickHandler = (todo) => {
        const updatedTodo = { ...todo, completed: !todo.completed };

        todoMutation.mutate(updatedTodo);
    };

    return (
        <>
            <h1>Todo List</h1>

            {todosQuery.isError
                ? <div>Failed to load todos</div>
                : todosQuery.isFetching
                    ? <div>Loading Todos...</div>
                    : (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {todosQuery.data.map((todo) =>
                                <TodoListItem
                                    key={todo.id}
                                    todo={todo}
                                    clickHandler={todoClickHandler}
                                />
                            )}
                        </List>
                    )
            }
        </>
    );
}
