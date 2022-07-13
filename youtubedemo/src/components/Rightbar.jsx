import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Rightbar = () => {
    return(
        <Box flex={2} p={2}  sx={{ display: {xs:"none", sm: "block"}}}>
        <Box position="fixed" width={300}>
            <Typography varient="h6" fontWeight={100}>Online Friends </Typography>
            <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>

    <Typography varient="h6" fontWeight={100} marginTop={2} mb={2}>Latest Pics</Typography>

   <ImageList sx={{ width: 300, height: 450 }} cols={3} rowHeight={100} gap={5} >
   <ImageListItem >
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
            srcSet=""
            alt=""
            loading="lazy"
          />
             <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            srcSet=""
            alt=""
            loading="lazy"
          />
             <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            srcSet=""
            alt=""
            loading="lazy"
          />
            
    </ImageListItem>
    </ImageList>
     
        </Box>
        </Box>
    )
}

export default Rightbar

