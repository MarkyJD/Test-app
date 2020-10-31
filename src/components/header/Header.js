import React from 'react';
import './Header.css';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import LogoutIcon from '@material-ui/icons/ExitToAppOutlined';

function Header() {
    return (
        <div className="header">
            <TextField
                className="search-bar"
                variant="outlined"
                color="primary"
                id="input-with-icon-textfield"
                placeholder="What are you looking for?"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <div className="logout">
                <LogoutIcon className="exit-icon"/>
                <h3>Exit</h3>
            </div>
            
        </div>
    )
}

export default Header;
