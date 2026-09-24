export interface Ticket {
    id: number,
    description: {
        title: string,
        body: string
    }
    user: {
        name: string,
        email: string
    }
    status: "new" | "pending" | "in-progress" | "completed",
    priority: "low" | "medium" | "high"
    createdAt: string
}