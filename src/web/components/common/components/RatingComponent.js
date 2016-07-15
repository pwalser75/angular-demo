class RatingComponentController {
	
    constructor() {
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
	controller: RatingComponentController,
	template: '<span>'+
		'<i ng-repeat="i in $ctrl.createRangeArray(1, $ctrl.getStarsFilled())" class="fa fa-star" style="color:#FFC901">'+
		'</i>'+
		'<i ng-repeat="i in $ctrl.createRangeArray($ctrl.getStarsFilled()+1, $ctrl.getStarsMax())" class="fa fa-star-o" style="color:#DDDDDD">'+
		'</i>'+
		'</span>'
};

export default RatingComponent;