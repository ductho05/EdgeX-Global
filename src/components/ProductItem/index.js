import React, { useState } from 'react'
import { Button } from '@mui/material'
import Dialogs from '../Dialog'

const ProductItem = () => {

    const [open, setOpen] = useState(false)

    const handleOpenTabBuy = () => {
        setOpen(true)
    }

    return (
        <div className="rounded-[10px] bg-[#1d252a] border border-solid border-primary p-[20px] mb-[15px]">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex tablet:items-center laptop-small:items-start mobile:flex-col tablet:flex-row laptop-small:flex-col">
                        <p className="text-[25px]">80 USDT</p>
                        <p className="text-[17px] tablet:ml-[20px] laptop-small:ml-0">Hàng ngày 2%</p>
                    </div>
                    <p className="text-primary text-[16px]">2,049,680 VND</p>
                </div>
                <img className="w-[115px] h-[80px] object-cover" src="https://storage.edgex.video/images/2023-08-31/694f89b2a13fe2e55845efa10992004c.png" alt="product images" />
            </div>
            <div className="flex mt-[20px] justify-between">
                <div className="text-[18px]">
                    <p className="text-[16px]">Đạt được</p>
                    <p>150%</p>
                </div>
                <div className="text-[18px]">
                    <p className="text-[16px]">Tổng lợi nhuận</p>
                    <p>300 EDX</p>
                </div>
            </div>
            <Button onClick={handleOpenTabBuy} variant='contained' className="h-[42px] w-full bg-primary hover:bg-primary mt-[30px]">Mua</Button>

            <Dialogs open={open} close={setOpen}>
                <div className="pb-[20px]">
                    <p className="text-center mt-[10px] text-[16px] font-[500]">Mua</p>
                    <div className='flex items-center justify-between mb-[12px] font-[500]'>
                        <p>Gói: </p>
                        <p>800 USDT</p>
                    </div>
                    <div className='flex items-center justify-between mb-[12px] font-[500]'>
                        <p>Đạt được: </p>
                        <p>300%</p>
                    </div>
                    <div className='flex items-center justify-between mb-[12px] font-[500]'>
                        <p>Tổng lợi nhuận: </p>
                        <p>24000 EDX</p>
                    </div>
                    <div className='flex items-center justify-between mb-[12px] font-[500]'>
                        <p>Phí của gói: </p>
                        <p>800 USDT</p>
                    </div>
                    <div className='flex items-center justify-between mb-[12px] font-[500]'>
                        <p>Số dư trong ví: </p>
                        <p>0 USDT</p>
                    </div>
                    <Button variant='contained' className="h-[42px] w-full bg-primary hover:bg-primary mt-[30px]">Mua</Button>
                </div>
            </Dialogs>

        </div>
    )
}

export default ProductItem