"use client"
import Default from '@/components/layouts/Default'
import { Button, InputAdornment, TextField } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import React, { useState } from 'react'

function UpdatePassword() {

    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordNew, setShowPasswordNew] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(prev => !prev);
    }

    const handleTogglePasswordNew = () => {
        setShowPasswordNew(prev => !prev);
    }

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(prev => !prev);
    }

    return (
        <Default title={"Cập nhật mật khẩu"}>
            <p className="my-[14px]">Mật khẩu hiện tại</p>
            <TextField
                type={showPassword ? "text" : "password"}
                fullWidth
                placeholder='Nhập mật khẩu hiện tại'
                size='medium'
                style={{
                    outline: 'none',
                }}
                sx={{

                    "& .MuiOutlinedInput-root": {
                        border: '1px solid #25AA52',
                        borderRadius: "4px",
                        padding: "0",
                        height: "52px",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "none"
                    },
                    "& .MuiInputBase-input": {
                        textAlign: 'left'
                    }
                }}
                InputProps={{
                    style: {
                        color: "#fff",
                        fontSize: "14px",
                        marginBottom: '16px',
                        paddingRight: '14px',
                        backgroundColor: "#071011"
                    },
                    endAdornment: (
                        <InputAdornment position="end" className="">
                            {
                                showPassword ? <VisibilityOutlinedIcon onClick={handleTogglePassword} className="text-white text-sm font-light mx-3 cursor-pointer" />
                                    : <VisibilityOffOutlinedIcon onClick={handleTogglePassword} className="text-white text-sm font-light mx-3 cursor-pointer" />
                            }
                        </InputAdornment>
                    )
                }}
            />

            <p className="my-[14px]">Mật khẩu mới</p>
            <TextField
                type={showPasswordNew ? "text" : "password"}
                fullWidth
                placeholder='Nhập mật khẩu mới'
                size='medium'
                style={{
                    outline: 'none',
                }}
                sx={{

                    "& .MuiOutlinedInput-root": {
                        border: '1px solid #25AA52',
                        borderRadius: "4px",
                        padding: "0",
                        height: "52px",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "none"
                    },
                    "& .MuiInputBase-input": {
                        textAlign: 'left'
                    }
                }}
                InputProps={{
                    style: {
                        color: "#fff",
                        fontSize: "14px",
                        marginBottom: '16px',
                        paddingRight: '14px',
                        backgroundColor: "#071011"
                    },
                    endAdornment: (
                        <InputAdornment position="end" className="">
                            {
                                showPasswordNew ? <VisibilityOutlinedIcon onClick={handleTogglePasswordNew} className="text-white text-sm font-light mx-3 cursor-pointer" />
                                    : <VisibilityOffOutlinedIcon onClick={handleTogglePasswordNew} className="text-white text-sm font-light mx-3 cursor-pointer" />
                            }
                        </InputAdornment>
                    )
                }}
            />

            <p className="my-[14px]">Xác nhận mật khẩu mới</p>
            <TextField
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                placeholder='Nhập mật khẩu mới'
                size='medium'
                style={{
                    outline: 'none',
                }}
                sx={{

                    "& .MuiOutlinedInput-root": {
                        border: '1px solid #25AA52',
                        borderRadius: "4px",
                        padding: "0",
                        height: "52px",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "none"
                    },
                    "& .MuiInputBase-input": {
                        textAlign: 'left'
                    }
                }}
                InputProps={{
                    style: {
                        color: "#fff",
                        fontSize: "14px",
                        marginBottom: '16px',
                        paddingRight: '14px',
                        backgroundColor: "#071011"
                    },
                    endAdornment: (
                        <InputAdornment position="end" className="">
                            {
                                showConfirmPassword ? <VisibilityOutlinedIcon onClick={handleToggleConfirmPassword} className="text-white text-sm font-light mx-3 cursor-pointer" />
                                    : <VisibilityOffOutlinedIcon onClick={handleToggleConfirmPassword} className="text-white text-sm font-light mx-3 cursor-pointer" />
                            }
                        </InputAdornment>
                    )
                }}
            />
            <Button variant='contained' className="w-full h-[46px] mt-[60px] mb-[20px] normal-case bg-primary hover:bg-primary text-[15px] font-[400]">Gửi</Button>
        </Default>
    )
}

export default UpdatePassword