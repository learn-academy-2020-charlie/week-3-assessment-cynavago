# ASSESSMENT 3: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What is object destructuring?

  Your answer: 
  It allows you to access an object and be able to grab their values inside a key value pair, so that you can use those values individually throughout the function.

  Researched answer:
  Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on. 

  Special way of assigning values in Javascript. It allows you to take something like an array or object and unpack their values into individual variables. 


2. What is a DOM event?

  Your answer:
  When you are allowed to use Javascript inside an HTML document. After doing some research, I realized I confused DOM events with something similar to JSX. I found some better answers below.

  Researched answer:
  DOM events allow JavaScript to register different event handlers on elements in an HTML document. Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

  Events are actions that occurs as a result of the user action or as result of state change of the elements of a DOM tree. 

  Examples of HTML DOM events:

  When a user clicks the mouse
  When a web page has loaded
  When an image has been loaded
  When the mouse moves over an element
  When an input field is changed
  When an HTML form is submitted
  When a user presses a key[1]


3. What is the difference between a class and an object?

  Your answer:
  Classes are blueprints for objects which as reusable and customizable. Classes define attributes (data) and behaviors (methods). Objects are data that contain key:value pairs. They are at the cross section of data (which is static) and behavior (methods).

  Researched answer:
  A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class. An object has a state in which all of its properties have values that you either explicitly define or that are defined by default settings.


4. What is the difference between a HTML div and a span?

  Your answer:
  A <div> tag is a container that can hold any type of information. A <span> also works in a very similar way. They both don't have a specific meanings attached to the, (such as an h1 or p tag) but they both hold content inside. Below is my more researched answer.

  Researched answer:
  A div is a block-level element and a span is an inline element. The div should be used to wrap sections of a document, while use spans to wrap small portions of text, images, etc.
  
  The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer:
  React.Fragment allows you to call children components in different files. They also allow you to write HTML code within the React.Fragment.

  Researched answer:
  React fragments let you group a list of children without adding extra nodes to the DOM because fragments are not rendered to the DOM. So basically we use React.Fragment where we would normally use a wrapper div.


6. What are three options for creating responsive design?

  Your answer:
  Bootstrap, manually designing desktop/mobile mockups and then coding it.

  Researched answer:
  1: You can make sure your code includes sizes for desktop, tablet, and iPhone in your CSS for example. 

  Example:
  /* Tablet Landscape */
    @media screen and (max-width: 1060px) {
    #primary { width:67%; }
    #secondary { width:30%; margin-left:3%;}  
  }
  /* Tabled Portrait */
    @media screen and (max-width: 768px) {
    #primary { width:100%; }
    #secondary { width:100%; margin:0; border:none; }
  }

  2: Make sure your images are not bigger than their parent container. Percentages seem very useful here. You can set the max image width to 100% of the container. 

  3: Use font-sizes in rem vs. in pixels. Responsive websites should have responsive fonts. 





## Looking Ahead: Terms for Next Week
- Object oriented programming:
  The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.

- irb:
  Interactive Ruby)

- Instance variable:
  Instance variables get created and initialized using constructor. Instance variables are nothing but called properties of the object. Methods are again functions which attached with instance and all instance created from the same class will have those methods or actions.

- Ruby:
  Ruby is a  dynamic, open source programming language with a focus on simplicity and productivity

- Class relationships:
  Three important relationships in Ruby are known as ‘belongs to…’, ‘has many…’, and “has many of each other”. 

- Getter and Setter methods in Ruby:
  These methods allow us to access a class’s instance variable from outside the class. Getter methods are used to get the value of an instance variable while the setter methods are used to set the value of an instance variable of some class. 
