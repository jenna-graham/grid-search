import Search from "./Search/Search.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Search />} />
            </Routes>
        </Router>
    )
  }