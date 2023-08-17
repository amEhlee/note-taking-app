"use client";

import React, { useState } from "react";
import FormatDate from "@/utils/FormatDate";
import { RiArrowDownSLine } from "react-icons/ri";

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
}

const ViewNoteCard = (note: Note) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      key={note.id}
      className="bg-white border border-gray-200 p-6 hover:bg-gray-100 duration-200 rounded-md min-w-[300px]"
    >
      <h5 className="mb-2 text-2xl font-semibold text-center">{note.title}</h5>
      <hr className="h-px my-3 bg-gray-700" />
      <p className="text-gray-900">{note.content}</p>
      <hr className="h-px my-3 bg-gray-700" />
      <p className="float-left">{FormatDate(note.date)}</p>
      
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="float-right"
      >
        <div className="cursor-pointer hover:bg-gray-200 p-1 rounded-full duration-300">
          <RiArrowDownSLine />
        </div>
        <div>
          {open ? (
            <ul className="absolute bg-white border border-gray-200 hover:bg-rose-500 hover:text-white rounded-md duration-500 px-2 py-1 font-medium -translate-x-1/3 cursor-pointer">
              <li>Delete</li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ViewNoteCard;
