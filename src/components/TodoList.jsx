import * as React from 'react';

import { useTodosUpdate } from '../queries/useTodosUpdate';
import { useTodosQuery } from '../queries/useTodosQuery';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import TodoListItem from './TodoListItem';

export default function TodoList() {
    const todosQuery = useTodosQuery();
    const todoMutation = useTodosUpdate();

    const todoClickHandler = (todo) => {
        const updatedTodo = { ...todo, completed: !todo.completed };

        todoMutation.mutate(updatedTodo);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
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
        </Container>
    );
}
