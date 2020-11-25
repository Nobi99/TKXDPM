// import React, { useEffect, useState } from 'react';
// // import listBike from '../api/getBike';
// import dockingStationList from '../api/station.api';
// import DockingStation from '../component/DockingStation';
// import {
//     bikeImage
// } from '../image';


// const HiringBike = () => {
//     const bike = null
//     const [isRented, setIsRented] = useState(false);
//     const [showDockingList, setShowDockingList] = useState(false);
//     return (
//         <div className="station-container">
//             <div className="top flex">

//                 <div className="hiring-infor top-items">
//                     <p>Thông tin chi tiết</p>
//                     <div className="flex infor-media">
//                         <div className="text">
//                             <p>Loại xe: { bike.name }</p>
//                             <p>Mã xe: { bike.bikeCode }</p>
//                             <p>Pin còn lại: { bike.battery }%</p>
//                             <p>Tiền đặt cọc: { bike.bikeDeposit.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) }</p>
//                         </div>
//                         <div className="image">
//                             <img src={ bikeImage } alt="bike" />
//                         </div>

//                     </div>
//                     {
//                         !isRented ?
//                             <button className="btn confirm-btn">Thuê xe</button>
//                             : null
//                     }
//                 </div>

//                 <div className="invoice top-items">
//                     <p>Invoice</p>
//                     <div className="flex infor-media">
//                         <div className="text">
//                             <p>Tên khách hàng: Trần Thế Chiến</p>
//                             <p>Start time: { bike.name }</p>
//                             <p>End time: { bike.bikeCode }</p>
//                             <p>Hiring time: { bike.battery }%</p>
//                             <p>Hiring Fee: { bike.bikeDeposit.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) }</p>
//                         </div>

//                     </div>
//                     {
//                         isRented ?
//                             <button className="btn confirm-btn">Trả xe</button>
//                             : null
//                     }
//                 </div>
//             </div>

//             <div className="bottom">
//                 <div className="bottom-header">Chọn bãi xe muốn trả</div>
//                 <div className="list-station flex">
//                     { dockingStationList.map((item) =>
//                         <DockingStation station={ item } key={ item.id } />
//                     ) }
//                 </div>
//             </div>

//         </div>
//     )
// }

// const ConfirmPayment = () => {
//     <div className="confirm-payment">
//         <p className="confirm-payment-header">
//             Xác nhận thanh toán
//         </p>
//     </div>
// }

// export default HiringBike;
