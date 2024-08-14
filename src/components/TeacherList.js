import React, { useEffect, useState } from 'react';
import axios from 'axios';

const   TeacherList = () => {
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
        <div>
            <h2>Teachers List</h2>
            <ul>
                {teachers.map((teacher) => (
                    <li key={teacher.id}>
                        {teacher.teacher_firstname} {teacher.teacher_lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherList;
