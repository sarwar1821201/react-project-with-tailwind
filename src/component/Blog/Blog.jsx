import React from 'react';

const Blog = () => {
    return (
        <div className='text-center text-2xl'>

<h2>When should you use context API?</h2>
            <p>Context API is a feature provided by React that allows sharing data between components without having to pass props through every level of the component tree.

We should consider using Context API when you have data that needs to be accessed by multiple components that are not directly related to each other in the component hierarchy. Context API can simplify your code and make it more readable by reducing the number of props that need to be passed down through the component tree.

However, it's important to note that using Context API for all data sharing can make the code more complex and harder to understand, so it's recommended to use it sparingly and only when it provides clear benefits.</p>

    <h2>What is a custom hook?</h2>
    <p>In React, a custom hook is a JavaScript function that allows you to reuse logic across different components in a simple and organized way. Custom hooks are created by extracting stateful logic from a component and moving it into a reusable function.

Custom hooks typically start with the word "use" and use other hooks provided by React (such as useState, useEffect, useContext, etc.) as building blocks to create new, reusable functionality.

For example, if you find yourself using a combination of useState and useEffect in multiple components to handle a specific behavior (such as fetching data from an API), you can create a custom hook that encapsulates this logic and reuse it across multiple components.</p>

  <h2>What is useRef?</h2>
    <p>useRef is a hook provided by React that allows you to create a mutable object that persists for the lifetime of a component. It returns a ref object that you can attach to a DOM element or any other value that needs to be stored and accessed over time.

Unlike state variables created using useState, changes to a ref object do not trigger a re-render of the component. This makes it useful for storing mutable values that do not affect the visual appearance of the component.</p>

<h2>What is useMemo?</h2>
<p>useMemo is a hook provided by React that allows you to memoize the result of a function call and cache it for reuse. It is useful for optimizing performance by avoiding unnecessary re-computation of expensive functions.

useMemo takes two arguments: the first argument is a function that returns the memoized value, and the second argument is an array of dependencies that triggers the re-calculation of the memoized value whenever any of the dependencies change</p>
            
        </div>
    );
};

export default Blog;