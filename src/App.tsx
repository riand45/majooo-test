import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import Router from './config/router';
import Header from "./components/header";
import { PersistGate } from 'redux-persist/integration/react';
import { configurePersistor } from './config/redux/store';

function App({ store }: any) {

  const persistor = configurePersistor(store);

  return (
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Container>
          <Header/>
          <Switch>
            {Router.map((route, i) => {
              return <Route key={i.toString()} component={route.component} path={route.path} exact />
            })}
            <Route
              path="*"
              component={() => {
                return <div>404</div>;
              }}
            />
          </Switch>
        </Container>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
