"use client"
import { Ticket } from "../type/types";
import { BarChart, XAxis, YAxis, PieChart, Bar, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
interface Props {
    Holder: Ticket[]
}
export default function Charts({ Holder }: Props) {
    const Status = Holder
    const Total = Status.length
    const COLORS = ["#22c55e", "#f59e0b", "#ef4444"]
    const statusData = [
        { name: "New", value: Status.filter((e) => e.status === "new").length },
        { name: "In-progress", value: Status.filter((e) => e.status === "in-progress").length },
        { name: "Pending", value: Status.filter((e) => e.status === "pending").length },
        { name: "Completed", value: Status.filter((e) => e.status === "completed").length },
    ]
    const priorityData = [
        { name: "Low", value: Status.filter((d) => d.priority === "low").length },
        { name: "Medium", value: Status.filter((d) => d.priority === "medium").length },
        { name: "High", value: Status.filter((d) => d.priority === "high").length },
    ]
    return (
        <div className="max-w-[720px] mx-auto mt-12">
            <div>
                <span className="text-lg">Total:</span>
                <span className="text-3xl font-semibold">{Total}</span>
            </div>
            <div className="flex gap-8 mt-4">
                <div>
                    <span className="text-3xl font-bold">Status</span>
                    <ResponsiveContainer width={300} height={400}>
                        <BarChart data={statusData}>
                            <XAxis dataKey="name" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Bar dataKey="value" fill="#0d0e41" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <span className="text-3xl font-bold">Priority</span>
                    <ResponsiveContainer width={400} height={300}>
                        <PieChart>
                            <Pie data={priorityData} dataKey="value" nameKey="name" outerRadius={100} label>
                                {priorityData.map((item, index) => (
                                    <Cell key={item.name} fill={COLORS[index]} />
                                ))}
                            </Pie>

                            <Tooltip />
                            {priorityData.map((item, index) => (
                                <Cell key={item.name} fill={COLORS[index]} />
                            ))}
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}