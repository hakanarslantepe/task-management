"use client";

import React, { useState } from "react";
import { Task } from "@/types";
import Avatar from "@/assets/Avatar.png";
import Image from "next/image";

interface Props {
  task: Task;
}

const Comment = ({ task }: Props) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<string[]>(task.comments || []);

  const addNewComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="p-4 overflow-y-auto text-sm">
      <div className="flex flex-col gap-y-2">
        {comments.map((comment, key) => (
          <div key={key} className="flex flex-row gap-x-2 items-center">
            <Image src={Avatar} alt="" className="w-[32px] h-[32px]" />
            <div>{comment}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-2 pt-2">
        <textarea
          placeholder="Add a comment"
          value={newComment}
          onChange={handleChange}
          className="p-2 border-2 border-slate-300 w-[99.8%] focus:outline-none focus:border-blue-500 rounded-lg"
        />
        <button
          onClick={addNewComment}
          className="bg-blue-500 text-white w-28 h-10 flex items-center justify-center  rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Comment;
