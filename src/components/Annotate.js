import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { annotateListData } from '../utils/constant'
const Annotate = () => {
  return (
    <div>
      <Typography component='div'>
        <Box
          color='text.disabled'
          fontSize='overline.fontSize'
          fontWeight='fontWeightLight'
        >
          {annotateListData.map((annotate, index) => (
            <Box key={index} mb={1.5} display='flex'>
              <Box pr={2}>{`${index + 1}.`}</Box>
              {annotate.content}
            </Box>
          ))}
        </Box>
      </Typography>
    </div>
  )
}

export default Annotate
