import React from 'react';
import Experience from './Experience';
import Education from './Education';
import General from './General';

export default function Overview(props) {
    const {
        generalinfo,
        handleEdit,
        handleChange,
        editStatePS,
        handleUpdate,
        employmentHistory,
        editEmploymentEntry,
        updateEmploymentEntry,
        deleteEmploymentEntry,
        setEmploymentHistory,
        handleAddEntry,
        studyHistory,
        setStudyHistory,
        editEducationEntry,
        updateEducationEntry,
        deleteEducationEntry,
        handleEduEntry
    } = props;
    return (
        <>
            
            
            <General 
                generalinfo={generalinfo}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
                handleChange={handleChange}
                editStatePS={editStatePS}

            />

            <Experience
                employmentHistory={employmentHistory}
                editEmploymentEntry={editEmploymentEntry}
                updateEmploymentEntry={updateEmploymentEntry}
                deleteEmploymentEntry={deleteEmploymentEntry}
                setEmploymentHistory={setEmploymentHistory}
                handleAddEntry={handleAddEntry}
            />
            <Education
                studyHistory={studyHistory}
                setStudyHistory={setStudyHistory}
                editEducationEntry={editEducationEntry}
                updateEducationEntry={updateEducationEntry}
                deleteEducationEntry={deleteEducationEntry}
                handleEduEntry={handleEduEntry}
            />
            
        </>
    )
}