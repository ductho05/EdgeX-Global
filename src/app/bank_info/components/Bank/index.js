import React from 'react'
import { TextField, Select, MenuItem, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';

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

function Bank() {

    const classes = useStyles();

    return (
        <div>
            <p className='text-[red] mb-[20px]'>* Thông tin ngân hàng/ví chỉ có thể được sửa đổi một lần</p>
            <p className="text-[16px] mb-[10px]">Ngân hàng</p>
            <Select
                value={'Ngân hàng'}
                displayEmpty
                classes={{ root: classes.select }}
                className="w-full h-[52px] border border-solid bg-[#071011] border-[#296936] text-white"
            >
                <MenuItem value={'Ngân hàng'}>Ngân hàng</MenuItem>
                <MenuItem value={'SAIGONBANK'}>SAIGONBANK</MenuItem>
                <MenuItem value={'Sacombank'}>Sacombank</MenuItem>
                <MenuItem value={'Agribank'}>Agribank</MenuItem>
            </Select>
            <p className="my-[14px]">Tên người nhận</p>
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
            <p className="my-[14px]">Số tài khoản nhận</p>
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
            <Button variant='contained' className="w-full h-[46px] mt-[20px] mb-[10px] normal-case bg-primary hover:bg-primary text-[15px] font-[400]">Gửi</Button>
        </div>

    )
}

export default Bank