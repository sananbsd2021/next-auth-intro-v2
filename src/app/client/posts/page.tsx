"use client";
import { useState } from "react";

export default function AddPost() {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add user");

      alert("Posts added successfully!");
      setForm({ title: "", content: "" });
    } catch (error) {
      console.error(error);
      alert("Error adding post.");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">ข้อมูลโพสต์</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="title"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="content"
          required
          className="w-full p-2 border rounded"
        />
        {/* <button type="submit">Submit</button> */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          เพิ่มข้อมูล
        </button>
      </form>
    </div>
  );
}

