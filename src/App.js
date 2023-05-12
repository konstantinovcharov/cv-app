import './App.css';
import { useState } from 'react';
import Overview from './components/Overview';

function App() {  
  const [generalinfo, setGeneralInfo] = useState({
    cvName: '',
    cvEmail: '',
    cvPhone: ''
  });
  const [editStatePS, setEditStatePS] = useState(false);
  const [employmentHistory, setEmploymentHistory] = useState(
    [{
      id: 1,
      companyName: "Company A",
      positionTitle: "Position A",
      mainTasks: ["Task 1", "Task 2", "Task 3"],
      employmentDate: "01-01-2020 - 01-01-2022",
      isEditing: false
    }]
  )
  const [studyHistory, setStudyHistory] = useState([
    {
      id: 1,
      schoolName: "School A",
      titleOfStudy: "Title A",
      dateOfStudy: "01-02-2022 - 01-03-2023",
      isEditing: false
    }
  ])

  function handleEditClickPS() {
    setEditStatePS(true);
  }

  function handleChange(e) {
    // console.log(e)    
    const name = e.target.name;
    const value = e.target.value;

    setGeneralInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function handleUpdateClickPS() {
    setEditStatePS(false)
  }


  // Edit employment entry
  const editEmploymentEntry = (id) => {
    setEmploymentHistory((prevState) => {
      return prevState.map((employment) =>
        employment.id === id ? { ...employment, isEditing: true } : employment
      );
    });
  };

  // Update employment entry
  const updateEmploymentEntry = (id) => {
    setEmploymentHistory((prevState) =>
      prevState.map((employment) =>
        employment.id === id ? { ...employment, isEditing: false } : employment
      )
    );
  };

  // Delete employment entry
  const deleteEmploymentEntry = (id) => {
    setEmploymentHistory((prevHistory) =>
      prevHistory.filter((employment) => employment.id !== id)
    );
  };



  const handleAddEntry = () => {
    const newEntry = {
      id: employmentHistory.length + 1, // Generate a new unique ID
      companyName: '',
      positionTitle: '',
      mainTasks: [],
      employmentDate: '',
      isEditing: false,
    };

    setEmploymentHistory((prevHistory) => [...prevHistory, newEntry]);
  };


  // Edit education entry
  const editEducationEntry = (id) => {
    setStudyHistory((prevState) => {
      return prevState.map((education) =>
        education.id === id ? { ...education, isEditing: true } : education
      );
    });
  };

  // Update education entry
  const updateEducationEntry = (id) => {
    setStudyHistory((prevState) =>
      prevState.map((education) =>
        education.id === id ? { ...education, isEditing: false } : education
      )
    );
  };

  // Delete education entry
  const deleteEducationEntry = (id) => {
    setStudyHistory((prevState) =>
      prevState.filter((education) => education.id !== id)
    );
  };

  const handleEduEntry = () => {
    const newEntry = {
      id: studyHistory.length + 1, // Generate a new unique ID
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
      isEditing: false,
    };

    setStudyHistory((prevHistory) => [...prevHistory, newEntry]);
  };

  return (
    <div className="App">
      <header>
        <h1>Curriculum Vitae</h1>
      </header>
      <div className='components-container'>


        <Overview
          //General
          generalinfo={generalinfo}
          handleEdit={handleEditClickPS}
          handleChange={handleChange}
          editStatePS={editStatePS}
          handleUpdate={handleUpdateClickPS}

          //Work Experience
          employmentHistory={employmentHistory}
          editEmploymentEntry={editEmploymentEntry}
          updateEmploymentEntry={updateEmploymentEntry}
          deleteEmploymentEntry={deleteEmploymentEntry}
          setEmploymentHistory={setEmploymentHistory}
          handleAddEntry={handleAddEntry}

          //Education
          studyHistory={studyHistory}
          setStudyHistory={setStudyHistory}
          editEducationEntry={editEducationEntry}
          updateEducationEntry={updateEducationEntry}
          deleteEducationEntry={deleteEducationEntry}
          handleEduEntry={handleEduEntry}
        />
      </div>
    </div>
  );
}

export default App;
