"use client";

import { useState } from "react";
import Trash from "@/icons/Trash";
import { Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Edit from "@/icons/Edit";
import Check from "@/icons/Check";
import TaskModal from "./TaskModal";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      bg-green-500 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-blue-500  cursor-grab relative
      "
      />
    );
  }
  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-slate-200 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-lg hover:ring-2 hover:ring-inset hover:ring-red-500 cursor-grab relative"
      >
        <textarea
          className="
        h-[90%]
        w-full resize-none border-none rounded bg-transparent text-black focus:outline-none
        "
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
        <div className="flex flex-col justify-center items-center absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={toggleEditMode}
            className="stroke-white bg-green-500 p-1 rounded opacity-60 hover:opacity-100"
          >
            <Check />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-slate-100 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-lg hover:ring-2 hover:ring-inset hover:ring-blue-500 cursor-grab relative task"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p
        onClick={openModal}
        className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap"
      >
        {task.content}
      </p>
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="h-[100vh] w-[100vw] bg-white">
            <TaskModal
              closeModal={closeModal}
              setIsModalOpen={setIsModalOpen}
              task={task}
            />
          </div>
        </div>
      )}

      {mouseIsOver && (
        <div className="flex flex-col gap-y-1 justify-center items-center absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
            className=" stroke-white  bg-red-500 p-1 rounded opacity-60 hover:opacity-100"
          >
            <Trash width={18} height={18} />
          </button>
          <button
            onClick={toggleEditMode}
            className="stroke-white bg-green-500 p-1 rounded opacity-60 hover:opacity-100"
          >
            <Edit width={18} height={18} />
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
