import React, { useState } from 'react'
import { TextField, Button, Select, MenuItem } from '@mui/material'
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

const nums = [100, 300, 500, 1000]

function Coins() {

    const [num, setNum] = useState(100)
    const [wallet, setWallet] = useState('EDX(0)')
    const classes = useStyles();
    const [tab, setTab] = useState(0)

    const handleChange = (event) => {
        setWallet(event.target.value);
    };

    const handleTab = (index, value) => {
        setTab(index)
        setNum(value)
    }

    var classItem = `border border-solid border-primary normal-case h-[33px] w-[24%] font-[400] leading-4`
    var active = "bg-[rgba(76,175,80,.5)] hover:bg-[rgba(76,175,80,.5)]"
    var normal = "hover:bg-[#0a100e]"

    return (
        <div className="w-full">
            <p className="text-[16px] mb-[10px] mt-[25px]">Địa chỉ ví</p>
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
            <div className="flex items-center justify-between">
                {
                    nums.map((num, index) => (
                        <Button
                            key={index}
                            onClick={() => handleTab(index, num)}
                            variant="contained"
                            className={index === tab ? `${classItem} ${active}` : `${classItem} ${normal}`}
                        >
                            {num}
                        </Button>
                    ))
                }
            </div>
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
        </div>
    )
}

export default Coins