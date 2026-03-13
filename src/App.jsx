import {useState , useRef , useEffect} from 'react'
import './style.css'
import React from 'react'

function App() {
  const [counter , setCounter] = useState(30)
  const [running , setRunning] = useState(false)
  const [theme , setTheme] = useState('light')
  
  
  
 
  const back = document.getElementById('main') 


    useEffect(() => {
      if (!running) return

      if(counter === 0){
        setRunning(false)
        setTheme('light')
        return
      }

      const timer = setTimeout(() => {
        setCounter(counter - 1)
      }, 1000);

      return () => clearTimeout(timer)
    } , [counter , running])
    

    function start_handle(){
    //     if(ref.current)
    //         return;

    //     ref.current = setInterval(() => {
    //   setCounter(prev => {
    //     if (prev == 1) {
    //       clearInterval(ref.current);
    //       ref.current = null;
    //       setComplete(true)
    //       handle_Toggle()
    //       return 0;
    //     }

    //     return prev - 1;

    //   });
    //   divRef.current.style.width = parseInt(divRef.current.style.width) - 9 + "px";

    // }, 1000);
      setRunning(true)  
    }  
     
  
    function reset_handle(){
      // clearInterval(ref.current)
      // ref.current = null
      // setComplete(false)
      // setCounter(30)
      // divRef.current.style.width = "270px"
      // back.style.backgroundColor = 'grey'
      // back.style.backgroundColor = 'white'
      // setTheme('light')

      setRunning(false)
      setTheme('light')
      setCounter(30)

    }
    
    function handle_Toggle(){
      if (theme == 'dark'){
        back.style.backgroundColor = 'white'
        setTheme('light')
      }
      else{
        setTheme('dark')
        back.style.backgroundColor = 'grey'
      }
    }
    const value = (counter/30) * 270;

    function stop_handle(){
      setRunning(false)
    }
  return (

    <>
    <h1>Mid term preparation has been started</h1>
    <p className='count'>{counter}</p>
    <div  className='container'>
    <div className="diver"></div>
    <div style={{width: value}}  className="divers"></div>
    </div>
    <br></br>
    {counter == 0 && <p>Time's Up</p>}
    <br></br>
    <button onClick={start_handle} >Start</button>
    <br/>
    <button onClick={reset_handle}>Reset</button>
    <br/>
    <button onClick={stop_handle}>Stop</button>
    
    <br></br>
    <button onClick={handle_Toggle}>Toggle Theme</button>
    
    </>
  )
}

export default App
