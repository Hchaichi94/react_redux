# React-Redux

React:
react is a library used to build user interfaces.

Redux:
redux is a library for managing state in a predictable way in JavaScript applications.

React-Redux:
react-redux is a library that provides bindings to use React and Redux together in an application.

3 core concepts:

- a store that holds the state of your application.
- an action that describes the changes in the state of the application.
- a reducer which actually carries out the state transition depending on the action.

3 principles:

First:
- "the state of your whole application is stored in an object tree within a single store".
==> maintain ou application state in a single object which would be managed by Redux store

Second:
- "the only way to change the state is to emit ana action,an object describing what happened".
==> to update the state of your app,you need to let Redux know that with an action, not allowed to directly update the state object.

Third:
- "to specify how state tree is tranformed by actions,you write pure reducers".
==> Reducer- (previousState,actions)=>newState



