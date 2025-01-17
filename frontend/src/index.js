import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ElementLoader from './components/ui/ELementLoader';
import { Provider } from 'react-redux'
import store from './redux/store';
const App = React.lazy(() => import('./App'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback={<ElementLoader />}>
      <App />
    </Suspense>
  </Provider>

);

reportWebVitals();
