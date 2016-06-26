

function setStatus(data) {
	$('#stdout').html(data.stdout.replace(/\n/g, "<br>"));
	$('#stderr').html(data.stderr.replace(/\n/g, "<br>"));
}




$('#deploy').click(function(ev) {
	ev.preventDefault();
	var repo = $('#repo').val();
	var cmd = $('#cmd').val();
	setStatus({stdout:"", stderr:""});
	var data = 
        {   repo: repo,
			cmd: '"' + cmd + '"' };
	$.ajax({
		type:"POST",
		url:"/deploy",
		data: JSON.stringify(data),
	    contentType: 'application/json; charset=utf-8',
        success: function (data) {
            setStatus(data);
        },
        error: function () {
            alert("error");
        }	
	});
});



