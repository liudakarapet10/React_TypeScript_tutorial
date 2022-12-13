import { useState, useRef, useEffect } from "react";

export const MutableREf = ( ) => {
    const [timer, setTimer] = useState(0);
    const InterValRef = useRef<number | undefined>(undefined);


    const stopTimer = () => {
      if(InterValRef.current) window.clearInterval(InterValRef.current);
    }

    useEffect(() => {
      InterValRef.current = window.setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
       return () => {
        stopTimer()
       }
    }, [])

    return(
      <div>
        HookTimer - {timer} -
          <button onClick = {() => stopTimer()}>Stop timer</button>
      </div>  
    )
}

