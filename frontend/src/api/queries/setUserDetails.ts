import { UserInfoDetails } from '../../components/UserInfoDetailsEdit';
import { URL_BASE } from '../constants';

const setUserDetails = async (userDetails: UserInfoDetails) => {
  const token = localStorage.getItem('token');

  try {
    if (!token) throw new Error('User is not logged in');

    const response = await fetch(URL_BASE + '/user/details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(userDetails),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network response not ok');
    }

    const result = await response.json();

    return result;
  } catch (error: any) {
    console.error(
      'There has been a problem with setting user details:',
      error.message,
    );
    throw error;
  }
};

export default setUserDetails;
