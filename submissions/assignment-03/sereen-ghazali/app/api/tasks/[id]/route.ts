import { tasks } from "../route";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const taskId = Number(id);

  if (!Number.isInteger(taskId)) {
    return Response.json(
      { error: "Invalid task ID" },
      { status: 400 }
    );
  }

  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return Response.json(
      { error: "Task not found" },
      { status: 404 }
    );
  }

  return Response.json(
    { data: task },
    { status: 200 }
  );
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const taskId = Number(id);

  if (!Number.isInteger(taskId)) {
    return Response.json(
      { error: "Invalid task ID" },
      { status: 400 }
    );
  }

  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return Response.json(
      { error: "Task not found" },
      { status: 404 }
    );
  }

  try {
    const body = await request.json();

    if (
      body === null ||
      typeof body !== "object" ||
      Object.keys(body).length === 0
    ) {
      return Response.json(
        { error: "Update body cannot be empty" },
        { status: 400 }
      );
    }

    if (body.title !== undefined) {
      if (
        typeof body.title !== "string" ||
        body.title.trim() === ""
      ) {
        return Response.json(
          { error: "Title cannot be empty" },
          { status: 400 }
        );
      }

      task.title = body.title.trim();
    }

    if (body.completed !== undefined) {
      if (typeof body.completed !== "boolean") {
        return Response.json(
          { error: "Completed must be a boolean" },
          { status: 400 }
        );
      }

      task.completed = body.completed;
    }

    return Response.json(
      { data: task },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const taskId = Number(id);

  if (!Number.isInteger(taskId)) {
    return Response.json(
      { error: "Invalid task ID" },
      { status: 400 }
    );
  }

  const taskIndex = tasks.findIndex(
    (task) => task.id === taskId
  );

  if (taskIndex === -1) {
    return Response.json(
      { error: "Task not found" },
      { status: 404 }
    );
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];

  return Response.json(
    { data: deletedTask },
    { status: 200 }
  );
}

