import { AppBar,Avatar,Box,InputBase,Menu,MenuItem,styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import {Mail, Notifications, Pets} from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import { theme } from "../theme";
import { useState } from "react";



const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({theme})=>({display:"none", 
gap:"20px", 
alignItems:"center",
[theme.breakpoints.up("sm")]:{
    display: "flex"
}

}))

const UserBox = styled(Box)(({theme})=>({display:"flex", gap:"10px", alignItems:"center"}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return(
    <AppBar position="sticky">
        <StyledToolbar>
        <Typography varient="H6" sx={{display:{xs:"none", sm:"block"}}}>Lama Dev</Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}/>
       <Search><InputBase placeholder="Search.."></InputBase></Search>
       <Icons>
       <Badge badgeContent={4} color="error">
                <Mail  />
        </Badge>
        <Badge badgeContent={2} color="error">
        <Notifications></Notifications>        
        </Badge>
    </Icons>
    <UserBox>
        <Avatar sx={{width: 30, height:30}} src="" onClick={e=>setOpen(true)}/>
        <Typography varient="span">Jeff</Typography>
    </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
    );
};

export default Navbar;