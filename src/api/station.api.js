import axios from "axios";
import baseUrl from "./evironment";

// let dockingStation = {
//     id: 1,
//     name: "Xe của Chiến",
//     address: "Số 8, Tạ Quang Bửu",
//     area: 1200, // đơn vị mét vuông
//     bikeNumber: 150,
//     emptySlot: 50,
//     distance: 120, // đơn vị mét
//     timeToGo: 10 // đơn vị phút
// }

const getAllStation = async () => {
    var listStation = [];
    try {
        const result = await axios.get(`${baseUrl}/infor/all-station`);
        const resultData = result.data.data;
        console.log(resultData);
        resultData.forEach(station => {
            listStation.push({
                id: station.station_id,
                name: station.name,
                address: station.address,
                area: station.area, // đơn vị mét vuông
                bikeNumber: station.bike_number,
                emptySlot: station.empty_slot,
                distance: station.distance, // đơn vị mét
                timeToGo: station.time // đơn vị phút
            })
        })

        console.log(resultData);
        return listStation;
    } catch (err) {
        console.log(err);
    }
}

const getStationById = async (stationId) => {
    let params = {
        id: stationId
    }
    try {
        const result = await axios.get(`${baseUrl}/infor/station`, { params });
        const resultData = result.data.data[0];
        let station = {
            id: resultData.station_id,
            name: resultData.name,
            address: resultData.address,
            area: resultData.area, // đơn vị mét vuông
            bikeNumber: resultData.bike_number,
            emptySlot: resultData.empty_slot,
            distance: resultData.distance, // đơn vị mét
            timeToGo: resultData.time // đơn vị phút
        }
        return station;
    } catch (err) {
        console.log(err);
    }
}

export {
    getAllStation,
    getStationById
}