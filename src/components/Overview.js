import React from 'react'

export default function Overview(props) {
    const { generalinfo, handleEdit, handleChange, editStatePS, handleUpdate } = props;
    return (
        <>
            <header>
                <h1>Curriculum Vitae</h1>
            </header>
            <section>
                <h2>Personal Information</h2>
                <div className="row">
                    <div className="col">
                        <label htmlFor="name">Name</label>
                        {editStatePS ? (
                            <input type="text" name="cvName" value={generalinfo.cvName} onChange={(e) => handleChange(e)} />
                        ) : (
                            <div>{!generalinfo.cvName ? "John Doe" : generalinfo.cvName}</div>
                        )}
                    </div>
                    <div className="col">
                        <label htmlFor="email">Email</label>
                        {editStatePS ? (
                            <input type="email" name="cvEmail" value={generalinfo.cvEmail} onChange={(e) => handleChange(e)} />
                        ) : (
                            <div>{!generalinfo.cvEmail ? "johndoe@gmail.com" : generalinfo.cvEmail}</div>
                        )}
                    </div>
                    <div className="col">
                        <label htmlFor="phone">Phone</label>
                        {editStatePS ? (
                            <input type="tel" name="cvPhone" value={generalinfo.cvPhone} onChange={(e) => handleChange(e)} />
                        ) : (
                            <div>{generalinfo.cvPhone}</div>
                        )}
                    </div>
                </div>
                <button className='button-edit' onClick={handleEdit}>Edit</button>
                <button className='button-update' onClick={handleUpdate}>Update</button>
            </section>
            <section>
                <h2>Work Experience</h2>
                <div className="row">
                    <div className="col">
                        <label for="company">Company Name</label>
                        <div>Phone</div>
                    </div>
                    <div className="col">
                        <label for="position">Position Title</label>
                        <div>Phone</div>
                    </div>
                    <div className="col">
                        <label for="tasks">Main Tasks</label>
                        <div>Phone</div>
                    </div>
                    <div className="col">
                        <label for="date">Date of Employment</label>
                        <div>Phone</div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Education</h2>
                <div className="row">
                    <div className="col">
                        <label for="school">School Name</label>
                        <div>Phone</div>
                    </div>
                    <div className="col">
                        <label for="title">Title of Study</label>
                        <div>Phone</div>
                    </div>
                    <div className='col'>
                        <label for="title">Title of Study</label>
                        <div>Phone</div>
                    </div>
                </div>
            </section>
        </>
    )
}