import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Box } from "@mui/material"
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LandscapeIcon from '@mui/icons-material/Landscape';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export const MuiNavbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <HikingIcon />
                        <DirectionsBikeIcon />
                        <LandscapeIcon />
                        <AirplanemodeActiveIcon />
                    </Box>
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    OUTDOOR EXPLORER
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Hiking</Button>
                    <Button color='inherit'>Cycling</Button>
                    <Button color='inherit'>Trips</Button>
                    <Button color='inherit'>About</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}