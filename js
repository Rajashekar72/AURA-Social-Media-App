import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Private Routes wrapped in Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":username" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;


// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        twitterBlue: '#1DA1F2',
        darkBg: '#15202b', // "Dim" mode
        deepBlack: '#000000', // "Lights Out" mode
      },
    },
  },
}
