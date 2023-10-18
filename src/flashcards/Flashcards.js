import {useState} from "react";
import {questions} from "./flashcardsData";
import './styles.css'

function Flashcards() {
  const [data, setData] = useState(questions
    .map(list => ({...list, isAnswer:false})))
  // console.log(data)
  function handleClick(id) {
    setData(pre =>
      pre.map(data =>
        ( data.id === id
          ? {...data, isAnswer: !data.isAnswer}
          : {...data, isAnswer: false})
      )
    )
  }
  // console.log(data)
  return (
    <div className='flashcards'>
      {data.map(d =>
        <div key={d.id} onClick={() => handleClick(d.id)}
             className={d.isAnswer ? "selected" : ""}>
          {d.isAnswer ? d.answer : d.question}
        </div>
      )}
    </div>
  );
}

export default Flashcards