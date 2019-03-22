import {execSync} from "./execSync";

export const getGitCommitId = () => {
    return String(execSync('git rev-parse HEAD')).trim();
};

export const getPRTitle = () => {
    return execSync('git log -1 --pretty=%B').trim();
};
