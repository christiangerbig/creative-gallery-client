# Creative Gallery

## Description

This is my portfolio to present my projects and another exercise to apply my React Redux knowledge.


## User Stories

-  **Home:** Logo + Title
-  **About:** Personal details about me 
-  **Projects:** Presentation of my projects
-  **Contact:** Different ways how to contact me, also includes a form to send me a message
-  **404:** As an user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions | Behavior                                                     |
| --------------- | ----------------| ----------- | -----------------|
| `/`                       | SplashPage, NavBar, Footer     | public `<Route>` | Home page, show title and logo  |            
| `/about`                  | AboutPage                      | public `<Route>` | Show personal details           |
| `/projects`               | ProjectsPage                   | public `<Route>` | Show my projects                |
| `/contact`                | ContactPage                    | public `<Route>` | Show my contact data            |

## Components

- ContactForm
- ContactLink
- ErrorMessageOutput
- ErrorModal
- ExternalLink
- Footer
- HeaderText
- Logo
- Menu
- NavBar
- NavBarLogo
- NavDesktopViewItems
- ProjectDetails

## Views

- About
- Contact
- Home
- PageNotFound
- Projects
- TechStack


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

| HTTP Method | URL                     | Request Body                 | Success status | Error Status | Description                    |
| ------ | ------------- | ------------------ | --------- | ------- | --------------- |
| POST        | `/request/create`       | {email, subject, message}    | 200            | 500          | Create a request if form       ||             |                         |                              |                |              | fields are not empty           |


## Links

### Git

[Client repository Link](https://github.com/christiangerbig/creative-gallery-client)

[Server repository Link](https://github.com/christiangerbig/creative-gallery-server)

### Heroku

[Deployed App Link](https://creativegallery.herokuapp.com/)