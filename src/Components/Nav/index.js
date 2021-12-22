import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export default function Nav () {
    return (
        <div style={{
            width: '100%',
            height: '8vh',
            borderBottom: '1px solid grey',
            display: 'flex'
            }}>
            <div style={{ margin: 'auto 20px auto 20px' }}>
                <IconButton>
                    <MenuIcon style={{ fontSize: 36 }} />
                </IconButton>
            </div>
            <div style={{
                fontSize: 32,
                fontWeight: 600,
                letterSpacing: '4px',
                marginTop: 'auto',
                marginBottom: 'auto',
                paddingLeft: 10
                }}>Planner
            </div>
        </div>
    )
}