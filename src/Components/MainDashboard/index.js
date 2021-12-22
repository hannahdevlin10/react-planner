import React from 'react';
import CalendarComponent from '../CalenderComponent';
import PlanList from '../PlanList';

export default function MainDashboard () {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '35%' }}>
                <PlanList />
            </div>
            <div style={{ width: '65%', marginTop: 81 }}>
                <CalendarComponent />
            </div>
        </div>
        
    )
}