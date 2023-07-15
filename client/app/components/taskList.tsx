import { ITask } from "@/types/tasks.types"
import React from "react"
import Task from "./task"

interface TaskListProps {
  tasks: ITask[]
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}      
    </tbody>
  </table>
</div>
  )
}

export default TaskList