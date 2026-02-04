import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Chatbot } from "./components/Chatbot";

function App() {
  return (
    <>
      {/* ✅ FIX: Add the Chatbot component here so it actually renders */}
      <Chatbot />

      <Toaster />
      
      {/* Router removed! We use the HashRouter from main.jsx instead. */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;