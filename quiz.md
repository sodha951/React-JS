  1. Where does React put all of the elements I create in JSX when I call `root.render()`?

  All the elements I render get put inside the div with the id of "root"(or whatever other element I might select when calling createRoot)

  2. What would show up in my console if I were to run this line of code:
  ```
  console.log(<h1>Hello World!</h1>)
  ```
  An object! Unlike creating an HTML element in vanilla DOM js, what gets created from the JSX we have in our React code is a plain JS object that React will use to fill in the view.

  3. What's wrong with this code:
  ```
  root.render(
    <section>
      <h1>Hii</h1>
      <p>This my mobile!</p>
    </section>
  )
  ```
  You can only render 1 parent element at a time.That parent element can have as many children elements as you want.

  4. What does it mean for something to be "declarative" instead of "imperative"?
  *Imperative* means we need to give specific step-by-step instructions on accomplish a task.
  *Declarative* means we can write our code to simply describe what should show up on the page and allow the (React, e.g.) to handle the details on *how* to put those things on the page.


  5. What does it mean for something to be "composable"?
  We have small pieces that we can put together to make something larger or greater that the individual pieces of code

  5. What is React Component ?
  React component is a function that returns React elements. React element is a react version of what we see in the DOM.you can think of it kind of like the react version of an HTML element and because jsx looks so similar to HTML elements we call them react elements.

  When we returning react elements like div,header etc. first is turning the jsx syntax into calls to react.createElement and then createElement function is turning them into javascript objects then react is able to interpret and turn into real dom nodes under the hood.

  6. What is wrong with this code?
  ```
  function MyComponent() {
    return (
      <small>I'm tiny text!</small>
    )
  }
  ```

  7. What is wrong with this code?
  ```
    function Header() {
      return (
        <header>
          <img />
        </header>
      )
    }

    export default Header;
  ```  

  8. What do props help us accomplish?
  Make a component more reusable.when we pass props into a component it could be data that actually gets displayed as a part of that component.it could be like metadata that you are passing into the component in a way configures it to act a certain way either it helps us make any component that we create more reusable.so that we can keep our code keep as dry as possible.

  8. How do you pass a prop into a component?
  <MyAwesomeHeader title={}>
  <img src={props.img} alt="" />

  9. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? (e.g. <div blahblahblah={true}>) why or why not?
  No, because the jsx we can use to describe native DOM elements will be turned into REAL DOM elements by React.And real DOM elements only have the properties/attributes specified in the HTML specification.(which doesn't include properties like `blahblahblah`)

  10. How do I receive props in a component?
  function Navbar(props) {
    return(
      <header>
          <img src={props.img} />
      </header>
    )
  }

  11. What data type is `props` when the component receives it?
  An object

  12. What does the `.map()` array method do?
  Returns a new array. whatever gets returned from the callback function provided is placed at the same index in the new array.Usually we take the items from the original array and modify them in some way.

  13. What do we usually use `.map()` for in react?
  Convert an array of raw data into an array of JSX elements that can be displayed on the page

  14. Critical thinking: why is `.map()` better than just creating the components manually by typing them out?
    1. We often don't have the data ahead of time when we're building the app, so we simply can't manually type them out.
    2. It takes our code more "self-sustaining" - not requiring additional changes to the code whenever the data changes.