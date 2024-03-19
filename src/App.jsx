import './App.css'

function App() {

  return (
    <>
     <div className="pomodoro d-flex align-items-center gap-3">
      <div className='d-flex gap-2 break'>
        <div>
        <span>pomodoro</span>
        </div>
        <div>
        <span>short break</span>
        </div>
      </div>
      <div>
        <h1>25:00</h1>
      </div>
      <div className='d-flex gap-2'>
        <button>start</button>
        <button>pause</button>
      </div>
     </div>
    </>
  )
}

export default App
