import React, { useState } from 'react';
import axios from 'axios';

const ClassForm = () => {
    const [schoolClass, setClass] = useState({
        class_name: '',
        faculty_name: '',
        student_id:'',
    });

    const handleChange = (e) => {
        setClass({
            ...schoolClass,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/classes', schoolClass);
            alert('class added successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('There was an error saving the class!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="class_name"
                placeholder="Class Name"
                value={schoolClass.class_name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="faculty_name"
                placeholder="Faculty Name"
                value={schoolClass.faculty_name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="student_id"
                placeholder="Student Id"
                value={schoolClass.student_id}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default ClassForm;
