import { getAllTasks } from "@/api";
import Task from "./components/addTask";
import TaskList from "./components/taskList";

export default async function Home() {
  const tasks = await getAllTasks();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Task Management App</h1>
      <Task />
      </div>
      <TaskList tasks={tasks} />
    </main>
  )
}
