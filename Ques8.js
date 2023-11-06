const obj1={
  name:"Utkarsh",
  id:2,
};

const obj2={
    name:"Singh",
    id:3,
};

function compare(obj1,obj2)
{
    if(obj1===obj2)
    {
        return "ture";

    }
    else{
        return "false";
    }
}
console.log(compare(obj1,obj2));
