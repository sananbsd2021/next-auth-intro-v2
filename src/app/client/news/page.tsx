'use client'

import { useState } from 'react';

const AddNews = () => {
  const [formData, setFormData] = useState({ newss: '', newsurl: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        setFormData({ newss: '', newsurl: '' });
      }
    } catch (err) {
      console.error('Error:', err);
      setMessage('Something went wrong');
    }
  };

  return (
    <div>
      <h1>เพิ่มข่าวประชาสัมพันธ์</h1>
      <form onSubmit={handleSubmit}>

        <div className='mb-1'>
          {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            ชื่อ
          </label> */}
          <input
            type="text"
            name="newss"
            placeholder="ข่าว"
            value={formData.newss}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-1'>
        <input
            type="text"
            name="newsurl"
            placeholder="Link ข่าว"
            value={formData.newsurl}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddNews;

