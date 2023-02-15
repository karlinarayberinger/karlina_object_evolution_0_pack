/**
 * file: riemann_sum.js
 * type: JavaScript
 * author: karbytes
 * date: 14_FEBRUARY_2023
 * license: PUBLIC_DOMAIN
 */

/**
 * Populate the paragraph element whose id is "f_menu_container" on the web page defined by riemann_sum.html
 * with a SELECT menu whose id is "f_menu_container" and whose OPTIONs each represent exactly one function 
 * to graph on a Cartesian plane.
 * 
 * The first OPTION is automatically selected if the user does not click on that SELECT menu.
 */
function populate_f_menu() {
    try {
        const paragraph_element = document.getElementById("f_menu_container");
        let S = '<' + 'select id="f_menu"' + '>';
        S += '<' + 'option value="f0" selected' + '>' + 'y = f(x) := (2 * x) + 3' + '<' + '/' + 'option' + '>';
        S += '<' + 'option value="f1"' + '>' + 'y = f(x) := ((1/16) * (x * x)) + 1' + '<' + '/' + 'option' + '>';
        S += '<' + 'option value="f2"' + '>' + 'y = f(x) := sin(x)' + '<' + '/' + 'option' + '>';
        S += '<' + '/' + 'select' + '>';
        paragraph_element.innerHTML = S;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of populate_f_menu(): " + exception);
    }
}

/**
 * Populate the paragraph element whose id is "p_menu_container" on the web page defined by riemann_sum.html
 * with a SELECT menu whose id is "p_menu" and whose OPTIONs each represent exactly one natural number, N, of 
 * equally-sized partitions of the x-axis between x = A and x = B to generate.
 * 
 * The first OPTION is automatically selected if the user does not click on that SELECT menu.
 */
function populate_p_menu() {
    try {
        const paragraph_element = document.getElementById("p_menu_container"), MAXIMUM_N = 10;
        let N = 2, S = '<' + 'select id="p_menu"' + '>';
        S += '<' + 'option value="1" selected' + '>' + 'N := 1' + '<' + '/' + 'option' + '>';
        for (N = 2; N <= MAXIMUM_N; N += 1) S += '<' + 'option value="' + N + '"' + '>' + 'N := ' + N + '<' + '/' + 'option' + '>';
        S += '<' + '/' + 'select' + '>';
        paragraph_element.innerHTML = S;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of populate_p_menu(): " + exception);
    }
}

/**
 * Populate the paragraph element whose id is "r_menu_container" on the web page defined by riemann_sum.html
 * with a SELECT menu whose id is "r_menu" and whose OPTIONs each represent exactly one type of rule for
 * constructing N rectangles whose widths are each equal to each one of the N equally-sized partitions of
 * the x-axis between x = A and x = B and whose heights depend on which rule is selected from the r_menu.
 * 
 * If left_rule is selected, then the ith rectangle's left side will overlap with the leftmost 
 * point of the ith partition of the x-axis such that the height of the ith rectangle is f(xi) 
 * (and xi is the left endpoint of the ith x-axis partition).
 * 
 * If right_rule is selected, then the ith rectangle's right side will overlap with the rightmost  
 * point of the ith partition of the x-axis such that the height of the ith rectangle is f(x(i + 1)) 
 * (and x(i + 1) is the right endpoint of the ith x-axis partition).
 * 
 * If midpoint_rule is selected, then the ith rectangle's right side will overlap with the middle  
 * point of the ith partition of the x-axis such that the height of the ith rectangle is f( (xi + x(i + 1)) / 2 ) 
 * (and ( (xi + x(i + 1)) / 2 ) is the point which is equidistant from the leftmost point and from 
 * the rightmost point of the ith x-axis partition).
 * 
 * NOTE THAT THE TERMS xi, x(i + 1), and ( (xi + x(i + 1)) / 2 ) ARE INTENDED TO REPRESENT SINGLE POINTS
 * ALONG THE X-AXIS AND ARE NOT MEANT TO BE INTERPRETED AS ARITHMETIC EQUATIONS.
 * 
 * The first OPTION is automatically selected if the user does not click on that SELECT menu.
 */
function populate_r_menu() {
    try {
        const paragraph_element = document.getElementById("r_menu_container");
        let S = '<' + 'select id="r_menu"' + '>';
        S += '<' + 'option value="left_rule" selected' + '>' + 'left_rule' + '<' + '/' + 'option' + '>';
        S += '<' + 'option value="right_rule"' + '>' + 'right_rule' + '<' + '/' + 'option' + '>';
        S += '<' + 'option value="midpoint_rule"' + '>' + 'midpoint_rule' + '<' + '/' + 'option' + '>';
        S += '<' + '/' + 'select' + '>';
        paragraph_element.innerHTML = S;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of populate_r_menu(): " + exception);
    }
}

/**
 * ATTENTION! ATTENTION!
 * 
 * Do not generate the Cartesian plane canvas until the user selects a function.
 * 
 * That way, the graph dimensions can match the function instead such that the 
 * graph is most easy to visualize.
 * 
 * Tentative functions to graph:
 * 
 * A: y = f(x) := 2x - 3.
 * 
 * B: y = f(x) := 0.5(x * x) + 1.
 * 
 * C: y = f(x) := 0.5(x * x * x) + 1.
 * 
 * D: y = f(x) := sin(x).
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
/*
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
*/

/**
 */
function initialize_application() {
    try {
        let output_div = document.getElementById("output");
        output_div.innerHTML = "";
        populate_f_menu();
        populate_p_menu();
        populate_r_menu();
        // generate_blank_cartesian_grid();
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in initialize_application(): " + exception);
    } 
}