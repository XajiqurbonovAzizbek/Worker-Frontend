import React from 'react'
import { Download, Search } from "../../components"
export default function UserPage() {
  return (
    <div className="d-flex py-3" style={{height:"80%",width:"100%"}}>
        <Search/>
        <Download/>
    </div>
  )
}
