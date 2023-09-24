import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
        <h1 className="text-6xl">root</h1>
      <Outlet />
    </div>
  );
};

export default Root;
