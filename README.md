# React Router Dom Nested Route Link Issue

This repository demonstrates a problem with nested routes and links in React Router Dom. The links in the nested routes do not work as expected.  The issue is that the links are relative to the nested route instead of the root route. 

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to the about page.
5. Click the "Go to Home" link.  Notice that it stays on the About page instead of going back to Home.

## Solution
The solution involves using `useNavigate` to programmatically change the route, thus avoiding ambiguity over relative pathing. 