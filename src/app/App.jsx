import './App.css'
import NavBar from "./components/navBar/navBar.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="/home" element={<div>Home</div>} />
                    <Route path="/library" element={<div>library</div>} />
                    <Route path="/browse" element={<div>browse</div>} />
                    <Route path="/update" element={<div>update</div>} />
                    <Route path="/advanced search" element={<div>Search</div>} />
                    <Route path="/more" element={<div>more</div>} />
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
