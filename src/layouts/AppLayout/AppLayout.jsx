import React from 'react'
import { Outlet } from "react-router-dom";
import { Header, MakeOwner, Map } from "../../components";

export default function AppLayout() {
  return (
    <div className="App vw-100 vh-100 overflow-hidden position-relative">
        <Map/>
        <div className="w-100 p-1 container col h-100">
          <Header/>
          <Outlet/>
          <MakeOwner/>
        </div>
    </div>
  )
}
