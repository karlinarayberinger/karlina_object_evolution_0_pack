/**
 * file: riemann_sum.js
 * type: JavaScript
 * author: karbytes
 * date: 16_FEBRUARY_2023
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
 * (and ( (xi + x(i + 1)) / 2 ) is the point which is the same distance from the leftmost point of the ith 
 * partition of the x-axis as it is from the rightmost point of the ith partition of the x-axis).
 * 
 * NOTE THAT THE TERMS xi, x(i + 1), and ( (xi + x(i + 1)) / 2 ) ARE EACH INTENDED TO REPRESENT A SINGLE 
 * POINT ALONG THE X-AXIS WHICH IS NO SMALLER THAN A AND NO LARGER THAN B AND WHICH IS NOT MEANT TO BE 
 * INTERPRETED AS AN ARITHMETIC EQUATION.
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
 * Generate HTML code which defines a white rectangular region inside of the DIV element whose id is "output"
 * on the web page defined by riemann_sum.html.
 * 
 * The returned string defines an HTML CANVAS whose id is "rectangular_canvas", whose width is 750 pixels, and whose height is 400 pixels.
 * 
 * @return {String} HTML code which defines a rectangular CANVAS whose background color is white and whose width is longer than its height.
 */
function generate_blank_canvas() {
    return '<' + 'canvas id="rectangular_canvas" width="750" height="400" style="background:#ffffff;"' + '><' + '/' + 'canvas' + '>';
}

/**
 * Draw a line segment whose thickness is one pixel and whose color is black from of the left edge of the HTML canvas 
 * whose id is "rectangular_canvas" on the web page defined by riemann_sum.html to the right edge of that canvas and 
 * such that the line segment drawn by this function is parallel to the top and bottom edges of that canvas.
 * 
 * The line segment drawn by this function is supposed to represent the x-axis of a two-dimensional Cartesian grid.
 * 
 * Assume that the canvas is 750 pixels wide and 400 pixels tall.
 */
function draw_horizontal_cartesian_plane_axis() {
    let canvas = undefined, context = undefined;
    try {
        canvas = document.getElementById("rectangular_canvas");
        context = canvas.getContext("2d");
        context.strokeStyle = "#000000"; 
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(0, 350); // point at the left edge of the canvas
        context.lineTo(750, 350); // point at the right edge of the canvas
        context.stroke();
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in draw_horizontal_cartesian_plane_axis(): " + exception);    
    }
}

/**
 * Draw a line segment whose thickness is one pixel and whose color is black from of the top edge of the HTML canvas 
 * whose id is "rectangular_canvas" on the web page defined by riemann_sum.html to the bottom edge of that canvas and 
 * such that the line segment drawn by this function is parallel to the left and right edges of that canvas.
 * 
 * The line segment drawn by this function is supposed to represent the y-axis of a two-dimensional Cartesian grid.
 * 
 * Assume that the canvas is 750 pixels wide and 400 pixels tall.
 */
function draw_vertical_cartesian_plane_axis() {
    let canvas = undefined, context = undefined;
    try {
        canvas = document.getElementById("rectangular_canvas");
        context = canvas.getContext("2d");
        context.strokeStyle = "#000000"; 
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(50, 0); // point at the top edge of the canvas
        context.lineTo(50, 400); // point at the bottom edge of the canvas
        context.stroke();
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in draw_vertical_cartesian_plane_axis(): " + exception);    
    }
}

/**
 */
function initialize_application() {
    try {
        let output_div = document.getElementById("output");
        output_div.innerHTML = generate_blank_canvas();
        draw_vertical_cartesian_plane_axis();
        draw_horizontal_cartesian_plane_axis();
        populate_f_menu();
        populate_p_menu();
        populate_r_menu();
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in initialize_application(): " + exception);
    } 
}