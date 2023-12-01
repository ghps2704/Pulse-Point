import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getTasks() {
    return apiClient.get('/tasks');
  },

  createTask(taskData) {
    return apiClient.post('/tasks', taskData);
  },

  getPacient() {
    return apiClient.get('/patient-status');
  },
};