import Navbar from './components/NavBar';
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
      <nav></nav>
    </div>
  );
}

export default App;
