import axios from 'axios';

const login = async (userName:string, password:string) => axios.post('https://localhost:44324/token', { userName, password }, { withCredentials: true });

export default login;
