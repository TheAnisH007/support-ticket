"use client"
import { useState } from "react"
import { Ticket } from "../type/types"

interface Props {
    Ticket: Ticket[]
}
export default function TicketTable({ Ticket }: Props) {
    const tickets = Ticket
    const [sortBy, setSortBy] = useState("name")
    const [query, SetQuery] = useState('')
    const [asc, SetAsc] = useState(true)
    const [page, SetPage] = useState(0)
    const rowPerPage = 3
    function handleClicked(e: string) {
        if (sortBy === e) {
            SetAsc(!asc)
        } else {
            setSortBy(e)
            SetAsc(true)
        }
    }
    const inputFilter = tickets.filter((ticket) =>
        ticket.user.name.toLowerCase().includes(query.toLowerCase()) ||
        ticket.user.email.toLowerCase().includes(query.toLowerCase())
    )
    const Sorted = [...inputFilter].sort((a, b) => {
        if (sortBy === "name") {
            return a.user.name.localeCompare(b.user.name) * (asc ? 1 : -1)
        }
        else if (sortBy === "email") {
            return a.user.email.localeCompare(b.user.email) * (asc ? 1 : -1)
        }
        else if (sortBy === "status") {
            return a.status.localeCompare(b.status) * (asc ? 1 : -1)
        }
        else if (sortBy === "priority") {
            return a.priority.localeCompare(b.priority) * (asc ? 1 : -1)
        }
        return 0
    })
    const pagination = Sorted.slice(page * rowPerPage, (page + 1) * rowPerPage)
    return (
        <div className="max-w-[720px] mx-auto">
            <input type="text" value={query} onChange={(e) => SetQuery(e.target.value)} placeholder="search..." className="border flex mx-auto w-80 rounded-full p-1 text-sm" />
            <div className="mt-6">
                <table>
                    <thead>
                        <tr className="text-sm">
                            <th >No.</th>
                            <th onClick={() => handleClicked("name")}>Name</th>
                            <th onClick={() => handleClicked("email")}>Email</th>
                            <th>Cause</th>
                            <th>Description</th>
                            <th onClick={() => handleClicked("status")}>Status</th>
                            <th onClick={() => handleClicked("priority")}>Priority</th>
                            <th>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagination.map((data, index) => (
                            <tr key={data.id} className="text-sm">
                                <td className="p-2">{page*rowPerPage+index+1}</td>
                                <td>{data.user.name}</td>
                                <td>{data.user.email}</td>
                                <td>{data.description.title}</td>
                                <td className="max-w-[120px] p-1 truncate hover:overflow-visible hover:text-clip hover:whitespace-normal">{data.description.body}</td>
                                <td>{data.status}</td>
                                <td>{data.priority}</td>
                                <td>{data.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center gap-6 mt-4">
                <button onClick={() => SetPage(page - 1)} disabled={page === 0} className="bg-red-500 text-white p-1 text-sm rounded-md w-18 transition duration-400 ease-in-out cursor-pointer hover:bg-red-900/90 active:scale-105">Previous</button>
                <button onClick={() => SetPage(page + 1)} disabled={(page + 1) * rowPerPage >= Sorted.length} className="bg-red-500 text-white p-1 text-sm rounded-md w-12 transition duration-400 ease-in-out cursor-pointer hover:bg-red-900/90 active:scale-105">Next</button>
            </div>
        </div>
    )
}