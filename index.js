child_process.execFileSync("chmod", ["a+x", getX264Path()]);

function getX264Path(...args) {
    return __dirname + "/x264";
};

module.exports = getX264Path;