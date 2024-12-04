import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Box, Menu, MenuItem } from "@mui/material";
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LandscapeIcon from '@mui/icons-material/Landscape';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import backgroundImage from '../images/20230708_100926.jpg';


export const MuiNavbar = () => {
    return (
        <AppBar 
            position="static" 
            sx={{
                height: { xs: "120px", sm: "160px", md: "240px", lg: "300px" }, // Increased navbar height
                backgroundImage: `url(${backgroundImage})`, // Add the image as a background
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Toolbar 
                sx={{ 
                    height: "100%",
                    display: "flex", 
                    justifyContent: "space-between", // Spacing between logo and nav
                    alignItems: "flex-start", // Center vertically
                    paddingTop: 8, // Add some padding at the top
                    px: { xs: 1, sm: 2, md: 3 }, // Responsive padding on sides
                }}
            >
                {/* Logo Section */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 1 } }}> {/* Responsive icon spacing */}
                            <HikingIcon sx={{ fontSize: 40 }} />
                            <DirectionsBikeIcon sx={{ fontSize: 40 }} />
                            <LandscapeIcon sx={{ fontSize: 40 }} />
                            <AirplanemodeActiveIcon sx={{ fontSize: 40 }} />
                        </Box>
                    <Typography 
                        variant="h4" 
                        component="div" 
                        sx={{ ml: 2, fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" } }} // Responsive font size
                    >
                        OUTDOOR EXPLORER
                    </Typography>
                </Box>

                {/* Navigation Links */}
                <Stack direction="row" spacing={3} sx={{ display: { xs: "none", sm: "flex" } }}> {/* Hide on small screens */}
                    <Button color="inherit" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontWeight: "600" }}>
                        Hiking
                    </Button>
                    <Button color="inherit" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontWeight: "600" }}>
                        Cycling
                    </Button>
                    <Button color="inherit" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontWeight: "600" }}>
                        Trips
                    </Button>
                    <Button color="inherit" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, fontWeight: "600" }}>
                        About
                    </Button>
                </Stack>
                
                {/* Mobile Navigation (Hamburger Menu) */}
                <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                    {/* Add a hamburger menu for mobile */}
                    <IconButton size="large" color="inherit">
                        {/* Menu icon here */}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
