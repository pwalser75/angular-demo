class UserContext {

    constructor() {

    }

    login() {
        this.user = {
            name: "Test User"
        }
    }

    logout() {
        this.user = null;
    }

    getUser() {
        return this.user;
    }
}

export default UserContext;