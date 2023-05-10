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
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [mainTasks, setMainTasks] = useState('');
  const [employmentDate, setEmploymentDate] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  const [generalinfo, setGeneralInfo] = useState({
    cvName: '',
    cvEmail: '',
    cvPhone: ''
  });
  const [editStatePS, setEditStatePS] = useState(false);

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
        companyName={companyName}
        positionTitle={positionTitle}
        mainTasks={mainTasks}
        employmentDate={employmentDate}
        setCompanyName={setCompanyName}
        setPositionTitle={setPositionTitle}
        setMainTasks={setMainTasks}
        setEmploymentDate={setEmploymentDate}
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
      />
    </div>
  );
}

//When submit button is clicked
//Set name to user inputted name
//Set email to user inputted email
//Set phone to user inputted phone

export default App;
