import { URL_BASE } from '../constants';

const getUserDetails = async () => {
  const token = localStorage.getItem('token');

  try {
    if (!token) throw new Error('User is not logged in');

    const response = await fetch(URL_BASE + '/user/details', {
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
      'There has been a problem with fetching user details:',
      error.message,
    );
    throw error;
  }
};

export default getUserDetails;
