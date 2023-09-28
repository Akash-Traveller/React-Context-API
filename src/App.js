import Navbar from './components/NavBar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle/>
      </ThemeContextProvider>
      <nav></nav>
    </div>
  );
}

export default App;
