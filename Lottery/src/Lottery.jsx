import { useState } from 'react'
import { genTicket,sum } from './helper'
import Ticket from './Ticket'
export default function Lottery({n=3 ,winningSum=15}){
    let [ticket ,setTicket] = useState(genTicket(n))
   let isWinning = sum(ticket)=== winningSum
   let buyTic = () => {
    setTicket(genTicket(3))
   }
    return(
        <div>
            <h1>Lottory Game!</h1>
            <div>
             <Ticket ticket={ticket}/>   
            </div>
            <br></br>
            <button onClick={buyTic}>Buy Ticket</button>
            <h3>{isWinning && "you have won"}</h3>
        </div>
    )
}