import React from 'react'
import numeral from 'numeral'

const P2PItem = () => {
    return (
        <div className="p-[20px] mb-[15px] border border-solid border-primary rounded-[10px]">
            <div className="flex items-center">
                <p className="text-white text-[19px] mr-[5px]">MarcExchange</p>
                <i className="fa-solid fa-circle-check text-[#cdd623] text-[16px]"></i>
            </div>
            <p className="text-[20px] mt-[12px]">1 USDT = {numeral(26000).format('0,0[.]00')} VND</p>
            <div className="text-[15px] mt-[5px] flex mobile:flex-col tablet:flex-row laptop-small:flex-col desktop:flex-row">
                <p className="mr-[10px]">Có sẵn để giao dịch: </p>
                <p>468701.0000 USDT</p>
            </div>
            <div className="text-[15px] mt-[5px] flex mobile:flex-col tablet:flex-row laptop-small:flex-col desktop:flex-row">
                <p className="mr-[10px]">Có sẵn để giao dịch: </p>
                <p>20.00 - 468701.0000 USDT</p>
            </div>
            <p className="pl-[4px] text-[15px] mt-[10px] border-l-[3px] border-solid border-[#cdd623]">Chuyển khoản ngân hàng</p>
        </div>
    )
}

export default P2PItem