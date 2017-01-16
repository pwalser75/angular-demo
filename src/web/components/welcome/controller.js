class WelcomeController {

    constructor(UserContext) {
        this.UserContext = UserContext;

        this.title = "WelcomeController";
        this.message = "Hello from Angular";
        this.data = [
            {
                title: "First",
                description: "This is the first item"
            },
            {
                title: "Second",
                description: "This is the second item"
            },
            {
                title: "Third",
                description: "This is the third item"
            }
        ];
    }

    getUserContext() {
        return this.UserContext;
    }
}
WelcomeController.$inject = ['UserContext'];
export default WelcomeController;