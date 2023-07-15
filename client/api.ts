import { ITask } from "./types/tasks.types"

const baseUrl = 'http://localhost:3001'

export const getAllTasks = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {cache: "no-store"});
    const tasks = await res.json();
    return tasks; 
}

export const addTask = async (task: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const newTask = await res.json();
    return newTask;
}

export const editTask = async (task: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const updatedTask = await res.json();
    return updatedTask;
}

export const deleteTask = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
    })
}