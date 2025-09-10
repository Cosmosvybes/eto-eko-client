import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    () => clearTimeout(timer);
  }, [location]);

  if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center z-20 fixed top-0 right-0 left-0 bg-[rgba(0,0,0,0.14)]">
        <div className="loader"></div>
      </div>
    );

  return (
    <>
      <div>
        <Outlet /> {children}
      </div>
    </>
  );
};

export default Layout;
