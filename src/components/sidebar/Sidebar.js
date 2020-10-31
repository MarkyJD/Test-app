import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import LocalLibraryIcon from '@material-ui/icons/LocalLibraryOutlined';
import StorageIcon from '@material-ui/icons/StorageOutlined';
import MoneyIcon from '@material-ui/icons/AttachMoneyOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="logo-container">
                <LocalLibraryIcon className="logo"/>
                <h1>Atlas</h1>
            </div>
            
            {/* Menu Items */}
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Messages"    Icon={MessageIcon}/>
            <SidebarOption text="Jobs" Icon={BuildIcon}/>
            <SidebarOption text="Drive" Icon={StorageIcon}/>
            <SidebarOption text="Targets" Icon={MoneyIcon}/>
            <SidebarOption text="Settings" Icon={SettingsIcon}/>


        </div>
    );
}

export default Sidebar;
