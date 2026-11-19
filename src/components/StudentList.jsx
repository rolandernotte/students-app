import StudentListItem from './StudentListItem';

function StudentList({students}){
    return (
        <ul>
            {
                students.map((student) => (
                    <StudentListItem key={student.id} student={student} />
                ))
            }
        </ul>
    );
}

export default StudentList;