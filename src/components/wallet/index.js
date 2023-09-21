import Button from '@mui/material/Button';
import classNames from 'classnames/bind'
import styles from './wallet.module.css'
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles)

const Wallet = ({ children }) => {

    return (
        <div className={`${cx('wallet')} mt-5 bg-wallet rounded-[10px] pt-[25px] px-[18px] pb-[21px] pl-[18px]`}>
            {children}
        </div>
    )
}

export default Wallet