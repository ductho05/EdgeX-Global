import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Dialogs from '../Dialog'
import { Button } from '@mui/material'

const MenuItem = ({ menu }) => {

    const router = useRouter()
    const [showDialog, setShowDialog] = useState(false)

    const handleClick = () => {
        if (menu.path) {
            router.push(menu.path)
        } else {
            setShowDialog(true)
        }
    }

    return (
        <>
            <div onClick={handleClick} className="flex flex-col items-center justify-center cursor-pointer flex-grow-[4] flex-shrink-[4] basis-1/3 bg-[#1d252a] rounded-[8px] min-h-[120px] p-[8px]">
                <img src={menu?.image} alt='menu_icon' className="min-h-[25px]" />
                <p className="text-[15px] text-center">{menu?.name}</p>
            </div>
            <Dialogs open={showDialog} close={setShowDialog}>
                <p className="text-center text-[22px] mb-[16px]">Quảng cáo</p>
                <p className="text-justify text-[16px] mb-[16px]">8,800 USD - Quảng cáo sẽ xuất hiện ngẫu nhiên cho bất kỳ người dùng nào</p>
                <p className="text-justify text-[16px] mb-[16px]">88,000 USD - Mỗi 30 video, quảng cáo của bạn sẽ xuất hiện một lần</p>
                <p className="text-justify text-[16px] mb-[16px]">240,000 USD - Video đầu tiên của mỗi người dùng sẽ là quảng cáo của bạn + liên kết</p>
                <p className="text-justify text-[16px] mb-[16px]"></p>
                <p className="text-justify text-[16px] mb-[16px]">Liên hệ với dịch vụ khách hàng của chúng tôi để tìm hiểu thêm về việc đặt quảng cáo để giúp quảng cáo doanh nghiệp của bạn.</p>
                <Button variant='contained' className="w-full h-[46px] bg-primary hover:bg-primary normal-case" >Liên hệ với chúng tôi</Button>
            </Dialogs>
        </>
    )
}

export default MenuItem