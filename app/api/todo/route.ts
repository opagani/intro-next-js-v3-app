import { NextResponse } from 'next/server'
import db from '@/utils/db'

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({})
  return NextResponse.json({ data: todos })
}

export const POST = async (request: Request) => {
  const data = await request.json()
  const todo = await db.todo.create({
    data,
  })
  return NextResponse.json({ message: todo })
}

// import { NextResponse } from 'next/server'

// export const GET = async ({ request: Request }: never) => {
//   return NextResponse.json({ message: 'hello' })
// }

// export const POST = async (request: Request) => {
//   const data = await request.json()
//   return NextResponse.json({ message: data })
// }
