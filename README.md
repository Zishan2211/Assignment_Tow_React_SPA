# React + Vite

Answer The Following Question:-

<!--**** (1) What is JSX, and why is it used? **** -->

ANS: JavaScript XML is a syntax extension for JavaScript that allows developers to write HTML-like markup directly within their JavaScript code.
1.Improved Readability and Maintainability
2.UI and Logic
3.Dynamic
4.Better Error Message


<!--**** (2) What is the difference between State and Props? **** -->

ANS: difference between State and Props in React is that state is managed internally by  the component while props are passed from a parent component.


<!--**** (3) What is the useState hook, and how does it work? **** -->

ANS: The React useState Hook allows us to track state in a function component. useState returns an array with two values the current state and a function to update


<!--**** (4) How can you share state between components in React? **** -->

ANS: Simple, local state sharing between a few closely related components. It ensures a single source of truth for each piece of state.


<!--**** (5) How is event handling done in React? **** -->

ANS:  addEventListener method, you provide an event handler function as a prop to a given React element.React uses a synthetic event system to provide a consistent way to handle events across different browsers. 










This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
