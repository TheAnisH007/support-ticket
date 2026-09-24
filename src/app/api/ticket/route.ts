import { NextResponse } from "next/server";
import { Ticket } from "@/app/type/types";
const tickets: Ticket[] = [
    {
        id: 1,
        description: {
            title: "Unable to reset password",
            body: "I've tried the 'forgot password' link three times but the reset email never arrives. Checked spam folder too."
        },
        user: { name: "Riya Sharma", email: "riya.sharma@example.com" },
        status: "new",
        priority: "high",
        createdAt: "2026-08-15T09:30:00Z"
    },
    {
        id: 2,
        description: {
            title: "Invoice shows wrong amount",
            body: "My latest invoice charged me $49 instead of the $29 plan I'm subscribed to. Please correct this."
        },
        user: { name: "Marcus Lee", email: "marcus.lee@example.com" },
        status: "in-progress",
        priority: "medium",
        createdAt: "2026-08-14T14:12:00Z"
    },
    {
        id: 3,
        description: {
            title: "Dashboard not loading",
            body: "The dashboard page has been stuck on a loading spinner for the past hour. Tried refreshing and clearing cache."
        },
        user: { name: "Ananya Iyer", email: "ananya.iyer@example.com" },
        status: "new",
        priority: "high",
        createdAt: "2026-08-16T08:05:00Z"
    },
    {
        id: 4,
        description: {
            title: "Feature request: dark mode",
            body: "Would love a dark mode toggle for the app. Using it late at night is rough on the eyes."
        },
        user: { name: "Tom Baker", email: "tom.baker@example.com" },
        status: "pending",
        priority: "low",
        createdAt: "2026-08-10T17:45:00Z"
    },
    {
        id: 5,
        description: {
            title: "Cannot upload profile picture",
            body: "Every time I try to upload a new profile photo, I get a generic 'something went wrong' error."
        },
        user: { name: "Priya Nair", email: "priya.nair@example.com" },
        status: "in-progress",
        priority: "medium",
        createdAt: "2026-08-13T11:22:00Z"
    },
    {
        id: 6,
        description: {
            title: "Duplicate charge on card",
            body: "I was charged twice for this month's subscription. Please refund the duplicate transaction."
        },
        user: { name: "David Kim", email: "david.kim@example.com" },
        status: "new",
        priority: "high",
        createdAt: "2026-08-17T07:10:00Z"
    },
    {
        id: 7,
        description: {
            title: "Typo in email notification",
            body: "The welcome email says 'Your acount has been created' — missing an 'o' in 'account'."
        },
        user: { name: "Sofia Rossi", email: "sofia.rossi@example.com" },
        status: "completed",
        priority: "low",
        createdAt: "2026-08-05T13:00:00Z"
    },
    {
        id: 8,
        description: {
            title: "Export to CSV fails silently",
            body: "Clicking 'Export CSV' does nothing — no download, no error message, nothing in the console either."
        },
        user: { name: "James Carter", email: "james.carter@example.com" },
        status: "pending",
        priority: "medium",
        createdAt: "2026-08-12T16:40:00Z"
    },
    {
        id: 9,
        description: {
            title: "Mobile layout broken on iPhone SE",
            body: "The sidebar overlaps the main content on smaller screens, specifically tested on an iPhone SE."
        },
        user: { name: "Elena Popescu", email: "elena.popescu@example.com" },
        status: "in-progress",
        priority: "medium",
        createdAt: "2026-08-11T10:15:00Z"
    },
    {
        id: 10,
        description: {
            title: "Account locked after failed logins",
            body: "Got locked out after 3 failed login attempts, but I know my password is correct. Need this unlocked."
        },
        user: { name: "Noah Williams", email: "noah.williams@example.com" },
        status: "completed",
        priority: "high",
        createdAt: "2026-08-08T09:50:00Z"
    }
]
export async function GET() {
    return NextResponse.json(tickets)
}