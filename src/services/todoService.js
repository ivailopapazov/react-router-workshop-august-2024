import axios from 'axios';

const baseUrl = 'https://dummyjson.com/todos';

export default {
    async getAll() {
        const result = await axios.get(baseUrl)

        return result.data.todos;
    },
    async getOne(todoId) {
        const result = await axios.get(`${baseUrl}/${todoId}`);

        return result.data;
    },
    async update({ id, ...data }) {
        const result = await axios.put(`${baseUrl}/${id}`, data);

        return result;
    },
    async delete({ todoId }) {
        return axios.delete(`${baseUrl}/${todoId}`);
    }
}

