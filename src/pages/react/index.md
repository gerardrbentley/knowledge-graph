---
path: "/react"
date: "2020-09-21"
title: "React JS"
tags: ['React','Frontend','JS','Web']
excerpt: "Notes on React"
---

React is a Javascript Frontend framework

# Hooks

Goal: Primitive for sharing stateful logic between components and when re-using components.

Caveat: Do this without adding wrappers / services to the component hierarchy

## Rules

- **Don't call Hooks inside loops, conditions, or nested functions**:

    May affect the order in which they are called

- **Only call Hooks from React functions**:

    Call From React Function Components

    Call from custom Hooks

## useState Hook

`const [object, setObject] = useState(object)` 

Calling this in a functional component creates a "state variable" for use in the component. This happens when the component is first rendered, then it is accessed on re-render

Can reference the "stateful" object with the first name in the destructured array (`object` in this case).

Can update the object with the second name in the array (`setObject(object + 1)`).

Same functionality as making a state variable in a class and u sing `this.state.object` and `this.setState({ object: this.state.object + 1})`