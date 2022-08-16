import Typography from '@mui/material/Typography';
// Card Title component
const CardTitle = ({ children }) => (
  <Typography variant="h5" component="div">
    {children}
  </Typography>
);

export default CardTitle;
