import React, { useState } from 'react';
import axios from 'axios';

const TeacherForm = () => {
    const [teacher, setTeacher] = useState({
        teacher_firstName: '',
        teacher_lastName: '',
        subject:'',
        dob:'',
        email: '',
        phonenumber: '',
        address: '',
    });

    const handleChange = (e) => {
        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/teachers', teacher);
            alert('Teacher added successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('There was an error saving the teacher!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="teacher_firstName"
                placeholder="First Name"
                value={teacher.teacher_firstName}
                onChange={handleChange}
                required
            />
             <input
                type="text"
                name="teacher_lastName"
                placeholder="Last Name"
                value={teacher.teacher_lastName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={teacher.subject}
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
            <button type="submit">Add Teacher</button>
        </form>
    );
};

export default TeacherForm;
