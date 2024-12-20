import './App.css'
import { NotesList } from './components/NotesList.tsx';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <NotesList />
    </>
  );
}

export default App
