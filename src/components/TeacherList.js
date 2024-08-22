import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TeacherList.css'; 

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/teachers');
                setTeachers(response.data);
            } catch (error) {
                console.error('There was an error fetching the teachers!', error);
            }
        };
        fetchTeachers();
    }, []);

    return (
        <div className="teacher-list-container">
            <h2 className="teacher-list-title">Teachers List</h2>
            <table className="teacher-list-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>subject</th>
                        <th>dob</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher, index) => (
                        <tr key={teacher.id}>
                            <td>{index + 1}</td> 
                            <td>{teacher.firstName}</td>
                            <td>{teacher.lastName}</td>
                            <td>{teacher.subject}</td>
                            <td>{teacher.dob}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.phonenumber}</td>
                            <td>{teacher.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherList;
