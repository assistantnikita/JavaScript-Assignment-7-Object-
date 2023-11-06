const N=2;
const myobj={
    id:12,
    houseno:146,
};
function mmultiplyer(N,myobj)
{
    myobj.id*=N;
    myobj.houseno*=N;

}
mmultiplyer(N,myobj);
console.log(myobj);
