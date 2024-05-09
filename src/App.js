import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogsList from "./components/BlogsList";
import BlogItemDetails from "./components/BlogItemDetails";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<BlogsList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs/:id" element={<BlogItemDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
