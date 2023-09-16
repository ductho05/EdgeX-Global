import Button from '@mui/material/Button';
import classNames from 'classnames/bind'
import styles from './wallet.module.css'

const cx = classNames.bind(styles)

const Wallet = () => {
    return (
        <div className={`${cx('wallet')} mt-5 bg-wallet rounded-[10px] pt-[25px] px-[18px] pb-[21px] pl-[18px]`}>
            <div>
                <div className="flex justify-between lg:justify-around">
                    <img src='/Logo.png' className="w-20 h-12 z-10" />
                    <div className="flex">
                        <Button variant="contained" size="small" disableElevation={true} className="bg-bg-button hover:bg-bg-button h-[42px] min-w-[130px] ml-[15px] normal-case">Mua</Button>
                        <Button variant="contained" size="small" disableElevation={true} className="bg-bg-button hover:bg-bg-button h-[42px] min-w-[130px] ml-[15px] normal-case">Nạp</Button>
                    </div>
                </div>
                <div className='flex flex-col mt-[30px]'>
                    <p className="text-[16px] z-10 text-white">Tổng thu nhập cá nhân</p>
                    <h3 className='text-[26px] text-white font-medium z-10'>0 EDX</h3>
                </div>
                <div className="flex mt-[30px]">
                    <div className="flex flex-col z-10 flex-1 mr-[20px] pl-[17px] border-r border-solid border-white">
                        <p className="z-10 text-[17px]">0</p>
                        <p className="z-10 text-[16px]">Video đã xem hôm nay</p>
                    </div>
                    <div className="flex flex-col flex-1 pl-[17px]">
                        <p className="z-10 text-[17px]">1</p>
                        <p className="z-10 text-[16px]">Tổng gói hiện tại</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet