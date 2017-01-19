class WelcomeController {

    constructor(UserContext, exampleData) {

        this.UserContext = UserContext;
        this.exampleData = exampleData;

        this.title = "WelcomeController";
        this.message = "Hello from Angular";
    }

    getUserContext() {
        return this.UserContext;
    }
}
WelcomeController.$inject = ['UserContext', 'exampleData'];
export default WelcomeController;