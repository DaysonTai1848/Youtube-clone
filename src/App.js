import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "./App.css";
import Homepage from "../src/components/Homepage";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/:channelId" element={<Channel />} />
        <Route path="/:videoId" element={<Video />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
