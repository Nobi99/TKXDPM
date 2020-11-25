import axios from "axios";
import baseUrl from "./evironment";




const getAllBike = async (stationId) => {
    var listBike = [];
    try {
        const result = await axios.get(`${baseUrl}/infor/all-bike`, { params: { id: stationId } });
        const resultData = result.data.data;
        resultData.forEach(bike => {
            var bikeCode = '';
            if (bike.bike_id / 10 >= 1) {
                bikeCode = `CN${bike.code}${bike.bike_id}`;
            }
            else bikeCode = `CN${bike.code}0${bike.bike_id}`;
            listBike.push({
                bikeCode: bikeCode,
                name: bike.bike_type,
                battery: bike.battery,
                dockingStationId: bike.station_id,
                position: bike.position,
                bikeDeposit: bike.bike_value,
                isRented: false
            })
        })
        return listBike;
    } catch (err) {
        console.log(err);
    }
}

const getBike = async (bikeId) => {
    let bike;
    let params = {
        id: 1
    }
    try {
        const result = await axios.get(`${baseUrl}/infor/all-bike`, { params });
        const resultData = result.data.data[0];
        var bikeCode = '';
        if (resultData.bike_id / 10 >= 1) {
            bikeCode = `CN${resultData.code}${resultData.bike_id}`;
        }
        else bikeCode = `CN${resultData.code}0${resultData.bike_id}`;
        bike = {
            bikeCode: bikeCode,
            name: resultData.type,
            battery: resultData.battery,
            dockingStationId: resultData.station_id,
            position: resultData.position,
            bikeDeposit: resultData.bike_value,
            isRented: false
        };
        return bike;
    } catch (err) {
        console.log(err);
    }
}


//bikeType: 10- xe đạp, 20-xe đạp điện đơn, 11 xe đạp đôi, 21 xe đạp điện đơn

// const listBike = [bike, bike, bike, bike, bike];

export {
    getAllBike,
    getBike
};