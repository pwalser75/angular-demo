export default class ApplicationController {

	static $inject=['$state'];

    constructor($state) {
        this.state = $state;
		this.message="Hello from Angular";
    }
}