## Code Splitting with React and React Router

It’s 2019. Your users shouldn’t have to download your entire app when all they need is a piece of it. If a user is creating a new post, it doesn’t make sense to have them download all the code for the Registration view. If a user is registering, they don’t need the huge rich text editor your app needs on the Settings view.

### Split at the route level

With `React.lazy`, it’ll assume that the dynamic import will resolve to a module that exports a React component. What that means is that you don’t have to render the lazily loaded component yourself, instead, you render what `React.lazy` returns you and it’ll take care of rendering the actual component. What you do have to worry about though, is what you want to show when the module is still loading. To do this, you can use React’s `Suspense` component giving it a `fallback` prop which is a React element.

`Suspense` can take in multiple, lazily loaded components while still only rendering one `Loading` element.

### Build and run

```
$ yarn build
$ yarn global add serve
$ serve -s build
```
