import React from "react";
import FormatDate from "@/utils/FormatDate";

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
}

const ViewNoteCard = (note: Note) => {
  return (
    <div
      key={note.id}
      className="bg-white border border-gray-200 p-6 hover:bg-gray-100 duration-200 rounded-md"
    >
      <h5 className="mb-2 text-2xl font-semibold text-center">{note.title}</h5>
      <hr className="h-px my-3 bg-gray-700" />
      <p className="text-gray-900">{note.content}</p>
      <hr className="h-px my-3 bg-gray-700" />
      <p>{FormatDate(note.date)}</p>
    </div>
  );
};

export default ViewNoteCard;
