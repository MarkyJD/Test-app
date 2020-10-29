import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            
            {/* Logo */}
            
            {/* Menu Item */}
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Messages"    Icon={MessageIcon}/>
            <SidebarOption text="Action Book" Icon={BuildIcon}/>
            <SidebarOption text="Settings" Icon={SettingsIcon}/>

            {/* Menu Item */}
            {/* Menu Item */}
            {/* Menu Item */}
            {/* Menu Item */}

        </div>
    );
}

export default Sidebar;
