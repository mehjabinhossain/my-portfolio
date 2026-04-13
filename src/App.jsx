import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Chatbot } from "./components/Chatbot";
import { WelcomePopup } from "./components/WelcomePopup";
const isGithubPages = window.location.hostname.includes('github.io');

function App() {
  return (
    <>
      <WelcomePopup />

      {!isGithubPages && <Chatbot />}

      <Toaster />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;