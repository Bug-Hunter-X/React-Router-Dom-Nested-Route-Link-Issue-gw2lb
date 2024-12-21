```javascript
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
}
```