import Cookies from 'js-cookie';

const islogin = async () => {
    const value = Cookies.get('_id'); 
    return (value)?1:0;
};

export default islogin; 