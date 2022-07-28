import './App.css';
import Home from './containers/Home/Home';
import NavBar from './components/NavBar/NavBar.jsx'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NewCourse from './containers/NewCourse/NewCourse';
import Course from './containers/Course/Course';

function App() {
  const baseURL = "http://localhost:8080/"
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-course" element={<NewCourse baseURL={baseURL}/>}/>
          <Route path="/course/:courseId" element={<Course baseURL={baseURL}/>}/>
        </Routes>
        
      </div>
  </Router>
  );
}

export default App;
