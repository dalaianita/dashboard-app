import { useEffect, useState } from "react";

function CurrentTime(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000);
        return ()=>{
            clearInterval(intervalId);            
        }
    },[]);

    return (
        <div>
            <h1>Current Time: {time}</h1>
        </div>
    )
}
export default CurrentTime;