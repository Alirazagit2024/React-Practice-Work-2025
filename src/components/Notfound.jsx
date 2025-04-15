import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="h-screen flex flex-col justify-center items-center my-10">
        <img src='/images/error-2.png' className="w-80 h-auto" alt="ds" />
        <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-2">Oops! Lagta hai yeh page exist nahi karta.</p>
        <Link to="/" className="my-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Go Home</Link>
      </div>
    );
  };
  
  export default NotFound;
  