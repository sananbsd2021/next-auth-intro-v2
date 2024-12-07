'use client';

import { useState } from 'react';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([{ name: '', link: '' }]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      const res = await fetch(`http://localhost:3000/api/newssell`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, files }),
      });

      if (!res.ok) {
        throw new Error('Failed to add news');
      }

      console.log('News added successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (index: number, field: 'name' | 'link', value: string) => {
    const updatedFiles = [...files];
    updatedFiles[index][field] = value;
    setFiles(updatedFiles);
  };

  const addFileField = () => {
    setFiles([...files, { name: '', link: '' }]);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-gray-200'>
      <h1 className='p-1'>เพิ่มข่าวประกวดราคา</h1>
  
      <input
        type="text"
        placeholder="หัวข้อข่าว"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="relative z-0 w-full mb-5 group mx-auto p-1"
      />


      <textarea
        placeholder="รายละเอียด"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="relative z-0 w-full mb-5 group mx-auto p-1"
      />


      <h2>ไฟล์แนบ</h2>
      {files.map((file, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="ชื่อไฟล์"
            value={file.name}
            onChange={(e) => handleFileChange(index, 'name', e.target.value)}
            required
            className="relative z-0 w-full mb-5 group mx-auto p-1"
          />

         
          <input
            type="text"
            placeholder="ลิงก์ไฟล์"
            value={file.link}
            onChange={(e) => handleFileChange(index, 'link', e.target.value)}
            required
            className="relative z-0 w-full mb-5 group mx-auto p-1"
          />
         
        </div>
      ))}
      <button type="button" onClick={addFileField} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
        เพิ่มไฟล์
      </button>
      <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>บันทึก</button>
    </form>
  );
};

export default AddNews;
