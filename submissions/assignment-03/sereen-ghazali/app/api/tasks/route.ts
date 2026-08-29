import { NextResponse } from "next/server";

export let tasks = [
  {
    id: 1,
    title: "Review Route Handlers",
    completed: false,
  },
  {
    id: 2,
    title: "Build Tasks API",
    completed: false,
  },
];

export async function GET() {
  return NextResponse.json({ data: tasks });
}

export async function POST(request: Request) {
  const body = await request.json();

 if (!body.title || body.title.trim() === "") {
    return NextResponse.json(
      { error: "Title is required" },
      { status: 400 }
    );
  }
  const newTask = {
    id: tasks.length + 1,
    title: body.title,
    completed: body.completed ?? false,
  };

  tasks.push(newTask);

  return NextResponse.json(
    { data: newTask },
    { status: 201 }
  );
}