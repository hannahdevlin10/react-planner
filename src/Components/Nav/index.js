import React from 'react';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function Nav () {
    return (
        <div style={{
            width: '100%',
            height: '8vh',
            borderBottom: '1px solid grey',
            display: 'flex'
            }}>
            <div style={{ margin: 'auto 20px auto 20px' }}>
              <ScheduleIcon style={{ fontSize: 36 }} />
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