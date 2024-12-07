"use client";
import { useState } from "react";

export default function AddDrawResults() {
  const [form, setForm] = useState({
    drawDate: "",
    typeDigit: "",
    threeDigitOn: "",
    twoDigitOn: "",
    twoDigitLow: "",
  });
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/drawresults", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add DrawResults");

      alert("DrawResults added successfully!");
      setForm({
        drawDate: "",
        typeDigit: "",
        threeDigitOn: "",
        twoDigitOn: "",
        twoDigitLow: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding DrawResults.");
    }
  };

  return (
    <div className="container mx-auto">
      <h1>Add Results</h1>
      <form onSubmit={handleSubmit}>

        <div className="mb-1">
          <input
            type="date"
            name="drawDate"
            value={form.drawDate}
            onChange={handleChange}
            placeholder="drawDate"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-1">

        {/* <select
            name="typeDigit"
            value={form.typeDigit}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >

            <option value="">----เลือก----</option>
            <option value="มอนิ่ง 08.10">มอนิ่ง 08.10</option>
            <option value="เอเชีย 13.12">เอเชีย 13.12</option>
            <option value="พิเศษ 17.12">พิเศษ 17.12</option>
            <option value="ปกติ 18.12">ปกติ 18.12</option>
            <option value="วีไอพี 19.10">วีไอพี 19.10</option>
            <option value="ลาวพัฒนา 20.20">ลาวพัฒนา 20.20</option>
          </select> */}

          <input
            type="text"
            name="typeDigit"
            value={form.typeDigit}
            onChange={handleChange}
            placeholder="typeDigit"
            required
            className="w-full p-2 border rounded"
          />

        </div>

        <div className="mb-1">
          <input
            type="text"
            name="threeDigitOn"
            value={form.threeDigitOn}
            onChange={handleChange}
            placeholder="threeDigitOn"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            name="twoDigitOn"
            value={form.twoDigitOn}
            onChange={handleChange}
            placeholder="twoDigitOn"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            name="twoDigitLow"
            value={form.twoDigitLow}
            onChange={handleChange}
            placeholder="twoDigitLow"
            required
            className="w-full p-2 border rounded"
          />
        </div>

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

