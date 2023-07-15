"use client";

import { ITask } from "@/types/tasks.types";
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTask, editTask } from "@/api";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

    const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTask({
          id: task.id,
          text: taskToEdit
        })
        setTaskToEdit('');
        setOpenModalEdit(false);
        router.refresh();
      }

      const handleDeleteTask = async (id: string) => {
        await deleteTask(id);
        setOpenModalDeleted(false);
        router.refresh();
      }

    return (
    <tr key={task.id}>
        <td className="w-full">{task.text}</td>
        <td className="flex gap-5">
            <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-blue-500" size={20} />
            <dialog id="my_modal_3" className={`modal ${openModalEdit ? "modal-open" : ""}`}>
            <form method="dialog" className="modal-box" onSubmit={handleSubmitEditTask}>
                <button onClick={() => setOpenModalEdit(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className='font-bold text-lg'>Edit Task</h3>
            <div className="modal-action">
            <input 
              value={taskToEdit}
              onChange={e => setTaskToEdit(e.target.value)}
              type="text" 
              placeholder="Type here" 
              className="input input-bordered input-error w-full"
            />
            <button type='submit' className='btn'>Add</button>
            </div>
          </form>
        </dialog>
            <FiTrash2 onClick={() => setOpenModalDeleted(true)} cursor="pointer" className="text-red-500" size={20} />

            <dialog id="my_modal_3" className={`modal ${openModalDeleted ? "modal-open" : ""}`}>
                <div className="modal-box">

                <h3 className="test-lg">Are you sure, you want to delete this task?</h3>
                <div className="modal-action">
                    <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="btn"
                        >Yes</button>
                        <button onClick={() => setOpenModalDeleted(false)}
                        className="btn">No</button>
                        </div>
                </div>
        </dialog>

        </td>
      </tr>
    )
}

export default Task;