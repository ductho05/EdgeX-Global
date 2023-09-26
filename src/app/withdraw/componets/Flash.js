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

const inputStyles = makeStyles({
    Input: {
        "& input.Mui-disabled": {
            color: "#fff"
        }
    },
})

function Flash() {

    const [wallet, setWallet] = useState('EDX(0)')
    const [num, setNum] = useState(0)
    const classes = useStyles();
    const inputClasses = inputStyles()

    const handleChange = (event) => {
        setWallet(event.target.value);
    };

    return (
        <div className="w-full">
            <p className="text-[16px] mb-[10px] mt-[25px]">Ngân hàng</p>
            <TextField
                disabled
                fullWidth
                classes={{ root: inputClasses.Input }}
                size='medium'
                placeholder='Tên ngân hàng'
                style={{
                    outline: 'none'
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        border: '1px solid #296936',
                        borderRadius: "4px",
                        padding: "0",
                        height: "52px",
                        textAlign: 'left'
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "none"
                    },

                    "& .MuiInputBase-input": {
                        textAlign: 'left',
                        backgroundColor: 'transparent'
                    },
                    "& .MuiInputBase-input .MuiInput-input .Mui-disabled": {
                        color: '#fff'
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

            <p className="text-[16px] mb-[10px] mt-[25px]">Tên người nhận</p>
            <TextField
                fullWidth
                size='medium'
                placeholder='Tên người nhận'
                style={{
                    outline: 'none'
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        border: '1px solid #296936',
                        borderRadius: "4px",
                        padding: "0",
                        height: "52px",
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

            <p className="text-[16px] mb-[10px] mt-[25px]">Số tài khoản nhận</p>
            <TextField
                fullWidth
                size='medium'
                placeholder='Số tài khoản nhận'
                style={{
                    outline: 'none'
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        border: '1px solid #296936',
                        borderRadius: "4px",
                        padding: "0",
                        height: "52px",
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
            <p className="text-[16px] mb-[10px]">Từ ví</p>
            <Select
                value={wallet}
                onChange={(e) => handleChange(e)}
                displayEmpty
                classes={{ root: classes.select }}
                className="w-full h-[52px] border border-solid bg-[#071011] border-[#296936] text-white"
            >
                <MenuItem value={'EDX(0)'}>EDX(0)</MenuItem>
                <MenuItem value={'USD'}>USD</MenuItem>
            </Select>

            <p className="text-[16px] mb-[10px] mt-[25px]">Số tiền đã rút</p>
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
                        height: "52px",
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
                    <p>Phí giao dịch</p>
                    <p>8 %</p>
                </div>

                <div className="flex items-center justify-between mt-[10px]">
                    <p>Bạn sẽ nhận</p>
                    <p>{numeral(0).format('0,0[.]00')} VND</p>
                </div>
            </div>
            <Button variant='contained' className="w-full h-[46px] mt-[30px] normal-case bg-primary hover:bg-primary text-[15px] font-[400]">Gửi</Button>
        </div >
    )
}

export default Flash