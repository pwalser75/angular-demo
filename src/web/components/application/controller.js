class ApplicationController {

    constructor(UserContext) {
        this.UserContext = UserContext;
    }

    getUserContext() {
        return this.UserContext;
    }
}
ApplicationController.$inject = ['UserContext'];
export default ApplicationController;