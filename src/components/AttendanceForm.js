import React, { useState } from 'react';
import axios from 'axios';

const AttendanceForm = () => {
    const [attendance, setAttendance] = useState({
        student_id: '',
        faculty_id: '',
        parent_id:'',
        academic_month: '',
        academic_year: '',
        total_days: '',
        present_days:'',
        absent_days:''
    });

    const handleChange = (e) => {
        setAttendance({
            ...attendance,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/attendance', attendance);
            alert('attendance added successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('There was an error saving the attendance!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                name="student_id"
                placeholder="Student Id"
                value={attendance.student_id}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="faculty_id"
                placeholder="Faculty Id"
                value={attendance.faculty_id}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="parent_id"
                placeholder="Parent Id"
                value={attendance.parent_id}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="academic_month"
                placeholder="Academic Month"
                value={attendance.academic_month}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="academic_year"
                placeholder="Academic Year"
                value={attendance.academic_year}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="total_days"
                placeholder="Total Days"
                value={attendance.total_days}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="present_days"
                placeholder="Present Days"
                value={attendance.present_days}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="absent_days"
                placeholder="Absent Days"
                value={attendance.absent_days}
                onChange={handleChange}
                required
            />
            
            <button type="submit">Add Attendance</button>
        </form>
    );
};

export default AttendanceForm;
