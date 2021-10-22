const execa = require("execa");

// git describe --tags --abbrev=0 --match "v*-testing"

interface IQueryLatestTagParams {
  /**
   * filter string(筛选字符串)：v*-testing
   */
  match?: string;
}

export default function queryLatestTag(params?: IQueryLatestTagParams) {
  const command = `git describe --tags --abbrev=0 ${
    params?.match ? `--match ${params?.match}` : ""
  }`;
  const value = execa.commandSync(command);

  return value.stdout;
}
