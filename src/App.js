import Word from "./components/Word";
import words from './words.json';
import './App.css'

function App() {
  console.log(words);
  return (
    <div className="container">
      {
        words.map((word, index) => {
          return <Word
                    key={index}
                    word={word.word}
                    index={index}
                    forbidden_words={word.forbidden_words} 
                  />   
        })
      }
    </div>
  );
}

export default App;
