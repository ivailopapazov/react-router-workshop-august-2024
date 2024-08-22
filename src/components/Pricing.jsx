import { useGetTodos } from '../queries/useGetTodos';

export default function Pricing() {
    const todosQuery = useGetTodos();

    console.log(todosQuery.data);

    return (
        <>
            <h1>Pricing</h1>
        </>
    );
}
