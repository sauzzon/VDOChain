import LandingPage from "./components/landing";
import VideoFeed from "./components/videoFeed";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<VideoFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
