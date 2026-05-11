// EXTENDING EE PROPERTIES IN CLASS ------------

import {EventEmitter} from 'events';

class UserService extends EventEmitter {
    constructor() {
        super();
        this.users = [];
    }

    register(name, email) {
        const exists = this.users.find(u => u.email === email);

        if(exists) {
            this.emit("error:duplicate", {email});
            return null;
        }

        const newUser = {
            id: this.users.length + 1,
            name,
            email,
            registeredAt: new Date().toISOString(),
        };

        this.users.push(newUser);

        this.emit("user:registered", newUser);
    }

    login(email) {
        const user = this.users.find(u => u.email === email);

        if(!user) {
            this.emit("user:login:falied", {email});
            return;
        }

        this.emit("user:login:success", user);
    }

    getAll() {
        return this.users;
    }

}

// usage -------------
const userService = new UserService();

userService.on("user:registered", ({user}) => {
    console.log(`Welcome user registered: ${user.name} (${user.email})`);
    console.log(`   Welcome email sent to ${user.email}`);
});

userService.on("user:login:success", ({user}) => {
    console.log(`🔓 ${user.name} logged in successfully`);
});

userService.on("user:login:failed", ({ email }) => {
    console.log(`🔒 Login failed — no user found with email: ${email}`);
});

userService.on("error:duplicate", ({ email }) => {
    console.log(`⚠️  Registration failed — ${email} already exists`);
});

// using ---------
userService.register("Rahul Sharma", "rahul@example.com");
userService.register("Priya Patel", "priya@example.com");
userService.register("Rahul Sharma", "rahul@example.com");