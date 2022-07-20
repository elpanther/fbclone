import React from "react";
import {  Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,  Avatar, Checkbox} from "@mui/material";
import { red } from "@mui/material/colors";
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from "@mui/icons-material/Favorite";

const Post = () => {
    return (
        <div>
             <Card sx={{margin:5}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/294463484_10159982595219910_25853731971416118_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=q1uzO1D_m00AX_qDUsc&_nc_ht=scontent-lga3-1.xx&oh=00_AT9_il4r4YSYdb2XfXKNnIUVGfpoNBdCsWSWEIYvKo7J6w&oe=62DBCE30"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"black"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
      </CardActions>
      
    </Card>


        </div>
    )

}
export default Post