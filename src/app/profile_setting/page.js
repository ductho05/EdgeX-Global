"use client"
import Default from '@/components/layouts/Default'
import Wallet from '@/components/wallet'
import { TextField, Select, MenuItem, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'

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

function ProfileSetting() {

    const classes = useStyles();
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => avatar && URL.revokeObjectURL(avatar.preview)
    }, [avatar])

    const handleChooseFile = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <Default title={'Cài đặt thông tin'}>
            <Wallet>
                <div className="flex py-[70px]">
                    <div className="w-[90px] h-[90px] flex items-center justify-center border border-solid border-primary text-primary mr-2.5 bg-[rgba(40,48,57,.5)] rounded-full z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        {
                            avatar ? <img src={avatar.preview} alt="avatar" className="w-full h-full object-cover rounded-[50%]" /> : <i className="fa-solid fa-user-tie text-[30px]"></i>
                        }
                        <input onChange={(e) => handleChooseFile(e)} id="avatar" type="file" className="hidden" />
                        <label for="avatar" className="absolute w-[32px] h-[32px] rounded-[50%] bg-[#0d271c] text-[12px] flex justify-center items-center right-[-6px] bottom-[6px] z-10 cursor-pointer">
                            <i className="fa-solid fa-pen text-white"></i>
                        </label>
                    </div>
                </div>
            </Wallet>
            <p className="my-[14px]">Email</p>
            <TextField
                fullWidth
                size='medium'
                value="abc@gmail.com"
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
            <p className="my-[14px]">Số tài khoản</p>
            <TextField
                fullWidth
                size='medium'
                value="0123456789"
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
            <p className="text-[16px] mb-[10px]">Bật thông báo</p>
            <Select
                value={'Kích hoạt'}
                displayEmpty
                classes={{ root: classes.select }}
                className="w-full h-[52px] border border-solid bg-[#071011] border-[#296936] text-white"
            >
                <MenuItem value={'Kích hoạt'}>Kích hoạt</MenuItem>
                <MenuItem value={'Vô hiệu hóa'}>Vô hiệu hóa</MenuItem>
            </Select>
            <Button variant='contained' className="w-full h-[46px] mt-[60px] mb-[20px] normal-case bg-primary hover:bg-primary text-[15px] font-[400]">Gửi</Button>
        </Default>
    )
}

export default ProfileSetting