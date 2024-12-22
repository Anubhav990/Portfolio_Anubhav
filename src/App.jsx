import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import Home from './routes/Home';
import HireMe from './components/hireme/WhyYouShouldHireMe';
import Projects from './components/projectsshow/Projects';
import Certifications from './components/certifications/Certifications';
import WorkExp from './components/workexperience/WorkExp';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='HireMe' element={<HireMe />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='Certifications' element={<Certifications />} />
          <Route path='Workexperience' element={<WorkExp/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
