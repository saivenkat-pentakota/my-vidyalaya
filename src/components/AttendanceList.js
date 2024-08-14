import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendanceList = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const response = await axios.get('http://localhost:8080/attendance');
                setAttendance(response.data);
            } catch (error) {
                console.error('There was an error fetching the attendance!', error);
            }
        };
        fetchAttendance();
    }, []);

    return (
        <div>
            <h2>Attendance List</h2>
            <ul>
                {attendance.map((attendance) => (
                    <li key={attendance.id}>
                        {attendance.student_id} {attendance.faculty_id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AttendanceList;
