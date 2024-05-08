import { Outlet } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

const App = () => {
  return (
    <div className='min-h-full'>
      <MainLayout />

      <main>
        <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
