var child_process = require("child_process");

// We need to do this because npm and yarn aren't setting permissions properly.
//  Also, we need to exec, as fs.chmodSync sets the permissions on other? Not the current user? Wtf...

child_process.execFileSync("chmod", ["a+x", getX264Path()]);

function getX264Path() {
    return __dirname + "/x264";
}

module.exports = getX264Path;
