import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold text-red-600">OOPS!</h1>
      <p className="text-xl font-semibold mt-6">
        {error?.status} {error?.statusText}
      </p>
      <p className="text-lg max-w-lg mx-auto mt-6">The page you are looking for might have been removed or is temporarily unavailable!</p>

      <Link to="/">
        <button className="mt-8 bg-green-600 text-white text-lg font-medium px-6 py-2 rounded">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
