import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

function Coins() {

    const [num, setNum] = useState('')

    return (
        <div className="w-full">
            <p className="text-[16px] mb-[10px] mt-[25px]">Số lượng nạp</p>
            <TextField
                fullWidth
                size='medium'
                value={num}
                placeholder='Số lượng nạp'
                onChange={(e) => setNum(e.target.value)}
                style={{
                    outline: 'none'
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        border: '1px solid #296936',
                        borderRadius: "4px",
                        padding: "0",
                        height: "56px",
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
            <Button variant='contained' className="w-full h-[46px] mt-[30px] normal-case bg-primary hover:bg-primary text-[15px] font-[400]">Gửi</Button>
        </div>
    )
}

export default Coins