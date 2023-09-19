"use client"
import React, { useState } from 'react'
import { Select, MenuItem, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import numeral from 'numeral';

const useStyles = makeStyles({
    select: {
        '&:focus': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
        },
        '& .MuiSelect-icon': {
            fill: '#fff',
        },
    },
});

function Flash() {

    const [age, setAge] = useState('USDT');
    const [num, setNum] = useState(0)
    const classes = useStyles();

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="w-full">
            <p className="text-[16px] mb-[10px]">Gửi tiền xu</p>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                classes={{ root: classes.select }}
                className="w-full h-[52px] border border-solid bg-[#071011] border-[#296936] text-white"
            >
                <MenuItem value={'USDT'}>USDT</MenuItem>
                <MenuItem value={'USD'}>USD</MenuItem>
            </Select>

            <p className="text-[16px] mb-[10px] mt-[25px]">Số lượng nạp</p>
            <TextField
                fullWidth
                size='medium'
                value={num}
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

            <div className="p-[15px] bg-[#1d252a] rounded-[5px] mt-[10px]">
                <div className="flex items-center justify-between mt-[10px]">
                    <p>Đơn giá</p>
                    <p>1.00 USDT = {numeral(25621).format('0,0[.]00')} VND</p>
                </div>

                <div className="flex items-center justify-between mt-[10px]">
                    <p>Bạn cần phải trả</p>
                    <p>1.00 USDT = {numeral(0).format('0,0[.]00')} VND</p>
                </div>
            </div>
            <Button variant='contained' className="w-full h-[46px] mt-[30px] normal-case bg-primary hover:bg-primary text-[15px] font-[400]">Gửi</Button>
        </div >
    )
}

export default Flash