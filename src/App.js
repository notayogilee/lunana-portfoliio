import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/utils/Theme'
import Landing from './components/pages/Landing'
import About from './components/pages/About'
import Work from './components/pages/Work'
import More from './components/pages/More'
import Header from './components/utils/Header'
import Footer from './components/utils/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/more" component={More} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
