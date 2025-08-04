import './App.css';
import Button from './Button';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <Button isDeactive={true}> Click Me </Button>
      <Button>Submit</Button>
    </div>
  );
}

export default App;
