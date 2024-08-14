import {NextResponse} from 'next/server'
export function POST(req){
    console.log(req.json())
    return NextResponse.json({message: 'Hello from the server!'})
} 