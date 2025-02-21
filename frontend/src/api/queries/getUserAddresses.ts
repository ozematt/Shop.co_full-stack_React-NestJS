// import { OrdersT } from '../../lib/types';
import { URL_BASE } from '../constants';

const getUserAddresses = async () => {
  const token = localStorage.getItem('token');

  try {
    if (!token) throw new Error('User is not logged in');

    const response = await fetch(URL_BASE + '/user/address', {
      headers: { Authorization: token },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network response not ok');
    }

    const result = await response.json();

    return result;
  } catch (error: any) {
    console.error(
      'There has been a problem with fetching user addresses:',
      error.message,
    );
    throw error;
  }
};

export default getUserAddresses;
