import React, { useState, useEffect } from 'react';
import dockingStationList from '../api/getDockingStation';
import DockingStation from '../component/DockingStation';


const ListDockingStation = () => {
    return (
        <div className="station-container">
            <div className="station-header">Danh sách bãi xe</div>
            <div className="list-station flex">
                { dockingStationList.map((item) =>
                    <DockingStation station={ item } key={ item.id } />
                ) }
            </div>
        </div>
    );
}

export default ListDockingStation;