console.log("hello world !!!");
function fetchData(url){
	return new Promise(function(resolve, reject){
		console.log(123);
		resolve("happy");
	})
}
