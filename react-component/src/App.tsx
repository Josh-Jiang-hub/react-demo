import { RouterProvider } from 'react-router-dom';
import './App.css';
import { RouterComponent } from './routes';
import '@arco-design/web-react/dist/css/arco.css';
function App() {
  return <RouterProvider router={RouterComponent} />;
}

export default App;
