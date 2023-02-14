/**
 * file: riemann_sum.js
 * type: JavaScript
 * author: karbytes
 * date: 13_FEBRUARY_2023
 * license: PUBLIC_DOMAIN
 */

/**
 * Generate a white square-shaped canvas element whose id is "cartesian_plane" and whose side lengths are each 400 pixels and 
 * append that canvas element to the inner HTML content of the div element of defined in riemann_sum.html whose id is "output".
 * 
 * Draw two black 1-pixel thick line segments which are are plotted on the canvas and which intersect each other at the center 
 * of the canvas and whose end points are located on the edge of the canvas.
 * 
 * The line segment whose endpoints are the middle of the left edge of the canvas and the middle of the right edge of the 
 * canvas represents the x-axis (which is the horizontal dimension) of a two-dimensional Cartesian grid.
 * 
 * The line segment whose endpoints are the middle of the top edge of the canvas and the middle of the bottom edge of the 
 * canvas represents the y-axis (which is the vertical dimension) of a two-dimensional Cartesian grid.
 */
function generate_blank_cartesian_grid() {
    try {
        let canvas = '<' + 'canvas id="cartesian_plane" width="400" height="400" style="background:#ffffff"' + '><' + '/' + 'canvas' + '>';
        document.getElementById("output").innerHTML += canvas; // Generate a white square shaped canvas inside of the output div.
        canvas = document.getElementById("cartesian_plane"); // Retrieve the newly generated canvas element.
        context = canvas.getContext("2d");
        context.strokeStyle = "#000000"; // Set the "paint" color to black.
        context.lineWidth = 1; // Set the "paint brush" size to be one pixel thick.
        context.beginPath();
        context.moveTo(0, 200); // Define where to start drawing the horizontal line segment: at the middle point of the left edge of the square canvas.
        context.lineTo(400, 200); // Define where to stop drawing the horizontal line segment: at the middle point of the right edge of the square canvas.
        context.moveTo(200, 0); // Define where to start drawing the vertical line segment: at the middle point of the top edge of the square canvas.
        context.lineTo(200, 400); // Define where to stop drawing the vertical line segment: at the middle point of the bottom edge of the square canvas.
        context.stroke(); // Draw the horizontal and vertical axes of the Cartesian grid.
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in generate_blank_cartesian_grid(): " + exception);
    }
}

/**
 */
function initialize_application() {
    try {
        let output_div = document.getElementById("output");
        output_div.innerHTML = "";
        generate_blank_cartesian_grid();
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in initialize_application(): " + exception);
    } 
}