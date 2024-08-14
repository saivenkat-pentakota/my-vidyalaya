import React from 'react';
import SchoolForm from './components/SchoolForm';
import SchoolList from './components/SchoolList';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import AttendanceList from './components/AttendanceList';
import AttendanceForm from './components/AttendanceForm';
import ClassForm from './components/ClassForm';
import ClassList from './components/ClassList';


const App = () => {
    return (
        <div>
            <h1>My Vidyalaya</h1>
            <SchoolForm />
            <SchoolList />
            <StudentForm/>
            <StudentList/>
            <ClassForm/>
            <ClassList/>
            <AttendanceList/>
            <AttendanceForm/>
        </div>
    );
};

export default App;
