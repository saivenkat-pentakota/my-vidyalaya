import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentList.css'; 

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/students');
                setStudents(response.data);
            } catch (error) {
                console.error('There was an error fetching the students!', error);
            }
        };
        fetchStudents();
    }, []);

    return (
        <div className="student-list-container">
            <h2 className="student-list-title">Students List</h2>
            <table className="student-list-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td> 
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.phonenumber}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
