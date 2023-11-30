import "./App.css";

import EducationalExperience from "./components/educationExprience";
import PersonalInfo from "./components/generalInfo";
import PracticalExperience from "./components/practical";

function App() {
  return (
    <>
      <PersonalInfo />
      <EducationalExperience />
      <PracticalExperience />
    </>
  );
}

export default App;
