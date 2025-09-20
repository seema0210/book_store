import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import BookForm from './components/BookForm';
import BookFormUpdate from "./components/BookFormUpdate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-book" element={<BookForm />} />
        <Route path="/update-book/:id" element={<BookFormUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
