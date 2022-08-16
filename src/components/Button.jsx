import MuButton from '@mui/material/Button';
// Poor little button, it became a cow
const Button = ({ children, ...rest }) => (
  <MuButton variant="outlined" {...rest}>
    {children}
  </MuButton>
);

export default Button;
