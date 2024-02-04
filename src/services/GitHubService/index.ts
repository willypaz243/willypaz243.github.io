export class GitProject {
  name!: string;
  description!: string;
  language!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static fromJson(json: any) {
    const project = new GitProject();
    project.name = json.name;
    project.description = json.description;
    project.language = json.language;
    return project;
  }
}

export class GitHubService {
  public static async getMyDeployedRepos(): Promise<GitProject[]> {
    const url = process.env.GIT_URL as string;
    const data = await fetch(url).then((res) => res.json());
    return data.items.map(GitProject.fromJson);
  }
}
