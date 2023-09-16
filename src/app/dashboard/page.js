import Wallet from "@/components/wallet"
import Invite from "@/components/invite"
import MenuItem from "@/components/MenuItem"

const menus = [
    {
        name: 'Nhiệm vụ đạt được',
        image: 'https://h5.edgexads.co/assets/icon_1.9eeff19d.svg'
    },
    {
        name: 'Hướng dẫn',
        image: 'https://h5.edgexads.co/assets/icon_2.594e02b3.svg'
    },
    {
        name: 'Đặt cọc',
        image: 'https://h5.edgexads.co/assets/icon_3.dc2a5945.svg'
    },
    {
        name: 'Thông tin mới nhất',
        image: 'https://h5.edgexads.co/assets/icon_4.6855a54e.svg'
    },
    {
        name: 'Nhóm làm việc',
        image: 'https://h5.edgexads.co/assets/icon_5.1c35df49.svg'
    },
    {
        name: 'Quảng cáo',
        image: 'https://h5.edgexads.co/assets/icon_6.935425ea.svg'
    },
    {
        name: 'CIO',
        image: 'https://h5.edgexads.co/assets/icon_7.80429442.svg'
    },
    {
        name: 'Chương trình trưởng nhóm',
        image: 'https://h5.edgexads.co/assets/icon_8.80167440.svg'
    },
]

const Dashboard = () => {

    return (
        <>
            <div className="flex justify-between items-center mb-3">
                <img src='/Logo.png' className="w-16 h-9" />
                <div className="flex items-center">
                    <i className="fa-regular fa-bell fa-lg mx-1.5 cursor-pointer"></i>
                    <i className="fa-solid fa-globe fa-lg mx-1.5 cursor-pointer"></i>
                    <i className="fa-regular fa-user fa-lg ml-1.5 cursor-pointer"></i>
                </div>
            </div>
            <div className="flex items-center">
                <i className="fa-solid fa-user-tie p-4 text-primary mr-2.5 bg-[#283039] rounded-full"></i>
                <div>
                    <div className="flex">
                        <p className="text-lg text-primary leading-none">0123456789</p>
                        <img src='/Logo.png' className="w-5 h-5 ml-[5px]" />
                    </div>
                    <p className="text-sm mt-1">Chào mừng đến với Edgex</p>
                </div>
            </div>
            <Wallet />
            <Invite content1="0" content2="Tổng số thành viên giới thiệu" button={{ name: 'Mời' }} />
            <div className="mt-[15px] flex gap-[10px] flex-wrap">
                {
                    menus.map((item, index) => (
                        <MenuItem menu={item} key={index} />
                    ))
                }
            </div>
            <Invite content1="Thông tin mới nhất" content2="EdgeX Structure" button={{ name: 'Thêm' }} />
            <Invite content1="Đặt 15 ngày" content3={[
                {
                    label: 'Lợi nhuận',
                    value: '5.00%'
                },
                {
                    label: '15 Ngày',
                    value: 'Thời gian khóa'
                },
            ]} button={{ name: 'Đặt cọc' }} />
        </>
    )
}

export default Dashboard