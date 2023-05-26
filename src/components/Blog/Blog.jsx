/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button
            className="btn btn-warning flex mx-auto mb-8 md:mb-0 mt-8 font-bold font-mono"
            onClick={toPdf}
          >
            Download Pdf
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <div className="w-11/12 mx-auto md:mt-12">
          <h2 className="font-bold text-3xl text-center mb-8 font-mono">
            Frequently Asked Questions
          </h2>
          <div className="font-mono">
            {/* 1st questions */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-semibold bg-cyan-100">
                What are the differences between uncontrolled and controlled
                components?
              </div>
              <div className="collapse-content bg-cyan-50">
                <p>
                  In React, controlled components refer to components that have
                  their state and behavior controlled by the parent component.
                  These components rely on props passed down from the parent
                  component to update their state and behavior. Uncontrolled
                  components refer to components that manage their own state
                  internally.
                </p>
              </div>
            </div>
            {/* 2nd questions */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-semibold bg-cyan-100">
                How to validate React props using PropTypes?
              </div>
              <div className="collapse-content bg-cyan-50">
                <p>
                  PropTypes is a feature in React that allows you to validate
                  the data types of props passed to your components. To use
                  PropTypes, you first need to import the module from the
                  'prop-types' package. Then, you can define a PropTypes object
                  in your component and assign it to the 'propTypes' property of
                  the component. The PropTypes object contains keys representing
                  the prop names, and values representing the expected types of
                  the props. You can use PropTypes to validate props passed to
                  your component, and if a prop is not of the expected type, a
                  warning will be displayed in the console. PropTypes can be
                  used for a variety of data types including strings, numbers,
                  booleans, objects, and arrays. PropTypes can also be used to
                  specify that a prop is required by adding the 'isRequired'
                  modifier. Additionally, PropTypes can be used to specify more
                  complex data structures like objects with specific shape and
                  nesting. It's important to note that PropTypes validation is
                  only performed in development mode, so it will not impact
                  performance in production. Overall, PropTypes is a useful tool
                  for catching errors and ensuring that your component receives
                  the expected data types and shapes for its props.
                </p>
              </div>
            </div>
            {/* 3rd questions */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-semibold bg-cyan-100">
                What is the difference between Node.js and Express.js?
              </div>
              <div className="collapse-content bg-cyan-50">
                <p>
                  Node.js is a server-side runtime environment for executing
                  JavaScript code, while Express.js is a framework built on top
                  of Node.js that simplifies the process of building web
                  applications. Node.js provides a platform for running
                  JavaScript code on the server, while Express.js provides a set
                  of tools and abstractions that make it easier to handle HTTP
                  requests, routing, and middleware in Node.js applications. In
                  essence, Node.js is a foundation for building server-side
                  applications, while Express.js is a higher-level tool that
                  simplifies the process of building web applications on top of
                  Node.js.
                </p>
              </div>
            </div>
            {/* 4th questions */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-semibold bg-cyan-100">
                What is a custom hook, and why will you create a custom hook?
              </div>
              <div className="collapse-content bg-cyan-50">
                <p>
                  A custom hook is a JavaScript function that allows you to
                  reuse stateful logic across multiple React components. Custom
                  hooks are created to avoid repeating the same logic in
                  multiple components and to keep the logic separated from the
                  rendering concerns of the components. Custom hooks can be used
                  to encapsulate complex logic, handle side effects, or abstract
                  API calls. Essentially, custom hooks help to keep code
                  organized, reduce duplication, and make it easier to reuse
                  code across multiple components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
