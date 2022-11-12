export default function(){
	if (process.client) {
		console.log(localStorage.getItem('access_token'));
	}
};
