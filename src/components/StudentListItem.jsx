function StudentListItem({student}){
    return <li>{student.lastName}, {student.firstName}</li>;
}

export default StudentListItem;