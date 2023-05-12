import React from 'react';



export default function General(props) {
    const {
        generalinfo,
        handleEdit,
        handleChange,
        editStatePS,
        handleUpdate
    } = props;    

    return (
        <section className='general-component'>
                <h1>Personal Information</h1>
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
    )
}