import React, { useState, useEffect } from 'react';
import { getAllStation } from '../api/station.api';
import DockingStation from '../component/DockingStation';


const ListDockingStation = () => {
    const [stationList, setStationList] = useState([]);

    useEffect(() => {
        getStationFromApi();
    }, []);

    const getStationFromApi = async () => {
        const queryResult = await getAllStation();
        setStationList(queryResult);
    }

    return (
        <div className="station-container">
            <div className="station-header">Danh sách bãi xe</div>
            <div className="list-station flex">
                { stationList.map((item) =>
                    <DockingStation station={ item } key={ item.id } />
                ) }
            </div>
        </div>
    );
}

export default ListDockingStation;