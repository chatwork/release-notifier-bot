import * as child_process from "child_process";

export const execSync = (command: string) => {
    try {
        return child_process.execSync(command).toString();
    } catch(e) {
        console.error(`execSync error. \n${e.stderr.toString()}\n'${command}'`);
        throw e;
    }
};
