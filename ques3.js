const student={
    salary:salary,
}

function salary(student)
{
  if(student.salary>500000)
  {
    return "Dream";
  }
  else{
    return "NotDrram";
  }
}
console.log(salary(100000));

