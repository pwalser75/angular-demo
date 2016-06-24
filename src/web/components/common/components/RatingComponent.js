class RatingComponentController {
	
    constructor() {
		console.log("Created RatingComponentController");
    }
	
	getStarsMax() {
		return 10;
	}
	
	getStarsFilled() {
		return Math.round(this.getStarsMax()*this.value/this.max);
	}
	
	createRangeArray(min, max) {
		var result=[];
		for (var i=min; i<=max; i++){
			result.push(i);
		}
		return result;
	}
}
const RatingComponent = {
	restrict: 'E',
	bindings: {
		value: '<',
		max: '<'
	},
	template: '<span>'+
		'<span ng-repeat="i in $ctrl.createRangeArray(1, $ctrl.getStarsFilled())" class="glyphicon glyphicon-star" style="color:#FFC901">'+
		'</span>'+
		'<span ng-repeat="i in $ctrl.createRangeArray($ctrl.getStarsFilled()+1, $ctrl.getStarsMax())" class="glyphicon glyphicon-star-empty" style="color:#DDDDDD">'+
		'</span>'+
		'</span>',
	controller: RatingComponentController
};

export default RatingComponent;