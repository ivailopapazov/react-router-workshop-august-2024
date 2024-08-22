export const todosKeys = {
    all: () => ['todos'],
    one: (todoId) => ['todos', todoId],
    update: () => ['update-todo'],
    create: () => ['create-todo'],
    delete: () => ['delete-todo'],
};
