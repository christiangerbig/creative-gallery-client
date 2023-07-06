export type MenuItem = string | null;

// ----- Request -----
export interface Request {
  _id?: string;
  email: string;
  subject: string;
  message: string;
}

// ----- Projects -----
export interface ProjectItem {
  projectName: string;
  projectPicturePath1: string;
  projectPicturePath2: string;
  projectDescription: string;
  gitHubClientPath: string;
  gitHubServerPath: string;
}
