import React from "react";
import SampleNotes from "@/data/SampleNotes.json";
import ViewNoteCard from "@/components/ViewNoteCard";

type Props = {};

const page = (props: Props) => {
  return (
    <section>
      <h2 className="m-4">Note Page Base View</h2>
      <div className="grid gap-8 grid-cols-3">
        {SampleNotes.map((note) => (
          <ViewNoteCard
            id={note.id}
            title={note.title}
            content={note.content}
            date={note.date}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
