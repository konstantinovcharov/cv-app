import React from 'react'

export default function Experience(props) {
    const {
        employmentHistory,
        editEmploymentEntry,
        updateEmploymentEntry,
        deleteEmploymentEntry,
        setEmploymentHistory,
        handleAddEntry
    } = props;

    

    return (
        <div className='experience'>
            <h1>Work Experience</h1>
            {employmentHistory.map((employment) => (
                <div key={employment.id} >
                    <div className='col'>
                        {employment.isEditing ? (
                            <>
                                <label>Company:</label>
                                <input
                                    type="text"
                                    value={employment.companyName}
                                    onChange={(e) =>
                                        setEmploymentHistory((prevHistory) =>
                                            prevHistory.map((item) =>
                                                item.id === employment.id
                                                    ? { ...item, companyName: e.target.value }
                                                    : item
                                            )
                                        )
                                    }
                                />
                            </>
                        ) : (
                            <><label>Company:</label> {employment.companyName}</>
                        )}
                    </div>
                    <div className='col'>
                        {employment.isEditing ? (
                            <>
                                <label>Position:</label>
                                <input
                                    type="text"
                                    value={employment.positionTitle}
                                    onChange={(e) =>
                                        setEmploymentHistory((prevHistory) =>
                                            prevHistory.map((item) =>
                                                item.id === employment.id
                                                    ? { ...item, positionTitle: e.target.value }
                                                    : item
                                            )
                                        )
                                    }
                                />
                            </>
                        ) : (
                            <><label>Position:</label> {employment.positionTitle}</>
                        )}
                    </div>
                    <div className='col'>
                        {employment.isEditing ? (
                            <>
                                <label>Main Tasks:</label>
                                <input
                                    type="text"
                                    value={employment.mainTasks.join(', ')}
                                    onChange={(e) =>
                                        setEmploymentHistory((prevHistory) =>
                                            prevHistory.map((item) =>
                                                item.id === employment.id
                                                    ? { ...item, mainTasks: e.target.value.split(', ') }
                                                    : item
                                            )
                                        )
                                    }
                                />
                            </>
                        ) : (
                            <>
                                <label>Main Tasks:</label>
                                <ul>
                                    {employment.mainTasks.map((task, index) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    <div className='col'>
                        {employment.isEditing ? (
                            <>
                                <label>Employment Date:</label>
                                <input
                                    type="text"
                                    value={employment.employmentDate}
                                    onChange={(e) =>
                                        setEmploymentHistory((prevHistory) =>
                                            prevHistory.map((item) =>
                                                item.id === employment.id
                                                    ? { ...item, employmentDate: e.target.value }
                                                    : item
                                            )
                                        )
                                    }
                                />
                            </>
                        ) : (
                            <><label>Employment Date:</label> {employment.employmentDate}</>
                        )}
                    </div>
                    <div>
                        {employment.isEditing ? (
                            <>
                                <button className='button-update' onClick={() => updateEmploymentEntry(employment.id)}>
                                    Update
                                </button>
                                <button className='button-delete' onClick={() => deleteEmploymentEntry(employment.id)}>
                                    Delete
                                </button>
                            </>
                        ) : (
                            <button className='button-edit' onClick={() => editEmploymentEntry(employment.id)}>Edit</button>
                        )}
                    </div>
                    <hr />
                </div>
            ))}
            <button className='button-add' onClick={() => handleAddEntry()}>Add</button>
        </div>
    );
}