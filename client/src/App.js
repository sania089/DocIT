import TextEditor from "./TextEditor";
import './styles.css';
import {
 BrowserRouter as Router,
 Route,
 Navigate, 
 Routes,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
 return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/document/${uuidV4()}`} replace />} />
        <Route path="/document/:id" element={<TextEditor />} />
      </Routes>
    </Router>
 );
}

export default App;