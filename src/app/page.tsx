import Charts from "./components/charts"
import TicketTable from "./components/tickettable"
import { Ticket } from "./type/types"
export const dynamic = "force-dynamic"
export default async function Home(){
  const res = await fetch(`${process.env.API_URL}/api/ticket`)
  const result: Ticket[] = await res.json()
  
  return(
    <div>
      <TicketTable Ticket={result}/>
      <Charts Holder={result} />
    </div>
  )
}