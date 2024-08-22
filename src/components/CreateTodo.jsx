import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAuthContext } from '../contexts/AuthContext';
import { todosKeys } from '../queries/query-keys';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function CreateTodo() {
    const navigate = useNavigate();
    const { id: userId } = useAuthContext();
    const queryClient = useQueryClient();

    const createTodoMutation = useMutation({
        mutationFn: createTodo,
        mutationKey: todosKeys.create(),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: todosKeys.all(),
                exact: true,
            });
        },
    });

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        createTodoMutation.mutate({ title: formData.get('title'), userId });

        navigate('/todos');
    }

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <TextField id="standard-basic" label="Title" name="title" variant="standard" />
                <Button
                    type='submit'
                    variant="outlined"
                >
                    Create
                </Button>
            </form>
        </>
    );
}

async function createTodo({ title, userId }) {
    return await axios.post('https://dummyjson.com/todos/add', {
        todo: title,
        completed: false,
        userId,
    });
}
