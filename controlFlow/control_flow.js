let userRole="admin";
let accessLevel;
if(userRole === "admin"){
    accessLevel="Full access granted";
} else if (userRole === "manger"){
    accessLevel ="Limited access granted";
} else {
    accessLevel="no access granted";
}
console.log("Access level is:", accessLevel);

//Step 3
let isLoggedIn = true;
let userMessage;
if(isLoggedIn === true){
    if(userRole === "admin"){
        userMessage="Welcome, Admin!";
    }
    else{
        userMessage="WelCome, user!";
    }
}
else{
    userMessage="Please log in to access the system.";
}
console.log("User Message:", userMessage);

//Step 4
let userType="subscriber";
let userCategory;
switch(userType){
    case "admin":
        userCategory="admin";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break; 
    default:
        userCategory="Unkown";
}
console.log("user catagory: ", userCategory);

//step 5
let isAuthenticated =true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);
