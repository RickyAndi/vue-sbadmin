import axios from 'axios';
import NProgress from 'nprogress';
import session from './session';

export default {
  get(url) {
    
    if (session.get('nprogress:start') !== 'true') {
      NProgress.start();
      session.set('nprogress:start', 'true');
    } 
    
    return axios
      .get(url)
      .then((response) => {
        setTimeout(() => {
          NProgress.done();
          session.set('nprogress:start', 'false');
        }, 200)
        return response.data
      })
      .catch((error) => {
        const toBePassedError = {
          message: error.response.data.message,
          statusCode: error.response.status
        };
        throw JSON.stringify(toBePassedError);
      });
  }
}