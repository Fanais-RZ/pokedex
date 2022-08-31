/* eslint-disable react/jsx-closing-bracket-location */
import Avatar from '@mui/material/Avatar';

function Icon({ pictureUrl, altText, ...rest }) {
  return (
    <Avatar
      alt={altText}
      src={pictureUrl}
      sx={{
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
      }}
      {...rest}
    />
  );
}

export default Icon;
