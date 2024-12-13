import './App.css';
import { Editor } from './components/editor';

function App() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>My Minimal Tiptap Editor</h1>
      <Editor />
    </div>
  );
}

export default App;
