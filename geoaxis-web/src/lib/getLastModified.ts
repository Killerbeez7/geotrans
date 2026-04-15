import simpleGit from "simple-git";

const git = simpleGit();

export async function getLastModified(filePath: string): Promise<Date> {
  try {
    const log = await git.log({ file: filePath, n: 1 });
    return log.latest?.date ? new Date(log.latest.date) : new Date();
  } catch {
    return new Date();
  }
}
