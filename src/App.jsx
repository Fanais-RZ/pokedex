import Box from '@mui/material/Box';
import Button from './components/Button';
import CardTitle from './components/CardTitle';
import Icon from './components/Icon';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <Icon pictureUrl="/src/pics/images.png" altText="Profile Picture" />
      </Box>
      <CardTitle>Hi, you are very welcome to my web-page.</CardTitle>
      <Button>click me!</Button>
    </div>
  );
}

export default App;
