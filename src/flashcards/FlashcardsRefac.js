import {useState} from "react";
import {questions} from "./flashcardsData";
import './styles.css'

function Flashcards() {
  const [selected, setSelected] = useState(null)

  return (
    <div className='flashcards'>
      {questions.map(data =>
        <div key={data.id} onClick={() => setSelected(data.id)}
             className={selected === data.id ? "selected" : ""}>
          {selected === data.id ? data.answer : data.question}
        </div>
      )}
    </div>
  );
}

export default Flashcards