"use client"
import Default from '@/components/layouts/Default'
import { Button, TextField } from '@mui/material'
import React, { useRef, useState, useEffect } from 'react'

const tabs = ["USDT", "EDX"]

const sumaries = [
    {
        label: 'Ngày đặt cọc',
        value: '2023-09-21'
    },
    {
        label: 'Ngày có lãi',
        value: '2023-09-21'
    },
    {
        label: 'Kỳ hạn lãi',
        value: '15 Ngày'
    },
    {
        label: 'Ngày kết thúc lãi suất',
        value: '2023-10-06'
    },
    {
        label: 'Thời gian quy đổi',
        value: '15 Ngày'
    },
    {
        label: 'Kỳ hạn hoàn trả',
        value: '2023-10-06'
    },
]

function StakingDetail() {

    const [tabCurrent, setTabCurrent] = useState(0)
    const [numPrice, setNumPrice] = useState('')
    const [displaySumary, setDisplaySumary] = useState(true)
    const [displayPolicy, setDisplayPolicy] = useState(false)
    const sumaryRef = useRef()

    const handleToggleSumary = () => {
        setDisplaySumary(prev => !prev)
    }

    const handleTogglePolyci = () => {
        setDisplayPolicy(prev => !prev)
    }

    useEffect(() => {
        if (displaySumary) {
            sumaryRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [displaySumary])

    const classButton = 'border border-solid border-primary normal-case w-[100px] h-[40px] font-[400] mr-[20px]'
    const active = 'bg-primary hover:bg-primary '
    const defaut = 'bg-[#0a100e] hover:bg-[#0a100e]'

    return (
        <Default title={'Đặt cọc'}>
            <p className="my-[14px]">Khoảng thời gian ngày (Ngày)</p>
            <Button variant='contained' className="bg-primary hover:bg-primary normal-case w-[100px] h-[40px] font-[400]">False</Button>

            <p className="my-[14px]">Ví</p>
            {
                tabs.map((tab, index) => (
                    <Button onClick={() => setTabCurrent(index)} key={index} variant='contained' className={tabCurrent === index ? `${active} ${classButton}` : `${defaut} ${classButton}`}>{tab}</Button>
                ))
            }
            <p className="my-[14px]">Số tiền bị khóa</p>
            <TextField
                fullWidth
                size='medium'
                value={numPrice}
                placeholder='Số tiền bị khóa'
                onChange={(e) => setNumPrice(e.target.value)}
                style={{
                    outline: 'none'
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        border: '1px solid #296936',
                        borderRadius: "4px",
                        padding: "0",
                        height: "51px",
                        textAlign: 'left'
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "none"
                    },

                    "& .MuiInputBase-input": {
                        textAlign: 'left',
                        backgroundColor: 'transparent'
                    }
                }}
                InputProps={{
                    style: {
                        color: "#fff",
                        fontSize: "14px",
                        marginBottom: '16px',
                        backgroundColor: "#071011"
                    }
                }}
            />
            <p className="my-[14px] capitalize">Có sẵn để giao dịch: {tabCurrent === 0 ? '0 USDT' : '0 EDX'}</p>
            <p className="my-[14px] capitalize">Giới hạn số tiền bị khóa</p>
            <p className="my-[14px] capitalize">Tối thiểu: {tabCurrent === 0 ? '100 USDT' : '1000 EDX'}</p>
            <p className="my-[14px] capitalize">Chỉ tiêu đã đạt: {tabCurrent === 0 ? '99451.2 USDT' : '994511.9999999999 EDX'}    </p>
            <p className="my-[14px] capitalize">Tổng chỉ tiêu cá nhân: {tabCurrent === 0 ? '0 USDT' : '0 EDX'}</p>
            <div>
                <div className="mt-[20px] py-[10px] border-y border-solid border-[#323a4a]">
                    <div className='flex items-center justify-between '>
                        <h3 className="text-[20px]">Bản tóm tắt</h3>
                        <div onClick={handleToggleSumary} className="flex items-center cursor-pointer">
                            <p className="mr-[5px] leading-0 text-[14px]">{displaySumary ? 'Ẩn đi' : 'Hiển thị'}</p>
                            {displaySumary ? <i className="fa-solid fa-angle-down text-[12px]"></i> : <i className="fa-solid fa-angle-right text-[12px]"></i>}
                        </div>
                    </div>

                    {
                        displaySumary &&
                        <div ref={sumaryRef} className="mt-[10px] py-[18px] px-[20px] bg-colorCard rounded-[10px]">
                            <div className="border-b border-solid border-[#323a4a] pb-[20px]">
                                {
                                    sumaries.map((s, index) => (
                                        <div key={index} className="text-[15px]">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <i className="fa-solid fa-diamond text-[14px] text-[#f1e74a]"></i>
                                                    <p className="ml-[5px]">{s.label}</p>
                                                </div>
                                                <p>{s.value}</p>
                                            </div>
                                            {index !== sumaries.length - 1 && <p className="w-[2px] h-[20px] bg-[#323a4a] ml-[6px]"></p>}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex items-center pt-[10px] justify-between">
                                <p>Ước tính tháng</p>
                                <p>5.00 %</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="mt-[20px] py-[10px] border-y border-solid border-[#323a4a]">
                    <div className='flex items-center justify-between '>
                        <h3 className="text-[20px]">Điều khoản và điều kiện</h3>
                        <div onClick={handleTogglePolyci} className="flex items-center cursor-pointer">
                            <p className="mr-[5px] leading-0 text-[14px]">{displayPolicy ? 'Ẩn đi' : 'Hiển thị'}</p>
                            {displayPolicy ? <i className="fa-solid fa-angle-down text-[12px]"></i> : <i className="fa-solid fa-angle-right text-[12px]"></i>}
                        </div>
                    </div>
                    {
                        displayPolicy &&
                        <div className="py-[10px]">
                            <p className="mb-20px text-[14px] text-justify">Nếu Khoản Đầu Tư kết thúc và không được 'Đòi Lại' trong vòng 24 giờ, sẽ được tặng thêm 15 ngày Khoản Đầu Tư, và lợi ích Khoản Đầu Tư sẽ tăng thêm 1%, từ 5% lên 6%. Nếu khoản 15 ngày tại 6% kết thúc, sẽ thêm 1% nữa, tạo thành 7%.</p>
                            <p className="my-[20px]">Ví dụ: </p>
                            <p className="mb-20px text-[14px] text-justify">Một người dùng Đầu Tư vào ngày 1 tháng 8 với lợi ích 5% cho đến ngày 15 tháng 8. Nếu họ không đòi lại lợi ích Đầu Tư của mình trong vòng 24 giờ, Đầu Tư sẽ tự động tiếp tục từ ngày 16 tháng 8 đến ngày 31 tháng 8 với lợi ích 6%, và tiếp tục như vậy.</p>
                            <p className="my-[20px]">Có hai loại Khoản Đầu Tư:</p>
                            <p className="mb-20px text-[14px] text-justify">
                                1. Khoản Đầu Tư USDT
                            </p>
                            <p className="my-[10px] text-[14px] text-justify">
                                2. Khoản Đầu Tư EDX
                            </p>
                        </div>
                    }
                </div>
            </div>
            <Button className="w-full h-[46px] mt-[40px] mb-[10px] text-white normal-case font-[400] bg-primary hover:bg-primary">Gửi</Button>
        </Default >
    )
}

export default StakingDetail