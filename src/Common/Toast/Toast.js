import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SuccessToastMessage = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const ErrorToastMessage = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
  });
};