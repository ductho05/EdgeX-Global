import { useState } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from "next/navigation";
import { navigations } from "@/constants";

const Navigation = () => {

    const [value, setValue] = useState(0);
    const route = useRouter()

    const handleRoute = (link) => {
        route.push(link);
    }

    return (
        <div className="fixed bottom-0 laptop:left-1/3 laptop:right-1/3 left-0 right-0">
            <Box sx={{ width: '100%' }}>
                <BottomNavigation
                    showshowLabel={true} Labels
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
                            marginTop: '16px',
                            flexShrink: '0',
                            width: '100%',
                            height: '100%'
                        },
                        " & .MuiBottomNavigationAction-label ": {
                            fontSize: '14px',
                            marginTop: '16px',
                            maxWidth: '70px',
                            display: 'flex',
                            flexWrap: 'wrap',
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
                    {
                        navigations.map((item, index) => (
                            <BottomNavigationAction key={index} onClick={() => handleRoute(item.link)} showLabel={true} label={item.title} icon={item.icon} />
                        ))
                    }
                </BottomNavigation>
            </Box>
        </div >
    )
}

export default Navigation