import './App.css';
import General from './components/General'
import { useState } from 'react';
import jsPDF from 'jspdf';
import Overview from './components/Overview';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
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
    },
    {
      id: 2,
      companyName: 'Company B',
      positionTitle: 'Position B',
      mainTasks: ['Task 4', 'Task 5'],
      employmentDate: 'Jan 2021 - Present',
      isEditing: false
    }]
  )

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

  function updateEH(updatedHistory) {
    setEmploymentHistory(updatedHistory)
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




  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newGeneralInfo = {
      cvName: formData.get('name'),
      cvEmail: formData.get('email'),
      cvPhone: formData.get('phone')
    };

    setGeneralInfo(newGeneralInfo);

    // Get the form data
    // const namepdf = formData.get('name');
    // const emailpdf = formData.get('email');
    // const phonepdf = formData.get('phone');

    // Create a new PDF document
    // const doc = new jsPDF();

    // Add the form data to the PDF
    // doc.text(`Name: ${namepdf}`, 10, 10);
    // doc.text(`Email: ${emailpdf}`, 10, 20);
    // doc.text(`Phone: ${phonepdf}`, 10, 30);

    // Save the PDF
    //doc.save('cv.pdf');

  };


  return (
    <div className="App">
      <h1>CV Application</h1>

      <General
        name={name}
        email={email}
        phone={phone}
        generalinfo={generalinfo}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        handleSubmit={handleSubmit}
        setGeneralInfo={setGeneralInfo}

      />

      <Experience
        employmentHistory={employmentHistory}
        editEmploymentEntry={editEmploymentEntry}
        updateEmploymentEntry={updateEmploymentEntry}
        deleteEmploymentEntry={deleteEmploymentEntry}
        setEmploymentHistory={setEmploymentHistory}
        handleAddEntry={handleAddEntry} // Pass the callback function to the Experience component
      />
      <Education
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfStudy={dateOfStudy}
        setSchoolName={setSchoolName}
        setTitleOfStudy={setTitleOfStudy}
        setDateOfStudy={setDateOfStudy}
      />

      <Overview
        generalinfo={generalinfo}
        handleEdit={handleEditClickPS}
        handleChange={handleChange}
        editStatePS={editStatePS}
        handleUpdate={handleUpdateClickPS}

        employmentHistory={employmentHistory}
        editEmploymentEntry={editEmploymentEntry}
        updateEmploymentEntry={updateEmploymentEntry}
        deleteEmploymentEntry={deleteEmploymentEntry}
        setEmploymentHistory={setEmploymentHistory}
        handleAddEntry={handleAddEntry}
      />
    </div>
  );
}

//When submit button is clicked
//Set name to user inputted name
//Set email to user inputted email
//Set phone to user inputted phone

export default App;
