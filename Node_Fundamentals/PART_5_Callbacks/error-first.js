const readUserData = (userId, callback) => {
    if(userId <= 0) {

        callback(new Error("Invalid user ID"), null);
        return; // do always
    }
    const user = {id: userId, name: "Rahul", email: "rahunl@xyz.com"};
    
    callback(null, user);
};

//using it
readUserData(1, (err, user) => {
    if(err) {
        console.error("Error:", err.message);
        return;
    }

    console.log("User found:" ,user);
});


readUserData(-1, (err, user) => {
    if (err) {
        console.error("Error:", err.message);
        return;
    }
    console.log("User found:", user);
});
