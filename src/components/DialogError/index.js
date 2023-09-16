import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

const DialogError = ({errors, onClose}) => {

    // const [errorList, setErrorList] = useState([])
    // console.log(errors)

    // if (errors) {
    //     var newList = []
    //     for (var i = 0; i < errors.length; i++) {
    //         newList.push(errors[i].message)
    //     }
    //     setErrorList(newList)
    // }

  return (
    <div className="w-96 pb-2.5 text-white rounded-md bg-background-black">
        <div className="flex items-center justify-between px-3.5 pt-3.5 pb-2.5">
            <p className="text-lg">Tin nhắn lỗi</p>
            <CloseIcon onClick={onClose} className="text-base cursor-pointer text-color-icon"/>
        </div>
        <div className="py-2.5 px-3.5 flex items-center justify-start">
            <CancelIcon className="pr-3 text-4xl text-red"/>
            <ul className='list-none'>
                {
                    errors.map((error, index) => (
                        <li key={index} className='text-sm mb-1'>{error}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default DialogError