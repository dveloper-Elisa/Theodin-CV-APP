import { useState } from "react";

function PracticalExperience() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateUntil, setDateUntil] = useState("");
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
          Practical Experience
        </h2>

        {editMode ? (
          <form
            action="#"
            className="flex flex-col gap-6 border p-10 bg-lime-700 rounded-2xl text-white"
          >
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <input
              type="text"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
              placeholder="Position Title"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <textarea
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
              placeholder="Main Responsibilities"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              placeholder="Date From"
              className="border-b-2 text-[20px] p-2 font-mono capitalize font outline-none bg-transparent"
            />
            <input
              type="date"
              value={dateUntil}
              onChange={(e) => setDateUntil(e.target.value)}
              placeholder="Date Until"
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
        <p className="text-30px font-bold text-center tracking-widest">
          Eductaion Back ground
        </p>
        <p>
          Company Name:
          <span className="font-bold uppercase"> {companyName}</span>
        </p>
        <p>
          Position Title:
          <span className="font-bold uppercase"> {positionTitle}</span>
        </p>
        <p>
          Main Responsibilities:
          <span className="font-bold uppercase"> {responsibilities}</span>
        </p>
        <p>
          Date From:<span className="font-bold uppercase"> {dateFrom}</span>
        </p>
        <p>
          Date Until:<span className="font-bold uppercase"> {dateUntil}</span>
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

export default PracticalExperience;
