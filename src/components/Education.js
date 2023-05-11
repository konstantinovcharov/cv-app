import React from 'react'

export default function Education(props) {
    const {
        studyHistory,
        setStudyHistory,
        editEducationEntry,
        updateEducationEntry,
        deleteEducationEntry,
        handleEduEntry
    } = props;

    return (
        <div className='education'>
            <h1>Education</h1>
            {studyHistory.map((education) => (
                <div key={education.id}>
                    <div className='col'>
                        {education.isEditing ? (
                            <>
                                <label>School Name: </label>
                                <input
                                    type='text'
                                    value={education.schoolName}
                                    onChange={(e) =>
                                        setStudyHistory((prevState) =>
                                            prevState.map((item) =>
                                                item.id === education.id
                                                    ? { ...item, schoolName: e.target.value }
                                                    : item
                                            )
                                        )
                                    }

                                />
                            </>
                        ) : (
                            <><label>School Name: </label> {education.schoolName}</>
                        )
                        }
                    </div>
                    <div className='col'>
                        {education.isEditing ? (
                            <>
                                <label>Title of Study:</label>
                                <input
                                    type="text"
                                    value={education.titleOfStudy}
                                    onChange={(e) =>
                                        setStudyHistory((prevState) =>
                                            prevState.map((item) =>
                                                item.id === education.id
                                                    ? { ...item, titleOfStudy: e.target.value }
                                                    : item
                                            )
                                        )
                                    }
                                />
                            </>
                        ) : (
                            <><label>Title of Study</label> {education.titleOfStudy}</>
                        )}
                    </div>
                    <div className='col'>
                        {education.isEditing ? (
                            <>
                                <label>Date of Study:</label>
                                <input
                                    type="text"
                                    value={education.dateOfStudy}
                                    onChange={(e) =>
                                        setStudyHistory((prevState) =>
                                            prevState.map((item) =>
                                                item.id === education.id
                                                    ? { ...item, dateOfStudy: e.target.value }
                                                    : item
                                            )
                                        )
                                    }
                                />
                            </>
                        ) : (
                            <><label>Date of Study:</label> {education.dateOfStudy}</>
                        )}
                    </div>
                    <div>
                        {education.isEditing ? (
                            <>
                                <button onClick={() => updateEducationEntry(education.id)}>
                                    Update
                                </button>
                                <button onClick={() => deleteEducationEntry(education.id)}>
                                    Delete
                                </button>
                            </>
                        ) : (
                            <button onClick={() => editEducationEntry(education.id)}>Edit</button>
                        )}
                    </div>
                    <hr />
                </div>
            ))}
            <button onClick={() => handleEduEntry()}>Add</button>
        </div>
    )
}