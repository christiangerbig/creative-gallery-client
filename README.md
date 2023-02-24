# Creative Gallery

## Description

This is my portfolio to present my projects and another exercise to apply my React Redux knowledge.

## User Stories

- **Home:** Logo + Title
- **About:** Personal details about me
- **Projects:** Presentation of my projects
- **Contact:** Different ways how to contact me, also includes a form to send me a message
- **Language selection:** As a user/anon I can select the language of all texts in the app. German or English
- **No internet connection:** As a user/anon I will be informed by a modal if there is no internet connection
- **404:** As an user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

# Client / Frontend

## React Router Routes (React App)

| Path        | Component                  | Permissions      | Behavior                       |
| ----------- | -------------------------- | ---------------- | ------------------------------ |
| `/`         | SplashPage, NavBar, Footer | public `<Route>` | Home page, show title and logo |
| `/about`    | AboutPage                  | public `<Route>` | Show personal details          |
| `/projects` | ProjectsPage               | public `<Route>` | Show my projects               |
| `/contact`  | ContactPage                | public `<Route>` | Show my contact data           |

## Components

- ContactForm
- ContactLink
- ErrorMessage
- ErrorModal
- ExternalLink
- SelectLanguage
- Footer
- HeaderText
- HomeLogo
- NavMenu
- ModalBody
- NavBar
- NavBarLogo
- NavToggler
- NavView
- NavDesktopViewItems
- OfflineModal
- Modals
- ProjectDetails

## Views

- About
- Contact
- Home
- NotFound
- Projects
- TechStack

## Custom hooks

- useCheckBreakpoint(breakpoint)
- useOnlineStatus()
- useProjectsData()
- useRequest()

### useCheckBreakpoint hook

The custom hook useCheckBreakpoint() has the parameter breakpoint which is a number and it returns a boolean value. True if the browser window width >= the breakpoint value otherwise false.

### useOnlineStatus hook

The custom hook useOnlineStatus() needs no parameters and returns a boolean value. True if there is an online connection otherwise false.

### useProjectsData hook

The custom hook useProjectsData() needs no parameters and returns an array of objects with this format:

```javascript
[
  {
    projectName: String;
    projectPicturePath: String;
    projectVideoPath: String;
    projectDescription: String;
    deployedPath: String;
    gitHubClientPath: String;
    gitHubServerPath: String;
  },
  ...
]

```

### useRequest hook

The custom hook useRequest needs no parameters and return the method createRequest(newRequest, callbackFunction) to send a request to the database.

#### createRequest() method

The custom method createRequest() needs two parameters and returns nothing:

- newRequest: an object in this format:

```javascript
{
  email: String;
  subject: String;
  message: String;
}
```

- callBackFunction: It is called after the successful sending of the request to the database.

## External API

- API I18n for language detection/selection

# Server / Backend

## Models

Request model

```javascript
{
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}
```

## API Endpoints (backend routes)

| HTTP Method | URL               | Request Body            | Success status | Error Status | Description |
| ----------- | ----------------- | ----------------------- | -------------- | ------------ | ----------- |
| POST        | `/request/create` | {email,subject,message} | 200            | 500          | Create a    |
|             |                   |                         |                |              | request if  |
|             |                   |                         |                |              | form fields |
|             |                   |                         |                |              | not empty   |

## Links

### Git

[Client repository Link](https://github.com/christiangerbig/creative-gallery-client)

[Server repository Link](https://github.com/christiangerbig/creative-gallery-server)

### Heroku

[Deployed App Link](https://creativegallery.herokuapp.com/)
