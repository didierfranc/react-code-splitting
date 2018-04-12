# react-code-splitting ✂️

You're working on a great app powered by React, bundled with Webpack and your bundle size increases...

You're in the right place to solve this modern JS app nightmare.

## Prerequisites

- You're using [Webpack 2 or newer](https://webpack.js.org/)
- You've polyfilled ***Promise*** to support old browsers

## How-to

### Without code splitting

`<Login />` + `<Home />` are loaded at the first start

```jsx
import Login from './Login'
import Home from './Home'

const App = ({ user }) => (
  <Body>
    {user.loggedIn ? <Route path="/" component={Home} /> : <Redirect to="/login" />}
    <Route path="/login" component={Login} />
  </Body>
)
```

### With code splitting

Not logged in? `<Login />` component is the only one loaded.

`<Home />` will be loaded when the user is be logged in.

Use `componentProps` to pass props to the lazy loaded component.

```jsx
import Async from 'react-code-splitting'

import Login from './Login'
const Home = () => <Async load={import('./Home')} />
const LostPassword = props => <Async load={import('./LostPassword')} componentProps={props}/>

const App = ({ user }) => (
  <Body>
    {user.loggedIn ? <Route path="/" component={Home} /> : <Redirect to="/login" />}
    <Route path="/login" component={Login} />
    <Route path="/lostpassword" component={LostPassword} />
  </Body>
)
```

You can view this snippet in context [here](https://github.com/didierfranc/redux-react-starter/blob/master/src/components/App.js#L12) !

#### Promise-returning functions

You may also pass in a function that returns the promise when invoked.  This is useful when you have code like

```jsx
const MyComponent = import('./ReallyHeavyComponent');

/* conditional code ... */ <Async load={MyComponent} />
```
where you might end up loading a heavy bundle even if you don't need it after all.

Instead, you may wrap the `import` in a function like

```jsx
const MyComponent = () => import('./ReallyHeavyComponent');
/* conditional code ... */ <Async load={MyComponent} />
```

to defer that load up to the very last moment.

## More

- Why and how it works : [Straightforward code splitting with React and Webpack](https://medium.com/@DidierFranc/straightforward-code-splitting-with-react-and-webpack-4b94c28f6c3f)
- [Webpack examples](https://github.com/webpack/webpack/tree/master/examples)

<img src="https://raw.githubusercontent.com/didierfranc/donate/master/qr.png" width="100" height="100">

