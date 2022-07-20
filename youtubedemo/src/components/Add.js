import { Box, Fab, Modal, styled, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon} from '@mui/icons-material'

const SytleModel = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const Add = () => {

    const [open, setOpen] = useState(false)

  return (
<><Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25)", md:30}}}>
<Fab color="primary" aria-label="add">
    <AddIcon/>
</Fab>
</Tooltip>

<SytleModel
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white">
        <Typography varient="h6" color="blueviolet">Create Post</Typography>
        </Box>
      </SytleModel>


</>
  )
}

export default Add