import Avatar from '@mui/material/Avatar';

const Icon = ({ pictureUrl, altText, ...rest }) => (
  <Avatar
    alt={altText}
    src={pictureUrl}
    sx={{ width: 100, height: 100 }}
    {...rest}
  />
);

export default Icon;
