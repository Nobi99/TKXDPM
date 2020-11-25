
import React from 'react';
import transaction from '../api/getTransaction';
import {
    errorIcon
} from '../image';
const TransactionResult = () => {
    return (
        <div className="station-container">
            {
                transaction.statusCode ? <Success /> : <Error />
            }
            <div className="return-home">
                {
                    transaction.statusCode ?
                        <button className="btn-return btn">Home</button>
                        : <button className="btn-return btn">Try again</button>
                }

            </div>
        </div>
    )
}
const Success = () => {
    return (
        <div className="transaction-result">
            <p className="transaction-result-header">
                Giao dịch thành công!!
        </p>
            <div className="transaction-result-body">
                <div className="transaction-items">
                    <p><span>Tên khách hàng: </span>{ transaction.userName }</p>
                    <p><span>Mã hóa đơn: </span>NB0100</p>
                    <p><span>Xe đã sử dụng: </span>{ transaction.name } - { transaction.bikeCode }</p>
                    <p><span>Tổng thời gian thuê: </span>45p </p>
                    <p><span>Tiền thuê xe: </span>{ transaction.hiringFee.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) }</p>
                </div>
                <p className="thank-sentence">Cảm ơn quý khách đã sử dụng dịch vụ của NobBike.</p>
            </div>

        </div>
    )
}

const Error = () => {
    return (
        <div className="transaction-result error">
            <p className="transaction-result-header">
                Giao dịch thất bại...
            </p>
            <div className="transaction-result-body flex items-center">
                <img src={ errorIcon } alt="error" />
                <p>Tài khoản không đủ số dư</p>
            </div>

        </div>
    )
}
export default TransactionResult;