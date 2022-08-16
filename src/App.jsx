import Button from './components/Button';
import CardTitle from './components/CardTitle';
import Icon from './components/Icon';
import './App.css';

function App() {
  return (
    <div className="App">
      <Icon pictureUrl="/src/pics/images.png" altText="Profile Picture" />
      <CardTitle>Hi, you are very welcome to my web-page.</CardTitle>
      <Button>click me!</Button>
    </div>
  );
}

export default App;
