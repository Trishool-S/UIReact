import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const Separator = ({ text }) => (
  <Box mt={1} mb={2}>
    <Typography variant="h5" noWrap>
      {text}
    </Typography>
    <Divider orientation="horizontal" />
  </Box>
);

export default Separator;