"use client"
import Dialogs from '@/components/Dialog'
import Default from '@/components/layouts/Default'
import Wallet from '@/components/wallet'
import React, { useState } from 'react'

const pools = [
    {
        user: '',
        percent: 10
    },
    {
        user: '',
        percent: 8
    },
    {
        user: '',
        percent: 7
    },
    {
        user: '',
        percent: 6
    },
    {
        user: '',
        percent: 4
    }
]

function MiningPool() {

    const [openDialog, setOpenDialog] = useState(false)

    const handleShowDialog = () => {
        setOpenDialog(true)
    }

    return (
        <Default title={'Nhóm làm việc'}>
            <Wallet>
                <div className="flex flex-col items-center justify-center py-[20px]">
                    <p className="z-10">Tổng tích lũy</p>
                    <p className="z-10 text-[25px]">114955.00 EDX</p>
                </div>
            </Wallet>
            <div onClick={handleShowDialog} className="flex items-center mt-[15px] cursor-pointer">
                <i className="fa-solid fa-circle-info"></i>
                <p className="ml-[5px]">Quy tắc</p>
            </div>
            <div className="p-[15px] mt-[15px] rounded-[10px] bg-colorCard border border-solid border-primary">
                <div className='flex items-center justify-between mb-[22px]'>
                    <p className='w-full text-center'>Số lượng</p>
                    <p className='w-full text-center'>Người dùng</p>
                    <p className='w-full text-center'>Tỷ lệ phần trăm</p>
                </div>
                {
                    pools.map((pool, index) => (
                        <div className='flex items-center justify-between mb-[22px]'>
                            <p className='w-full text-center'>
                                {index === 0 ? <i className="fa-solid fa-trophy text-[#ece935]"></i> : index === 1 ? <i className="fa-solid fa-trophy text-[#999caa]"></i> : index === 2 ? <i className="fa-solid fa-trophy text-[#ce8159]"></i> : index + 1}
                            </p>
                            <p className='w-full text-center'></p>
                            <p className='w-full text-center'>{pool.percent}%</p>
                        </div>
                    ))
                }
            </div>
            <Dialogs open={openDialog} close={setOpenDialog}>
                <div className="text-[14px]">
                    <p className="text-center text-[18px] mb-[15px]">Quy tắc</p>
                    <p className="mb-[15px] text-justify">Kế hoạch phân chia phần thưởng hội thợ đào</p>
                    <p className="mb-[15px] text-justify">Chu kỳ chia thưởng 3 tháng: Mỗi 3 tháng, từ tháng 9 đến tháng 11, những người dùng được chọn sẽ được thông báo vào ngày 1 tháng 12.</p>
                    <p className="mb-[15px] text-justify">25% phần thưởng được chia cho người dùng được chọn: Những người dùng được chọn sẽ nhận được 25% phần thưởng từ hội thợ đào. Ví dụ, nếu hội thợ đào có 10,000,000 EDX, thì 2,500,000 EDX sẽ được chia cho người dùng được chọn, và người dùng hạng nhất sẽ được nhận 10% là 250,000 EDX. Người tham gia phải đạt cấp độ Chuyên nghiệp trở lên.</p>
                    <p className="mb-[15px] text-justify"></p>
                    <p className="mb-[15px] text-justify">Phân chia 75% còn lại: 75% còn lại sẽ được phân chia dựa trên phần trăm người dùng đủ tư cách, được chia làm 4 nhóm:</p>
                    <p className="mb-[15px] text-justify">a.) 30% được phân chia cho người dùng hoàn thành Chương trình Lãnh đạo 3; người dùng phải hoàn thành Chương trình Lãnh đạo 3 mới đủ điều kiện nhận phần thưởng này.</p>
                    <p className="mb-[15px] text-justify">b.) 22,5% được phân chia cho người dùng đã đạt cấp Kim cương; người dùng đã đạt đến cấp Kim cương mới đủ điều kiện nhận phần thưởng này.</p>
                    <p className="mb-[15px] text-justify">c.) 15% được phân chia cho top 100 trưởng nhóm; chỉ 100 trưởng nhóm hạng đầu mới đủ điều kiện nhận phần thưởng này.</p>
                    <p className="mb-[15px] text-justify">d.) 7,5% được phân chia cho người dùng đã mua gói 2500 USDT trở lên; chỉ những người dùng đã mua gói 2500 USDT trở lên mới đủ điều kiện nhận phần thưởng này.</p>
                </div>
            </Dialogs>
        </Default>
    )
}

export default MiningPool