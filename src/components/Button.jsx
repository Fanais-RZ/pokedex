import MuButton from '@mui/material/Button';
// Poor little button, it became a cow
function Button({ children, ...rest }) {
  return (
    <MuButton variant="outlined" {...rest}>
      {children}
    </MuButton>
  );
}

export default Button;
