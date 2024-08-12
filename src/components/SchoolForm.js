import React, { useState } from 'react';
import axios from 'axios';

const SchoolForm = () => {
    const [school, setSchool] = useState({
        school_firstname: '',
        school_lastName: '',
        udisecode: '',
        email: '',
        phonenumber: '',
        address: '',
    });

    const handleChange = (e) => {
        setSchool({
            ...school,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/schools', school);
            alert('School added successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('There was an error saving the school!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="school_firstname"
                placeholder="First Name"
                value={school.school_firstname}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="school_lastName"
                placeholder="Last Name"
                value={school.school_lastName}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="udlisecode"
                placeholder="U-DISE Code"
                value={school.udlisecode}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={school.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phonenumber"
                placeholder="Phone Number"
                value={school.phonenumber}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={school.address}
                onChange={handleChange}
                required
            />
            <button type="submit">Add School</button>
        </form>
    );
};

export default SchoolForm;
