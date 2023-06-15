import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content w-full flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-[20px] font-semibold h-full bg-[#ecfccb] text-base-content">
      {/* Sidebar content here */}
      <li className='mb-2'><Link to='addTask'>Add Task</Link></li>
      <li><Link to='allTask'>All Task</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default MainLayout;