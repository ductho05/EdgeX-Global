import { Button, TextField } from '@mui/material'
import React from 'react'

function Wallet() {
    return (
        <div>
            <p className='text-[red] mb-[20px]'>* Thông tin ngân hàng/ví chỉ có thể được sửa đổi một lần</p>
            <p className="my-[14px]">Địa chỉ ví</p>
            <TextField
                fullWidth
                size='medium'
                placeholder='Địa chỉ ví'
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
            <Button variant='contained' className="w-full h-[46px] mt-[30px] mb-[20px] normal-case bg-primary hover:bg-primary text-[15px] font-[400]">Gửi</Button>
        </div>
    )
}

export default Wallet