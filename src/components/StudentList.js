import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Students List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.firstName} {student.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
