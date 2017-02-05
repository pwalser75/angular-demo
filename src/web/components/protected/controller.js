class ProtectedController {

    constructor(protectedService, data) {
        this.protectedService = protectedService;
        this.data = data;
    }
}
ProtectedController.$inject = ['ProtectedService', 'data'];
export default ProtectedController;