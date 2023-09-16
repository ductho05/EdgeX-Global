"use client"
import Image from 'next/image';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { TextField, InputAdornment, Button } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form'
import { Dialog } from '@mui/material';
import PreLoader from '@/components/preloader';
import DialogError from '@/components/DialogError';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const errorsList = [
  "Email trống",
  "Lỗi định dạng điện thoại",
  "Password is Empty",
  "Xác nhận mật khẩu trống",
]

export default function ForgetPassword() {

  const {
    register,
    handleSubmit,
    watch
  } = useForm()

  const [showDialog, setShowDialog] = useState(false)
  const [showDialogError, setShowDialogError] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleDialogClose = () => {
    setShowDialogError(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[url('https://h5.edgexads.co/assets/login-bg.b1fb06c4.jpg')] bg-no-repeat bg-cover bg-center px-5 py-4 min-h-screen">

        <div className="flex justify-center pt-12 px-4 mb-10">
          <Image src='/Logo.png' alt='Logo' width={124} height={70} />
        </div>

        <div className="py-5" >
          <h3 className="text-xl2 text-white text-center mb-4">Quên mật khẩu</h3>
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
                "& .MuiInputBase-root": {
                  backgroundColor: '#071011'
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
            {...register('email')}
            type="text"
            fullWidth
            placeholder='Email'
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
                    <MailOutlinedIcon className="mx-4 text-white text-lg" />
                  </div>
                </InputAdornment>
              )
            }}
          />

          <Button type='submit' variant="contained" className="bg-primary normal-case font-normal w-full mt-16 py-3 text-sm2 hover:bg-primary">Quên mật khẩu</Button>
        </div>
        <div className="flex items-center justify-center text-base mt-4">
          <Link href='/' className="ml-2 text-white cursor-pointer">Quay lại đăng nhập</Link>
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
