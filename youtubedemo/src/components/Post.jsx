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
        image="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/292285340_10159963945849910_1503753489707286829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HQndmCANLhAAX9HTe0-&_nc_ht=scontent-lga3-1.xx&oh=00_AT-gDjvqUf__0VOatru4rX4EWmvJ0YBqKce21BfU2T2SnQ&oe=62D00D43"
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