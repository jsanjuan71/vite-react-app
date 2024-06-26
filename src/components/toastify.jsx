import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Toastify(props) {
  return (
    <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
    />
  )
}

export default Toastify