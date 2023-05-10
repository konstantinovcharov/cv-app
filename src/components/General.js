import React from 'react';



export default function General(props) {
    const {name, email, phone, setName, setEmail, setPhone, handleSubmit} = props;

    

    

    return (
        <div className='general'>
            <h1>General Component</h1>
            <form className='form-general' onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <button type="submit" className='btn-general'>Submit</button>
            </form>
            

        </div>
    )
}