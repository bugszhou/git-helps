var execa = require("execa");
function queryLatestTag(params) {
    var command = "git describe --tags --abbrev=0 " + ((params === null || params === void 0 ? void 0 : params.match) ? "--match " + (params === null || params === void 0 ? void 0 : params.match) : "");
    var value = execa.commandSync(command);
    return value.stdout;
}

export { queryLatestTag };
//# sourceMappingURL=git-helps.es.js.map
