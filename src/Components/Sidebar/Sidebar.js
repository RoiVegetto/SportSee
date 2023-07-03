import React from 'react';
import './Sidebar.css';
import LogoSidebar from '../IconSidebar/IconSidebar';

function Sidebar() {
  return (
    <navbar className="sidebar">
      <div className='icon-sidebar'>
        <LogoSidebar icon="/Images/zen.png" />
        <LogoSidebar icon="/Images/swim.png" />
        <LogoSidebar icon="/Images/velo.png" />
        <LogoSidebar icon="/Images/dumbbell.png" />
      </div>
      <p>Copiryght, SportSee 2020</p>
    </navbar>
  );
}

export default Sidebar;
