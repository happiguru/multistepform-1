import MainForm from './components/MainForm';
import './App.css';
import { Component } from 'react';
import {Container} from 'semantic-ui-react';

class App extends Component {
  render(){
    return(
      <Container textAlign='center'>
        <MainForm />
      </Container>
    )
  }
}


export default App;
