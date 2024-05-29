import './Ticket.css'
import TicketNum from "./TicketNum"
export default function Ticket({ticket}){
    return(
        <>
        <div className='Ticket'>
            <p>Ticket</p>
           {ticket.map((num,indx)=>(
           <TicketNum num = {num} key={indx}/>
           ))}
        </div>
        </>
    )
}