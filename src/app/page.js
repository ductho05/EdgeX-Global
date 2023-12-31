"use client"
import Image from 'next/image';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { TextField, InputAdornment, Button } from '@mui/material';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form'
import { Dialog } from '@mui/material';
import PreLoader from '@/components/preloader';
import DialogError from '@/components/DialogError';

const errorsList = [
  "Email trống",
  "Lỗi định dạng điện thoại",
  "Password is Empty",
  "Xác nhận mật khẩu trống",
]

export default function Home() {

  const {
    register,
    handleSubmit,
    watch
  } = useForm()

  const [showPassword, setShowPassword] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [showDialogError, setShowDialogError] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleDialogClose = () => {
    setShowDialogError(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[url('https://h5.edgexads.co/assets/login-bg.b1fb06c4.jpg')] bg-no-repeat bg-cover bg-center px-5 py-4">
        <div className="flex items-center justify-between pt-2">
          <div className="flex relative  items-center justify-center py-2 px-6 text-white text-sm border border-primary rounded-full cursor-pointer">
            <p className="ml-5">Dịch vụ khách hàng</p>
            <HeadsetMicOutlinedIcon className="absolute left-3 bottom-2/4 translate-y-2/4 ml-2 text-lg" />
          </div>
          <LanguageOutlinedIcon className="text-white text-lg cursor-pointer" />
        </div>
        <div className="flex justify-center pt-12 px-4 mb-10">
          <Image src='/Logo.png' alt='Logo' width={124} height={70} />
        </div>

        <div className="py-5" >
          <h3 className="text-xl2 text-white text-center mb-4">Đăng nhập vào tài khoản của bạn</h3>
          <div className='relative'>
            <TextField
              {...register('phone')}
              fullWidth
              placeholder='Nhập Số Điện Thoại'
              size='medium'
              style={{
                outline: 'none',
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: '1px solid #296936',
                  borderRadius: "4px",
                  padding: "0",
                  height: "50px",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                },
                "& .MuiInputBase-input": {
                  backgroundColor: 'transparent'
                }
              }}
              InputProps={{
                style: {
                  color: "#fff",
                  fontSize: "14px",
                  marginBottom: '16px',
                  backgroundColor: "#071011"
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <div className="flex items-center cursor-pointer">
                      <Image src='https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg' width={20} height={14} className="mx-2" />
                      <p className="text-sm text-white mr-5">+84</p>
                    </div>
                  </InputAdornment>
                ),
              }}
            />
            <ul className="absolute hidden top-12 left-1 list-none bg-white overflow-y-scroll w-96 max-h-52 mb-2.5 z-10">
              <li className="px-2.5 hover:bg-background cursor-pointer text-sm py-1">
                VietNam
              </li>
              <li className="px-2.5 hover:bg-background cursor-pointer text-sm py-1">
                VietNam
              </li>
              <li className="px-2.5 hover:bg-background cursor-pointer text-sm py-1">
                VietNam
              </li>
              <li className="px-2.5 hover:bg-background cursor-pointer text-sm py-1">
                VietNam
              </li>
              <li className="px-2.5 hover:bg-background cursor-pointer text-sm py-1">
                VietNam
              </li>
              <li className="px-2.5 hover:bg-background cursor-pointer text-sm py-1">
                VietNam
              </li>
              <li className="px-2.5 hover:bg-background cursor-pointer text-sm py-1">
                VietNam
              </li>
              <li className="px-2.5 hover:bg-background cursor-pointer text-sm py-1">
                VietNam
              </li>
              <li className="px-2.5 hover:bg-background cursor-pointer text-sm py-1">
                VietNam
              </li>
            </ul>
          </div>

          <TextField
            {...register('password')}
            type={showPassword ? "text" : "password"}
            fullWidth
            placeholder='Nhập mật khẩu của bạn'
            size='medium'
            style={{
              outline: 'none',
            }}
            sx={{

              "& .MuiOutlinedInput-root": {
                border: '1px solid #25AA52',
                borderRadius: "4px",
                padding: "0",
                height: "50px",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "none"
              }
            }}
            InputProps={{
              style: {
                color: "#fff",
                fontSize: "14px",
                backgroundColor: "#071011"
              },
              startAdornment: (
                <InputAdornment position="start">
                  <div className="flex items-center">
                    <HttpsOutlinedIcon className="mx-4 text-white text-lg" />
                  </div>
                </InputAdornment>
              ),

              endAdornment: (
                <InputAdornment position="end" className={watch('password') === '' || !watch('password') ? 'hidden' : ''}>
                  {
                    showPassword ? <VisibilityOutlinedIcon onClick={handleTogglePassword} className="text-white text-sm font-light mx-3 cursor-pointer" />
                      : <VisibilityOffOutlinedIcon onClick={handleTogglePassword} className="text-white text-sm font-light mx-3 cursor-pointer" />
                  }
                </InputAdornment>
              )
            }}
          />

          <Button type='submit' variant="contained" className="bg-primary normal-case font-normal w-full mt-16 py-3 text-sm2 hover:bg-primary">Đăng nhập</Button>
        </div>
        <div className="flex items-center justify-center text-base mb-4">
          <Link href='/forget_password' className="ml-2 text-white cursor-pointer">Quên mật khẩu</Link>
        </div>
        <div className="flex items-center justify-center text-base mb-4">
          <Link href='/email_resend' className="ml-2 text-white cursor-pointer">Gửi lại xác minh email</Link>
        </div>
        <div className="flex items-center justify-center text-base mb-4">
          <p className="text-white ">Chưa có tài khoản?</p>
          <Link href='/register' className="ml-2 text-primary cursor-pointer">Đăng ký</Link>
        </div>

      </form>

      <Dialog
        open={showDialog}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: 'transparent',
            margin: '0',
            borderRadius: '0',
            overflow: 'hidden',
            padding: '10px'
          }
        }}
      >
        <PreLoader />
      </Dialog>

      <Dialog
        open={showDialogError}
        onClose={handleDialogClose}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: 'transparent',
            margin: '0',
            overflow: 'hidden'
          }
        }}
      >
        <DialogError errors={errorsList} onClose={handleDialogClose} />
      </Dialog>
    </>
  )
}
