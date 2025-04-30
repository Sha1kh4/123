"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DndContext,
  closestCenter,
  useDroppable,
  useDraggable,
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import axios from "axios";

type Section = { id: string; title: string; content: string };

export default function SectionsPage() {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    axios.get("/api/sections").then((res) => setSections(res.data));
  }, []);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      const newOrder = arrayMove(sections, oldIndex, newIndex);
      setSections(newOrder);
      axios.post("/api/sections/reorder", { sections: newOrder });
    }
  };

  const handleChange = (
    id: string,
    field: "title" | "content",
    value: string
  ) => {
    const updated = sections.map((s) =>
      s.id === id ? { ...s, [field]: value } : s
    );
    setSections(updated);
  };

  const handleSave = (id: string) => {
    const section = sections.find((s) => s.id === id);
    if (section) axios.put(`/api/sections/${id}`, section);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Sections</h1>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
        <SortableContext
          items={sections.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((section) => (
            <SortableSection
              key={section.id}
              section={section}
              onChange={handleChange}
              onSave={handleSave}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

function SortableSection({ section, onChange, onSave }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: `translateY(${transform?.y}px)`, transition }}
      {...attributes}
      {...listeners}
      className="bg-white border rounded-xl shadow-sm p-4 mb-4 space-y-2"
    >
      <Input
        value={section.title}
        onChange={(e) => onChange(section.id, "title", e.target.value)}
        placeholder="Title"
      />
      <Input
        value={section.content}
        onChange={(e) => onChange(section.id, "content", e.target.value)}
        placeholder="Content"
      />
      <Button onClick={() => onSave(section.id)}>Save</Button>
    </div>
  );
}
