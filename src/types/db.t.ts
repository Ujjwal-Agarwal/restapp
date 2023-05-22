interface User{
    name: string,
    email: string,
    password: string,
    id: string
}

interface Ticket{
    id:string
    senderId: string
    recieverId: string
    text: string
    timestamp: number
}

interface Queue{
    id:string
    messages: Ticket[]
}

interface SubscribeRequest{
    id: string
    senderId: string
    recieverId: string
}