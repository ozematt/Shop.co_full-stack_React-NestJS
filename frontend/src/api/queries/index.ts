import getCategoryList from './getCategoryList';
import getAllProducts from './getAllProducts';
import getOrder from './getOrders';
import authenticate from '../queries/authorization';
import setOrder from './setOrder';
import getProductsByCategory from './getProductsByCategory';
import getUserDetails from './getUserDetails';
import setUserDetails from './setUserDetails';
import editUserDetails from './editUserDetails';
import getUserAddresses from './getUserAddresses';

export {
  getUserAddresses,
  editUserDetails,
  setUserDetails,
  getUserDetails,
  getCategoryList,
  getAllProducts,
  getProductsByCategory,
  getOrder,
  authenticate,
  setOrder,
};
