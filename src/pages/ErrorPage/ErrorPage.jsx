import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">OOPS!</h1>
      <p className="text-lg mt-6">
        {error?.status} {error?.statusText}
      </p>
      <p className="text-lg mt-6">{error?.data}</p>

      <Link to="/">
        <button className="mt-8 bg-green-600 text-white text-lg font-medium px-6 py-2 rounded">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
