import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import LocalLibraryIcon from '@material-ui/icons/LocalLibraryOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="logo-container">
                <LocalLibraryIcon className="logo"/>
                <h1>Action Book</h1>
            </div>
            
            {/* Menu Items */}
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Messages"    Icon={MessageIcon}/>
            <SidebarOption text="Action Book" Icon={BuildIcon}/>
            <SidebarOption text="Settings" Icon={SettingsIcon}/>

        </div>
    );
}

export default Sidebar;
