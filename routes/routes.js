
var path = require('path');
var spawn = require('child_process').spawn;
var shelljs = require('shelljs');


function showHomePage(req, res) {
    res.render('index');
}


function deploy(req, res) {
    var repo = req.body.repo;
    var cmd = req.body.cmd;
    var cwd = shelljs.pwd() + "/";
    var script = cwd + 'deploy.sh' + " " + repo + " " + cmd;

    // has to run in bash !!
    // because auf subsitution ${...} inside deploy.sh
    // http://stackoverflow.com/questions/20323738/echo-syntax-error-bad-substitution
    var options = {
        cwd: cwd,
        shell: '/bin/bash'
    };
    var deploySh = shelljs.exec(script, options, function(code, stdout, stderr) {
        res.json({
            code:code,
            stdout:stdout,
            stderr:stderr});
    });
/*
    var deploySh = spawn(
            script, 
            [ repo, cmd ],
            {
                cwd: cwd
            } 
        );
        */    

}


module.exports = function(app) {
    app.get('/', showHomePage);

    app.post('/deploy', deploy); 
    
}