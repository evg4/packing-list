## Project Title
Packing list
## Description
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I created it on 09.10.23 to practise using the Redux Toolkit. I started off with very basic Redux syntax, with one state (no slices) and all action creators and a single reducer in one file. Then I split it into slices, with a separate file for each. Finally, I refactored again to make use of createSlice() and configureStore(). This process really helped me understand the concepts and it meant I could make sure the basics were working as expected before I moved on to using the RTK. In some files I left the previous code, commented out, so I can refer back to it if needed.
## How to use
This can be viewed at https://evg-packing-list.netlify.app/. Type in the input box and click "Add" to add a new item. You cannot add the same item twice. You can click on the empty box/tick to the right of any item to toggle the status of it (i.e. packed or unpacked). Clicking on the X to the right of an item will remove it from the list. Clicking "hide packed" will show only the items without a green tick, and changes the button to "show all". Clicking this again will revert to the original view. 
## Technologies
HTML, CSS, JavaScript, React, Redux.
## Licence
Please see license document.



