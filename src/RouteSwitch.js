import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Shop/*" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
