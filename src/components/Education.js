import React from 'react'

export default function Education(props) {
    const {schoolName, titleOfStudy, dateOfStudy, setSchoolName, setTitleOfStudy, setDateOfStudy} = props;
    return (
        <div className='education'>
            <h1>Education</h1>
            <form className='form-general' >
                <label htmlFor="schoolName">School Name: </label>
                <input type="text" name="schoolName" id="schoolName" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />

                <label htmlFor="titleOfStudy">Title of Study:  </label>
                <input type="text" name="titleOfStudy" id="titleOfStudy" value={titleOfStudy} onChange={(e) => setTitleOfStudy(e.target.value)} />

                <label htmlFor="mainTasks">Date of Study: </label>
                <input type="text" name="dateOfStudy" id="dateOfStudy" value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)} />
                               
            </form>
        </div>
    )
}