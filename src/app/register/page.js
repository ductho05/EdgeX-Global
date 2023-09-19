"use client"
import Image from 'next/image';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { TextField, InputAdornment, Button, Dialog } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation';
import PreLoader from '@/components/preloader';
import DialogError from '@/components/DialogError';

const errorsList = [
  "Email trống",
  "Lỗi định dạng điện thoại",
  "Password is Empty",
  "Xác nhận mật khẩu trống",
]

const Register = () => {

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm()

  const router = useRouter()
  const searchParams = useSearchParams()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [showDialogError, setShowDialogError] = useState(false)
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    const code = searchParams.get('code')
    if (code) {
      setValue('referralCode', code)
      setDisable(true)
    }
  }, [])

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  }

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  }

  const onSubmit = (data) => {
    e.preventDefault();
    // setShowDialog(true)
    // if (Object.keys(errors).length > 0) {
    //   console.log(errors)
    //   setShowDialog(false)
    //   setShowDialogError(true)
    // } else {
    //   console.log(errors)
    //   console.log(watch())
    //   setShowDialog(false)
    // }
    alert('Ok', data)
  }

  const handleError = () => {
    alert('ERROR', errors)
  }

  const handleBackToLogin = () => {
    router.push('/')
  }

  const handleDialogClose = () => {
    setShowDialogError(false)
  }

  return (
    <>
      <form onSuccess={onSubmit} onError={handleError} control={control} className="bg-[url('https://h5.edgexads.co/assets/login-bg.b1fb06c4.jpg')] min-h-screen bg-no-repeat bg-cover bg-center px-5 py-4">
        <div className="flex items-center justify-between pt-2">
          <ArrowBackIosNewOutlinedIcon onClick={handleBackToLogin} className="text-white cursor-pointer text-sm" />
          <LanguageOutlinedIcon className="text-white text-lg cursor-pointer" />
        </div>
        <div className="flex justify-center pt-12 px-4 mb-10">
          <Image src='/Logo.png' alt='Logo' width={124} height={70} />
        </div>

        <div className="py-5" >
          <h3 className="text-xl2 text-white text-center mb-4">Đăng ký tài khoản</h3>
          <div className='relative'>
            <TextField
              {...register('referralCode', { required: 'Referral Code is Empty' })}
              disabled={disable}
              fullWidth
              placeholder='Mã giới thiệu'
              size='medium'
              style={{
                outline: 'none'
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: '1px solid #296936',
                  borderRadius: "4px",
                  padding: "0",
                  height: "50px",
                  textAlign: 'right'
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                },

                "& .MuiInputBase-input": {
                  textAlign: 'right',
                  backgroundColor: 'transparent'
                },
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#ffffff",
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
                    <p className="text-sm text-white mx-3">Mã giới thiệu</p>
                  </InputAdornment>
                )
              }}
            />

            <TextField
              {...register('phone', { required: 'Phone Number is Empty' })}
              fullWidth
              placeholder='Nhập số điện thoại'
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
                  textAlign: 'right'
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
                      <p className="text-sm text-white mx-3">Số điện thoại</p>
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

            <TextField
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Invalid Email Format'
                }
              })}
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
                },
                "& .MuiInputBase-input": {
                  textAlign: 'right'
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
                    <div className="flex items-center">
                      <p className="text-sm text-white mx-3">Email</p>
                    </div>
                  </InputAdornment>
                )
              }}
            />

            <TextField
              {...register('password', { required: 'Password is Empty' })}
              type={showPassword ? "text" : "password"}
              fullWidth
              placeholder='Mật khẩu'
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
                },
                "& .MuiInputBase-input": {
                  textAlign: 'right'
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
                startAdornment: (
                  <InputAdornment position="start">
                    <p className="text-sm text-white mx-3">Mật khẩu</p>
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

            <TextField
              {...register('confirmPassword', { required: 'Confirm Password is Empty' })}
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              placeholder='Mật khẩu (Xác nhận)'
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
                },
                "& .MuiInputBase-input": {
                  textAlign: 'right'
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
                startAdornment: (
                  <InputAdornment position="start">
                    <p className="text-sm text-white mx-3">Mật khẩu (Xác nhận)</p>
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end" className={watch('confirmPassword') === '' || !watch('password') ? 'hidden' : ''}>
                    {
                      showConfirmPassword ? <VisibilityOutlinedIcon onClick={handleToggleConfirmPassword} className="text-white text-sm font-light mx-3 cursor-pointer" />
                        : <VisibilityOffOutlinedIcon onClick={handleToggleConfirmPassword} className="text-white text-sm font-light mx-3 cursor-pointer" />
                    }
                  </InputAdornment>
                )
              }}
            />
          </div>
          <Button variant="contained" className="bg-primary normal-case font-normal w-full mt-16 py-3 text-sm2 hover:bg-primary">Đăng ký</Button>
        </div>
        <div className="flex items-center justify-center text-base mb-4">
          <p className="text-white ">Bạn đã có tài khoản?</p>
          <Link href='/' className="ml-2 text-primary cursor-pointer">Đăng nhập</Link>
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

export default Register