import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isWork, setIsWork] = useState(true); 
  const [workMinute, setWorkMinute] = useState(25);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        if (second === 0) {
          if (minute === 0) {
            setIsWork((prevIsWork) => !prevIsWork);
            setMinute(isWork ? workMinute : 5); 
            setSecond(0);
          } else {
            setMinute((prevMinute) => prevMinute - 1);
            setSecond(59);
          }
        } else {
          setSecond((prevSecond) => prevSecond - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive, isWork, minute, second, workMinute]);

  useEffect(() => {
    setMinute(isWork ? workMinute : 5);
    setSecond(0);
  }, [isWork, workMinute]);

  function timeFormat() {
    return `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
  }

  function handleStart() {
    setIsActive(true);
  }

  function handlePause() {
    setIsActive(false);
  }

  return (
    <>
      <div className="pomodoro d-flex align-items-center gap-3">
        <div className="d-flex gap-2 break">
          <div>
            <span>pomodoro</span>
          </div>
          <div>
            <span>short break</span>
          </div>
        </div>
        <div>
          <h1>{timeFormat()}</h1> {/* Corrected function call */}
        </div>
        <div className="d-flex gap-2">
          <button onClick={handleStart}>start</button>
          <button onClick={handlePause}>pause</button>
        </div>
      </div>
    </>
  );
}

export default App;
