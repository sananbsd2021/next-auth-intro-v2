'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddNewslist = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    description: '',
    role: '',
    photo: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/newslist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess('เพิ่มข้อมูลรียบร้อยแล้ว');
        setForm({ title: '', description: '', role: '', photo: '' });
        router.push('/'); // กลับไปหน้าหลักหลังจากเพิ่มข้อมูล
      } else {
        setError(data.error || 'เกิดข้อผิดพลาด');
      }
    } catch (error) {
      console.error('Error adding news:', error);
      setError('เกิดข้อผิดพลาด');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">เพิ่มข่าวใหม่</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">description</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">หมวดหมู่</label>
          
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >

            <option value="">---เลือก---</option>
            <option value="news">ข่าวประชาสัมพันธ์</option>
            <option value="newslist">ข่าวประกวดราคา</option>
            {/* <option value="staff">ภารโรง</option> */}
          </select>
          
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">ลิงก์รูปภาพ</label>
          <input
            type="url"
            name="photo"
            value={form.photo}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          เพิ่มบุคลากร
        </button>
      </form>
    </div>
  );
};

export default AddNewslist;
