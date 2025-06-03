import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <section id="contact">
      <h2 className="text-[#111811] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111811] text-base font-medium leading-normal pb-2">Name</p>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111811] focus:outline-0 focus:ring-0 border-none bg-[#eaf0ea] focus:border-none h-14 placeholder:text-[#608560] p-4 text-base font-normal leading-normal"
              required
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111811] text-base font-medium leading-normal pb-2">Email</p>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111811] focus:outline-0 focus:ring-0 border-none bg-[#eaf0ea] focus:border-none h-14 placeholder:text-[#608560] p-4 text-base font-normal leading-normal"
              required
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111811] text-base font-medium leading-normal pb-2">Message</p>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111811] focus:outline-0 focus:ring-0 border-none bg-[#eaf0ea] focus:border-none min-h-36 placeholder:text-[#608560] p-4 text-base font-normal leading-normal"
              required
            ></textarea>
          </label>
        </div>
        <div className="flex px-4 py-3 justify-start">
          <button
            type="submit"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#b7e0b7] text-[#111811] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Submit</span>
          </button>
        </div>      </form>
    </section>
  );
};

export default ContactSection;
