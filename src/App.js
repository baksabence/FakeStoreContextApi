import Tablazat from "./components/public/Tablazat";
  import Public from "./components/pages/Public";
  import Admin from "./components/pages/Admin"
  import Layout from "./components/pages/Layout";
  import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fakestore webáruház</h1>
      </header>

      <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Public />} />
            <Route path="admin" element={<Admin />} />
            </Route>
        </Routes>
    </BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
     </ul>
  </div>
</nav>
      
      <main>
        <Tablazat />
      </main>  
    </div>
    
    
    
  );
}

export default App;
// <Urlap />