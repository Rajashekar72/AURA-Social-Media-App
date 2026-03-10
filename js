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


import { Heart, MessageCircle, Share, Repeat2 } from 'lucide-react';

const PostCard = ({ tweet }) => {
  return (
    <div className="p-4 border-b border-gray-800 hover:bg-white/5 transition cursor-pointer">
      <div className="flex space-x-3">
        {/* User Avatar */}
        <img src={tweet.userAvatar} className="h-10 w-10 rounded-full" alt="profile" />
        
        <div className="flex-1">
          {/* Header: Name & Timestamp */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white hover:underline">{tweet.displayName}</span>
            <span className="text-gray-500 text-sm">@{tweet.username} · 2h</span>
          </div>

          {/* Content */}
          <p className="text-white mt-1">{tweet.text}</p>
          {tweet.image && <img src={tweet.image} className="mt-3 rounded-2xl border border-gray-800" />}

          {/* Interaction Bar */}
          <div className="flex justify-between mt-3 text-gray-500 max-w-md">
            <div className="flex items-center space-x-2 hover:text-blue-400 group">
              <MessageCircle size={18} /> <span>{tweet.comments}</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-green-400 group">
              <Repeat2 size={18} /> <span>{tweet.retweets}</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-pink-500 group">
              <Heart size={18} className="group-hover:fill-pink-500" /> <span>{tweet.likes}</span>
            </div>
            <Share size={18} className="hover:text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};


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
