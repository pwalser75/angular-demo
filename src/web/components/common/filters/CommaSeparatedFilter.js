export default function commaSeparatedFilter () {
	
	return function(text) {
		if (text){
			return text.join(", ");
		}
		return '';
	}
}