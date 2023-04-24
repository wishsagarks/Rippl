import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    type: "",
    speaker: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const addPodcast = async (e) => {
    e.preventDefault();
    const { name, description, category, type, speaker, file } = formData;

    const data = new FormData(); 
    data.append("name", name);
    data.append("description", description);
    data.append("category", category);
    data.append("type", type);
    data.append("speaker", speaker);
    data.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/podcasts", data)
      alert("Podcast added successfully");
    } catch (error) {
      console.error("Error adding podcast:", error);
    }
  };

  return (
    <div className="admin-panel public-route-bg overflow-hidden h-screen w-full relative">
      {/* <img src="pink-wave.svg" alt="" className="xl:absolute xl:left-5 h-screen"/> */}
      <img src="purple-wave.svg" alt="" className="absolute -top-20 rotate-90 -left-96 xl:h-screen h-0"/>
      <img src="blue-wave.svg" alt="" className="absolute -top-20 -rotate-90 -left-2/4 xl:h-screen h-0 "/>
      {/* <img src="blue-wave.svg" alt="" className="xl:absolute xl:left-5 h-screen rotate-90 "/> */}
      <div className="items-center flex flex-col mt-10 gap-8">
      <img
      onClick={(e)=>{
        e.preventDefault()
        window.location.href='./'
      }}
      src="logo.svg"
      alt=""
      className="md:h-24 h-12 cursor-pointer mr-10 mt-10 absolute z-20 right-0 hidden md:block bottom-0 md:top-0"
      />
      <span 
      onClick={(e)=>{
        e.preventDefault()
        sessionStorage.removeItem("admin")
        window.location.href="/"
        
      }}
      className="absolute cursor-pointer top-44 right-14 hidden md:block text-white ">
        Log Out
        </span>
      <h2 className="poppins text-[#F7CE7A] xl:text-7xl text-2xl">Add New Podcast</h2>
      <form onSubmit={addPodcast} className="flex flex-col relative z-10 justify-around gap-5 items-center xl:pr-16">
        <input
          type="text"
          name="name"
          placeholder="Podcast Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-lg bg-[#F7CE7A] placeholder-slate-700 text-left focus:outline-none px-2 xl:py-4 py-2 w-[40vw]"
        />
        <input
          type="text"
          name="description"
          placeholder="Podcast Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="rounded-lg bg-[#F7CE7A] placeholder-slate-700 focus:outline-none text-left px-2 xl:py-4 py-2 w-[40vw]"
          />
        <select
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="rounded-lg bg-[#F7CE7A] placeholder-slate-700 focus:outline-none text-left px-2 xl:py-4 py-2 w-[40vw]"
        >
        <option value="none">Category</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Education">Education</option>
        <option value="Technical">Technical</option>
        <option value="Other">Other</option>
        </select>
        <select
          type="text"
          name="type"
          placeholder="Type"
          value={formData.type}
          onChange={handleChange}
          required
          className="rounded-lg bg-[#F7CE7A] focus:outline-none placeholder-slate-700 text-left px-2 xl:py-4 py-2 w-[40vw]"
        >
          <option value="Audio" >Audio</option>
          <option value="Video" >Video</option>
        </select>
        <input
          type="text"
          name="speaker"
          placeholder="Speaker"
          value={formData.speaker}
          onChange={handleChange}
          required
          className="rounded-lg bg-[#F7CE7A] placeholder-slate-700 text-left focus:outline-none px-2 xl:py-4 py-2 w-[40vw]"
          />
        <div className="flex flex-col xl:flex-row gap-5 items-center">
        <input type="file" name="file" onChange={handleFileChange} required className="text-[#F7CE7A] pl-12"/>
        <button type="submit" className="bg-[#F7CE7A] rounded-lg flex px-5 py-1 text-center" onClick={addPodcast}><img src="add.svg" alt="" />Add</button>
        </div>
      </form>
      <div
      onClick={(e)=>{
        e.preventDefault()
        sessionStorage.removeItem("admin")
        window.location.href="/"
        
      }}
      className="text-white poppins md:hidden">Log Out</div>
      <div
      onClick={(e)=>{
        e.preventDefault()
        window.location.href="/"
      }}
      className="text-white poppins md:hidden">Home</div>
      <img src="admin.svg" alt="" className="xl:h-64 h-36 absolute bottom-0 right-0"/>
      </div>
    </div>
  );
};

export default AdminPanel;
