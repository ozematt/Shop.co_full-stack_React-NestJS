import { URL_BASE } from '../constants';

type Authenticate = {
  auth: string;
  email: string;
  password: string;
};

const authenticate = async ({ auth, email, password }: Authenticate) => {
  try {
    const response = await fetch(URL_BASE + '/auth/' + auth, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network response not ok');
    }

    const result = await response.json();

    if (result.access_token) {
      return result;
    } else {
      throw Error('Authentication failed: token not provided by the server.');
    }
  } catch (error: any) {
    console.error('There has been a problem with fetch:', error.message);
    throw error;
  }
};

export default authenticate;
