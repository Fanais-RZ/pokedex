/* eslint-disable react/jsx-closing-bracket-location */
import Avatar from '@mui/material/Avatar';

function Icon({ pictureUrl, altText, ...rest }) {
  return (
    <Avatar
      alt={altText}
      src={pictureUrl}
      sx={{ width: 100, height: 100 }}
      {...rest}
    />
  );
}

export default Icon;
