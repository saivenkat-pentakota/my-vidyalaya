import React from 'react';
import SchoolForm from './components/SchoolForm';
import SchoolList from './components/SchoolList';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
    return (
        <div>
            <h1>My Vidyalaya</h1>
            <SchoolForm />
            <SchoolList />
            <StudentForm/>
            <StudentList/>
        </div>
    );
};

export default App;
