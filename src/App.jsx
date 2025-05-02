import { useState } from "react";
import "./App.css";
import { ResumeProvider } from "./context/ResumeContext";
import { Header, Footer } from "./components";
import { Preview } from "./pages";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  const location = useLocation(); // Get the current route

  const hidePreviewRoutes = ["/", "/preview"];
  const Navigate=useNavigate();
  return (
    <ResumeProvider>
      <div>
        <Header />
        <div className="w-full md:flex justify-center md:px-20 p-10 gradient-bg gap-15 relative">
          <div>
            <Outlet />
          </div>
          {!hidePreviewRoutes.includes(location.pathname) && (
            <div className="w-100 min-h-200 flex flex-col justify-start h-fit overflow-y-hidden overflow-x-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
              <div className="scale-50 absolute -top-40 left-250 cursor-pointer"
              onClick={()=>Navigate('/preview')}>
                <Preview />
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </ResumeProvider>
  );
}

export default App;
