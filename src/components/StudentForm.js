import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        dob:'',
        email: '',
        phonenumber: '',
        address: '',
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/students', student);
            alert('Student added successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('There was an error saving the student!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={student.firstName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={student.lastName}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="dob"
                placeholder="date of birth"
                value={student.dob}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={student.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phonenumber"
                placeholder="Phone Number"
                value={student.phonenumber}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={student.address}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;
