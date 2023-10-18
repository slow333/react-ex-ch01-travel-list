import {useState} from "react";

function DayCountSlidebar() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div style={{display: "flex"}}>
        <input type="range" min="0" max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span style={{paddingLeft: "20px"}}> Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
/*  const [count,setCount] = useState(0)
  const [step, setStep ] = useState(1)

  const date = new Date();
  const day = date.setDate(date.getDate() + count)
  const newDate = new Date(day)

  let date2 = Date.now()
  let dateCount = date2 + count*1000*60*60*24
  const dateCountFormat = new Date(dateCount)

  return (
    <div>
      <div className='buttons'>
        <button onClick={() => setStep(s => s -1 )}>-</button>
        step : {step}
        <button onClick={() => setStep(s => s + 1)}>+</button>
      </div><br/>
      <div className='buttons'>
        <button onClick={() => setCount(c => (c - step))}>-</button>
        count : {count}
        <button onClick={() => setCount(c => (c + step))}>+</button>
      </div>
      <div className='message'>
        {count > 0 ? `${count} days from today is ` : count < 0 ? `${Math.abs(count)} days ago today is ` : "today "}
        {newDate.toDateString()}<br/>
        {dateCountFormat.toDateString()}
      </div>
    </div>
  );*/
}

export default DayCountSlidebar