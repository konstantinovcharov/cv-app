import React from 'react'

export default function Experience(props) {
    const {companyName, positionTitle, mainTasks, employmentDate, setCompanyName, setPositionTitle, setMainTasks, setEmploymentDate} = props;
    return (
        <div className='experience'>
            <h1>Experience</h1>
            <form className='form-general' >
                <label htmlFor="companyName">Company name: </label>
                <input type="text" name="companyName" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" name="positionTitle" id="positionTitle" value={positionTitle} onChange={(e) => setPositionTitle(e.target.value)} />

                <label htmlFor="mainTasks">Main Tasks: </label>
                <input type="textarea" name="mainTasks" id="mainTasks" value={mainTasks} onChange={(e) => setMainTasks(e.target.value)} />

                <label htmlFor="employmentDate">Date of employment</label>
                <input type="text" name="employmentDate" id="employmentDate" value={employmentDate} onChange={(e) => setEmploymentDate(e.target.value)} />

                
            </form>
        </div>
    )
}