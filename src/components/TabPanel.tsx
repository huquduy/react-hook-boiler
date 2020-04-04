import { Box, Typography } from '@material-ui/core'
import React from 'react'

interface ITabPanelProps {
  children?: React.ReactNode;
  value: any;
}

export default (props: ITabPanelProps) => {
  const { children, value, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
}