import { Route,Routes } from "react-router-dom";

// Components
import HomePage from "./pages/homepage/HomePage";
import ReadMeMakerPortfolio from "./pages/readmemakerportfolio/ReadMeMakerPortfolio";
import ReadMeMakerProject from "./pages/readmemakerproject/ReadMeMakerProject";
import Document from "./pages/document/Document";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/document" element={<Document/>}/>
        <Route path="/readme/protfolio" element={<ReadMeMakerPortfolio/>}/>
        <Route path="/readme/project" element={<ReadMeMakerProject/>}/>
      </Routes>
    </div>
  );
}

export default App;
