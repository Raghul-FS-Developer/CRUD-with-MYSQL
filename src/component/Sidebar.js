import React from "react";
import { useNavigate } from "react-router-dom";

function SideBar() {
  let nav = useNavigate();
  return (
    <div style={{ position: "fixed" }}>
      <ul
        class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a class="sidebar-brand d-flex align-items-center justify-content-center">
          <div class="sidebar-brand-text mx-3" style={{ marginTop: "40px" }}>
            post graduate Students<sup>Portal</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0" />

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div class="sidebar-heading text-white" style={{ marginTop: "40px" }}>
          Interface
        </div>

        <li class="nav-item mt-4">
        
            <h4 className="text-light  ml-4" style={{cursor:"pointer"}}onClick={()=>nav('/')}>Add Student</h4>
          
        </li>

        <li class="nav-item mt-4">
          <h4 className="text-light ml-4" style={{cursor:"pointer"}} onClick={()=>nav('/all-students')}>All Student</h4>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />
      </ul>
    </div>
  );
}

export default SideBar;
