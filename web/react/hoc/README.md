## Prof of Concept 
- HOC (Higher Order Components)
- [Redux](https://redux.js.org/)
- [Recompose](https://github.com/acdlite/recompose)
- [Ramda](https://ramdajs.com/)

HOC Is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se.
They are a pattern that emerges from React’s compositional nature.

Concretely, a higher-order component is a function that takes a component and returns a new component.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
In this example: `src/components/CounterHOC`, I use the concept of HOC together with `recompose`. The idea is not only to understand how HOC works, but also the recompose library, which was probably very useful for implementing states before hooks existed.

###### TODO: 

- [x] HOC
  - [ ] with redux  
- [x] redux
- [ ] ramda




React + TypeScript + Vite
