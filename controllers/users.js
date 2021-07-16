import { v4 as uuidv4 } from 'uuid';

let users=[
    {
        "firstName":"john",
        "lastName":"Doe",
        "age":"25"
    }
]
export const getUsers = (req,res)=>{
    console.log(users);
    res.send(users)
}
export const postUser = (req,res) => {
    var user=req.body
    users.push({...user, id:uuidv4()});
    res.send('post reached');
}
export const getById = (req,res) => {
    const { id }= req.params;
    const foundUSer = users.find(( user )=> user.id === id );
    res.send(foundUSer);
}
export const deleteUser = (req,res) => {
    const {id}=req.params;
    users = users.filter((user)=>user.id !== id);
    res.send(`user with ${id} deleted`);
}
export const patchUser = (req,res) => {
    const {id}=req.params;
    const {firstName,lastName,age}=req.body;
    const user=users.find((user)=>user.id===id);
    console.log('first name',firstName);
    console.log('last name',lastName);
    console.log('age',age);

    if (firstName) user.firstName=firstName;

    if (lastName)user.lastName=lastName;

    if(age) user.age=age;
    res.send(`user with ${id} had been updated`);
}





