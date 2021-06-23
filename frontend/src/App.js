import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container fluid>
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
