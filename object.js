//Single-ton object
const user = new Object(); 
console.log(user);
const user2 = {

};

user2.id = 123,
user2.name = "Pranali",
user2.city = "Jath",
user2.Islogin = true;
console.log(user2);
 //non single-ton object

 //nested object
 const regUser = {
    email : "abc@gmail.com",
    user1 : {
        lastName : "Sawant",
        age : 21
    }
 };
 console.log(regUser.user1.lastName);
