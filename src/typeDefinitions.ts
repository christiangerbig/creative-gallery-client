export type MenuItem = string | null;

// ----- Request -----
export interface Request {
  email: string;
  subject: string;
  message: string;
}

// ----- Projects -----
export interface ProjectItem {
  projectName: string;
  projectPicturePath: string;
  projectVideoPath: string;
  projectDescription: string;
  deployedPath: string;
  gitHubClientPath: string;
  gitHubServerPath: string;
}
