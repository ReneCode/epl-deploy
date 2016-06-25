
function displayResult(data) {
	console.log(data);
}



$('#deploy').click(function(ev) {
	ev.preventDefault();
	var repo = $('#repo').val();
	var cmd = $('#cmd').val();

	var data = 
        {   repo: repo,
			cmd: cmd };
	$.ajax({
		type:"POST",
		url:"/deploy",
		data: JSON.stringify(data),
	    contentType: 'application/json; charset=utf-8',
        success: function (data) {
            displayResult(data);
        },
        error: function () {
            alert("error");
        }	
	});
});



