"use client";

import { Dispatch, useState } from "react";
import Image from "next/image";
import chevronup from "@/assets/chevron-up.png";
import chevrondown from "@/assets/chevron-down.png";
import home from "@/assets/home.png";
import close from "@/assets/close.png";
import share from "@/assets/share.png";
import star from "@/assets/star.png";
import dots from "@/assets/dots.png";
import TaskDetail from "./TaskDetail";
import { Task } from "@/types";
import { SetStateAction } from "react";
import Link from "next/link";

interface Props {
  task: Task;
  closeModal: () => void;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const TaskModal = ({ closeModal, task, setIsModalOpen }: Props) => {
  const [delMod, setDelMod] = useState(false);

  const handleDelTask = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="h-16 border-b-2 border-slate-300 flex justify-between flex-row items-center px-8">
        <div className="flex flex-row gap-x-4 justify-center items-center">
          <div className="h-5 w-5">
            <Image src={chevronup} alt="" />
          </div>
          <div className="h-5 w-5">
            <Image src={chevrondown} alt="" width={20} height={20} />
          </div>
          <div className="h-5 w-5">
            <Image
              onClick={closeModal}
              src={home}
              alt=""
              width={20}
              height={20}
            />
          </div>

          <div className="flex flex-row gap-x-4 justify-center items-center">
            <span className="text-xl text-slate-500">{">"}</span>
            <p
              onClick={closeModal}
              className="text-slate-500 text-sm font-medium"
            >
              Projects
            </p>
            <span className="text-xl text-slate-500">{">"}</span>
            <p className="text-[#145389] text-sm font-bold">Proje Name 1</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row gap-x-4 justify-center items-center relative">
            <div
              className="h-5 w-5 cursor-pointer"
              onClick={() => setDelMod(!delMod)}
            >
              <Image src={dots} alt="" />
            </div>
            {delMod && (
              <div className="bg-slate-500 right-12 top-10 absolute p-4 rounded-md">
                <button
                  onClick={handleDelTask}
                  className="text-white hover:text-red-500"
                >
                  Delete
                </button>
              </div>
            )}
            <div className="h-5 w-5">
              <Image src={share} alt="" width={20} height={20} />
            </div>
            <div className="h-5 w-5">
              <Image src={star} alt="" width={20} height={20} />
            </div>
            <div className="h-5 w-5 cursor-pointer" onClick={closeModal}>
              <Image src={close} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <TaskDetail task={task} />
      </div>
    </>
  );
};

export default TaskModal;
