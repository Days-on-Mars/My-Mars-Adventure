import axios from 'axios';

const signup = (username, password) => {
    return axios
      .post('/sign-up', { username, password })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
        return err.response.data;
       
      });
  };

  const login = (username, password) => {
    return axios
      .post('/log-in', { username, password })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return err.response.data;
      });
  };
  
  const logout = () => {
    return axios
      .delete('/log-out')
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return err.response.data;
      });
  };
  
  export { signup, login, logout };