import { Outlet } from "react-router-dom"
import Nav from "../component/mainComponent/Nav"
import Foot from "../component/mainComponent/Foot"

const MainLayout = () => {
  return (
    <div>
      <div><Nav/></div>
      <div className="main-h-screen"><Outlet/></div>
      <div><Foot/></div>
    </div>
  )
}

export default MainLayout
