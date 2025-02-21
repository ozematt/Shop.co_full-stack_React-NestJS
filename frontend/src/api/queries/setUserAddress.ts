import { CheckoutAddressForm } from '../../components/CheckoutAddressForm';
import { URL_BASE } from '../constants';

const setUserAddress = async (userAddress: CheckoutAddressForm) => {
  const token = localStorage.getItem('token');

  try {
    if (!token) throw new Error('User is not logged in');

    const response = await fetch(URL_BASE + '/user/address', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(userAddress),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network response not ok');
    }

    const result = await response.json();

    return result;
  } catch (error: any) {
    console.error(
      'There has been a problem with setting user address:',
      error.message,
    );
    throw error;
  }
};

export default setUserAddress;
