import { Route, Routes } from "react-router-dom";
import { Header, MakeOwner, Map } from "./components";
import React from "react";
const UserPage=React.lazy(()=>import("./pages/userPage/userPage"))
function App() {
  return (
    <div className="App vw-100 vh-100 overflow-hidden position-relative">
        <Map/>
        <div className="w-100 p-1 container col h-100">
          <Header/>
            <Routes>
              <Route path="/" element={<React.Suspense><UserPage/></React.Suspense>}/>
            </Routes>
          <MakeOwner/>
        </div>
    </div>
  );
}

export default App;
