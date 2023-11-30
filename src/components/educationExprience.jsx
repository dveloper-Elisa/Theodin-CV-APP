import { useState } from "react";

function EducationalExperience() {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
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
          className="font-bold tracking-wider text-[30px] cursor-pointer"
          onClick={() => {
            if (editMode) {
              setEditMode(false);
            } else {
              setEditMode(true);
            }
          }}
        >
          Educational Experience
        </h2>
        {editMode ? (
          <form
            action="#"
            className="flex flex-col gap-6 border p-10 bg-lime-700 rounded-2xl text-white"
          >
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="School Name"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <input
              type="text"
              value={studyTitle}
              onChange={(e) => setStudyTitle(e.target.value)}
              placeholder="Title of Study"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <input
              type="date"
              value={studyDate}
              onChange={(e) => setStudyDate(e.target.value)}
              placeholder="Date of Study"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <button
              onClick={() => {
                handleSubmit();
              }}
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
          Eductaion Back ground
        </p>
        <p>
          School Name:{" "}
          <span className="font-bold uppercase"> {schoolName}</span>
        </p>
        <p>
          Title of Study:{" "}
          <span className="font-bold uppercase">{studyTitle}</span>{" "}
        </p>
        <p>
          Date of Study:{" "}
          <span className="font-bold uppercase">{studyDate}</span>{" "}
        </p>
        <button
          onClick={handleEditClick}
          className="bg-lime-900 p-2 rounded-lg text-white tracking-widest uppercase font-sans-serif hover:bg-white hover:text-black hover:font-serif hover:font-extrabold"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default EducationalExperience;
