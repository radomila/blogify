# Blogify

Blogify is a full-stack web application, that has been created as a part of Diploma Thesis, which is focusing on web accessibility. 
Blogify enables authorized users to manage blog posts. This involves creation, reading, update and deletion.

Users can be authorized using a sign up form, requiring e-mail address and password, which has to be confirmed.
Otherwise, they can only browse and read posts without being able to create and manage their own. 

Blog posts can be filtered according to their date of creation or searched by their title or content.

## Technology Stack 

Technology stack consists of: 

- __Next.js__: ReactJS framework extending its functionalities, such as server-side rendering or static-site generation.
- __Radix UI__: Library providing a scale of customizable components, emphasizing web accessibility and providing aria labels by default.
- __Tailwind__: CSS framework allowing to create responsive UI adaptable to both desktop and mobile devices.
- __React Hook Form__: Library enabling to create forms with validation.
- __React Query__: Library for fetching and updating server state.
- __TipTap__: Extendable rich-text editor.
- __Firebase__: Utilized for backend development and offering authorization. 
- __Vercel__: Cloud platform ensuring seamless deployment.

## Running the Project

1. Clone the repository: ``git clone``
2. The ``.env_TEMPLATE`` is missing environment variables. Make sure to add all required credentials before using it as a base for your ``.env`` file
3. Install dependencies by running: ``npm install``
4. Run the development server:  ``npm run dev``
5. Open the browser and navigate to ``http://localhost:3000`` 

## Possible Improvements 

- __Themes__: Adding dark theme and allowing users to switch between light and dark mode
- __Pagination__: Implementing pagination for blog posts to improve performance and user experience
- __Google Auth__: Adding Google authentication to allow users to sign in with their Google accounts
- __Image Upload__: Adding different image upload options

## Sources

Some additional icons used in this project come from: https://uxwing.com/

Logo used for this web application come from: https://logoipsum.com/

