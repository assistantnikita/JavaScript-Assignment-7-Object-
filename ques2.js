function deleteRollNo(obj, name, rollno) {
    obj[name] = rollno; 
    const isDeleted = delete obj.rollno;
    return isDeleted;
}

const myObject = {}; 
const name = "Utkarsh";
const rollno = 129;

const isDeleted = deleteRollNo(myObject, name, rollno);

if (isDeleted) {
    console.log("True");
} else {
    console.log("False");
}
