/*
 *  (Input)
 *  Create a drive through website of your
 *  favorite fast food chain.  Use a Web Form
 *  (not window.prompt()) to accept the user to
 *  input for a number of burgers, fries and sodas.
 *  (or whatever 3 menu items of your choice) - 30pts
 *
 *  Burgers are $1 each
 *  Fries are $2 each
 *  Sodas are $2.50 each
 *
 *  (Math)
 *  Calculate the total cost of the user's order on
 *  a button click.  Use the Arrow Function (an
 *  anonymous function) to wire up the click event.
 *  -30pts
 *
 *  document.getElementById('btnClick').onclick = () =>
 *  {
 *  };
 *
 *
 *  (Output)
 *  Output the total cost of the user’s order to the
 *  same webpage with the form controls.  Use a
 *  template literal to concatenate your variables
 *  into your string output.  -30pts
 *
 *  Add any HTML or CSS with Bootstrap that makes
 *  the page more descriptive or user friendly. -10pts
 */

// Declare and initialize program constants

const BURGERS = 1.0;
const FRIES = 2.0;
const SODAS = 2.50;


// Make the "$" an "alias" for the following : // document.getElementById(id)
const $ = (id) => document.getElementById(id);

$("btnClick").onclick = () =>
{
    // Get values from textboxes or set 0 if text box is empty
    const burgers = parseInt($("burgers").value) || 0;
    const fries = parseInt($("fries").value) || 0;
    const sodas = parseInt($("sodas").value) || 0;

    // Calculate total cost
    const totalCost = burgers * BURGERS +
                      fries   * FRIES   +
                      sodas   * SODAS;
    
    // Set up area to hold the total cost
    const outputDiv = $("output");

    // Print out total cost
    outputDiv.innerHTML = `<p>Total cost: $${totalCost.toFixed(2)}</p>`;
};
