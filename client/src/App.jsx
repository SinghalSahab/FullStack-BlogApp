import {Routes,Route,Outlet} from "react-router-dom";
import {Home,BlogDetails,CategoriesPage,WriterPage,LoginPage,SignupPage} from "./pages";

import { useState } from "react";
import { Navbar ,Loading, Footer} from "./components";
import useStore from "./store";
function Layout(){
  return (
    <div className="w-full flex flex-col min-h-screen px-4 md:px-10 2xl:px-28 ">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
function App(){
  const { theme, isLoading } = useStore();
  return (
    
    <main className = {theme}>
      <div className="w-full min-h-screen relative bg-white dark:bg-[#020b19]">
        <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<CategoriesPage />} />
            <Route path='/:slug/:id?' element={<BlogDetails />} />
            <Route path='/writer/:id' element={<WriterPage />} />
        </Route>

          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/sign-in' element={<LoginPage />} />
        </Routes>
        {isLoading && <Loading />}
      </div>

    </main>
  );
}
export default App;