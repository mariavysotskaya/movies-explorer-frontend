import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {useRoutes} from '../../routes/routes'
import {useAuthRoutes} from '../../routes/auth.routes'
import './App.css'
import NotFoundPage from '../NotFoundPage/NotFoundPage'

function App() {
  const routes = useRoutes();
  const authRoutes = useAuthRoutes();

  return (
    <BrowserRouter>
      <div className="App">   
        <Switch>
          <Route path="/(signin|signup)">{authRoutes}</Route>
          <Route exact path="/notfound">
            <NotFoundPage />
          </Route>        
          <Route>{routes}</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
