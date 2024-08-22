export const todosKeys = {
    all: () => ['todos'],
    one: (todoId) => ['todos', todoId],
    update: () => ['mutate-todos']
};
