import { useState } from "react";

function PersonalInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSubmit = () => {
    setEditMode(false);
  };

  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col m-5 gap-6 border p-10 bg-lime-700 rounded-2xl">
        <h2
          className="font-bold tracking-widest text-[30px] cursor-pointer"
          onClick={() => {
            if (editMode) {
              setEditMode(false);
            } else {
              setEditMode(true);
            }
          }}
        >
          Personal Information
        </h2>
        {editMode ? (
          <form
            action="#"
            className="flex flex-col gap-6 border p-10 bg-lime-700 rounded-2xl text-white"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <button
              onClick={handleSubmit}
              className="bg-lime-900 p-2 rounded-lg text-white tracking-widest uppercase font-sans-serif hover:bg-white hover:text-black hover:font-serif hover:font-extrabold"
            >
              Submit
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-5 my-5 bg-yellow p-5 rounded-2xl">
        <p className="text-20px font-bold text-center tracking-widest">
          General information
        </p>
        <p>
          Name: <span className="font-bold uppercase">{name}</span>
        </p>
        <p>
          Email: <span className="font-bold uppercase">{email}</span>
        </p>
        <p>
          Phone: <span className="font-bold uppercase">{phone}</span>
        </p>
        <button
          onClick={handleEditClick}
          className="bg-lime-900 p-2 rounded-lg text-white tracking-widest uppercase font-sans-serif hover:bg-white hover:text-black hover:font-serif hover:font-extrabold hover:border-lime-900 hover:border-[2px]"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
