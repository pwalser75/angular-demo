const FormComponent = {
    restrict: 'E',
    bindings: {
        inputname: '@',
        label: '@',
        hint: '@'
    },
    template: ['$element', '$attrs', function ($element, $attrs) {
        return '<div class="input-group validation" ng-class="{mandatory: form.' + $attrs.inputname + '.$error.required, error: form.' + $attrs.inputname + '.$invalid && form.' + $attrs.inputname + '.$dirty}">' +
            '<label>' + $attrs.label + '</label>' +
            '<input name="' + $attrs.inputname + '" class="widget" type="text" ng-model="ctrl.' + $attrs.inputname + '" placeholder="' + $attrs.hint + '" ' +
            'ng-minlength="3" ng-maxlength="20" required/>' +
            '<span ng-messages="form.' + $attrs.inputname + '.$error" ng-show="form.' + $attrs.inputname + '.$dirty">' +
            '	<span ng-message="required">' + $attrs.label + ' is required</span>' +
            '	<span ng-message="minlength">' + $attrs.label + ' is too short.</span>' +
            '	<span ng-message="maxlength">' + $attrs.label + ' is too long.</span>' +
            '</span>' +
            '</div>'
    }]
};

export default FormComponent;