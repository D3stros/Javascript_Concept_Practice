const closure = () => {
	let i = 1;
    var result = function() {
        console.log(i);
    }();
    return result;
}