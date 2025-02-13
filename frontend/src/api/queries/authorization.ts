import { AUTH_BASE } from '../constants';

type Authenticate = {
  auth: string;
  email: string;
  password: string;
};
//AUTH_BASE + '/auth' + auth

const authenticate = async ({ auth, email, password }: Authenticate) => {
  try {
    const response = await fetch('http://localhost:3005/auth/register', {
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
