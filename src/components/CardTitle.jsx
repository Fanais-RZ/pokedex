import Typography from '@mui/material/Typography';
// Card Title component
function CardTitle({ children }) {
  return (
    <Typography variant="h5" component="div">
      {children}
    </Typography>
  );
}
export default CardTitle;
