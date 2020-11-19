import React from 'react'
import BikeInfor from '../component/BikeInfor'
import listBike from '../api/getBike';
import {
    addressIcon,
    distanceIcon,
    emptySlotIcon,
    bikeIcon,
    areaIcon
} from "../image";
import dockingStationList from '../api/getDockingStation';


const ListBike = () => {
    const station = dockingStationList[0];
    return (
        <div className="station-container">
            <div className="station-header station-infor">
                <p>Bãi xe số 1</p>
                <div className="flex items-center station-infor-items">
                    <div className="item-attr address">
                        <img src={ addressIcon } alt="address icon" />
                        <p>{ station.address } </p>
                    </div>
                    <div className="item-attr">
                        <img src={ distanceIcon } alt="distance icon" />
                        <p>{ station.distance } m </p>
                    </div>
                    <div className="item-attr">
                        <img src={ areaIcon } alt="area icon" />
                        <p>{ station.area } m2 </p>
                    </div>
                    <div className="item-attr">
                        <img src={ bikeIcon } alt="bike icon" />
                        <p>{ station.bikeNumber } </p>
                    </div>
                    <div className="item-attr">
                        <img src={ emptySlotIcon } alt="empty icon" />
                        <p>{ station.emptySlot } </p>
                    </div>
                </div>

            </div>
            <div className="list-station flex list-bike">
                { listBike.map((item) =>
                    <BikeInfor bike={ item } key={ item.id } />
                ) }
            </div>
        </div>
    );
}
export default ListBike;