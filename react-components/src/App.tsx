import './App.css';
import Search from './components/search/Search';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Search />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
