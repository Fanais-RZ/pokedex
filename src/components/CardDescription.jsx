import Typography from '@mui/material/Typography';
// wft am I doing this this children for?
const CardDescription = ({ children }) => (
  <Typography variant="body2" component="div" textAlign="left">
    {children}
  </Typography>
);

export default CardDescription;
