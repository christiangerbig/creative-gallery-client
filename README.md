# Creative Gallery

<br>

## Description

This is my portfolio to show my projects.

## User Stories

-  **Home:** Logo + Title
-  **About** Personal details about me 
-  **Projects** Presentation of my projects
-  **Contact** Different ways how to contact me, also includes a form to send me a message
-  **404:** As an user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

## Backlog

<br>

# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions | Behavior                                                     |
| ------------------------- | -------------------------------| ---------------- | --------------------------------|
| `/`                       | SplashPage, NavBar, Footer     | public `<Route>` | Home page, show itle and logo   |            
| `/about`                  | AboutPage, NavBar, Footer      | public `<Route>` | Show personal details           |
| `/projects`               | ProjectsPage, NavBar, Footer   | public `<Route>` | Show my projects                |
| `/contact`                | ContactPage, NavBar, Footer    | public `<Route>` | Show my contact data            |

## Components

- Home
- NavBar
- Footer
- About
- Projects
- Contact

## Services

- External API
  - API for Message

<br>

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

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | -------------------------- |
| POST        | `/request`                  | {email, subject, message}    | 200            | 500          | Checks if fields not empty |

<br>

## Links

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/christiangerbig/creative-gallery-client)

[Server repository Link](https://github.com/christiangerbig/creative-gallery-server)

[Deployed App Link](https://creativegallery.herokuapp.com/)