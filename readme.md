<!-- 1 answer -->

getElementById: It finds one element with the specific ID. It returns only the aspect. Id is unique in HTML, that's why we can access 
only one element at a time. 

getElementsByClassName: It finds all elements with the same class name. It returns an an array-like object. With this, we can access lots
 of elements at a time. 

querySelector: It finds only the first element that matches the CSS selector. It returns only the element. 

querySelectorAll: It finds all the elements that match the CSS selector. With this, we can access all types of elements. 

<!-- 2 answer -->

To create a new element, we need document.createElement(). This helps to create new elements, like as a div element. After creating the 
new element, to push it into the DOM, we need the appendChild(). This helps to push the new element where we want if we input the id or 
class name.

<!-- 3 answer -->

Event Bubbling is an event that happens on an element after it runs on the same element, then goes to the parent element, and so on.

<!-- 4 answer -->

Event Delegation is a feature that attaches to the parent element rather than the child element. The parent element listens to all events 
that occur from the child element. 

It is useful because we don't need to add many listeners to child elements; we only need to add the listeners to the parent element. As
a result, it reduces the memory usage.

<!-- 5 answer -->

preventDefault(): It stops the browser from refreshing. Specifically for form submission. This does not help to stop the bubbling event. 

stopPropagation(): It stops the event from bubbling up. But this does not stop the browser any action. It only helps to prevent a parent  
element from reacting to the child element's click.