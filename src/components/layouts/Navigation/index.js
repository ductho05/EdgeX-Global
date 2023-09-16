import { useState } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const Navigation = () => {

    const [value, setValue] = useState(0);

    return (
        <div className="fixed bottom-0 lg:left-1/3 lg:right-1/3 left-0 right-0">
            <Box sx={{ width: '100%' }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{
                        bgcolor: '#090a0e',
                        height: '74px',
                        justifyContent: 'space-around',
                        "& .MuiBottomNavigationAction-root": {
                            color: "#848e9d",
                            padding: "0",
                            marginTop: '16px'
                        },
                        " & .MuiBottomNavigationAction-label ": {
                            fontSize: '14px',
                            marginTop: '16px'
                        },
                        '& .Mui-selected': {
                            '& .MuiBottomNavigationAction-label': {
                                fontSize: '14px',
                                marginTop: '16px'
                            },
                            '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                                color: '#25AA52'
                            }
                        },
                        "& .Mui-selected, svg": {
                            color: "#25AA52 !important"
                        },
                    }}
                >
                    <BottomNavigationAction label="Trang chủ" icon={<i className="fa-solid fa-house fa-xl" />} />
                    <BottomNavigationAction label="Đăng ký" icon={<i className="fa-solid fa-box-archive fa-xl" />} />
                    <BottomNavigationAction label="Quảng cáo" icon={<i className="fa-solid fa-video fa-xl" />} />
                    <BottomNavigationAction label="Tài sản" icon={<i className="fa-solid fa-right-left fa-xl" />} />
                    <BottomNavigationAction label="Hồ sơ" icon={<i className="fa-solid fa-user fa-xl" />} />
                </BottomNavigation>
            </Box>
        </div >
    )
}

export default Navigation