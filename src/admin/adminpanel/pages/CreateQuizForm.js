import React from 'react'
import Paper from '@mui/material/Paper';

import { Box } from '@mui/system'
import { TextField, Typography } from '@mui/material';


const CreateQuizForm = () => {
  return (
<>
<Box sx={{paddingLeft:32}}>Create Quiz Form
<Paper elevation={6} sx={{width:1000,height:129}}>
<TextField type="text" label="Enter Question" ></TextField>
<TextField type="text" label="Enter Correct Answer" ></TextField>
<TextField type="text" label="Enter Other Answer for Option A" ></TextField>
<TextField type="text" label="Enter Other Answer for Option B" ></TextField>
<TextField type="text" label="Enter Other Answer for Option C" ></TextField>
<TextField type="number" label="Duration" ></TextField>
<TextField type="text" label="Total Marks" ></TextField>
{/* question*
correctAnswer*
options (array of answers)*
duration*
totalMarks */}
</Paper>
</Box>

</>  )
}

export default CreateQuizForm