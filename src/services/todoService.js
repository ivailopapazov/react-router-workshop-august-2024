import axios from 'axios';

const baseUrl = 'https://dummyjson.com/todos';

export default {
    async getTodos() {
        const result = await axios.get(baseUrl)

        return result.data.todos;
    },
    async updateTodo({id, ...data}) {
        const result = await axios.put(`${baseUrl}/${id}`, data);

        return result;
    }
}

