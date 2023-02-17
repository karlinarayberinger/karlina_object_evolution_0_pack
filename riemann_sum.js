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
 */
/*
function draw_cartesian_grid_on_canvas() {
    try {
        let canvas = document.getElementById("rectangular_canvas");
        let context = canvas.getContext("2d");
        const canvas_width = canvas.width;
        const canvas_height = canvas.height;
        const grid_unit_square_length = 25;
        const number_of_horizontal_grid_line_segments = Math.floor(canvas_width / grid_unit_square_length);
        const number_of_vertical_grid_line_segments = Math.floor(canvas_height / grid_unit_square_length);
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of draw_cartesian_grid_on_canvas(): " + exception);
    }
}*/

/**
 */
function draw_cartesian_grid_for_f0() {

}

/**
 */
function draw_cartesian_grid_for_f1() {

}

/**
 */
function draw_cartesian_grid_for_f2() {

}

function test() {
    var grid_size = 25;
    var x_axis_distance_grid_lines = 5;
    var y_axis_distance_grid_lines = 5;
    var x_axis_starting_point = { number: 1, suffix: '\u03a0' };
    var y_axis_starting_point = { number: 1, suffix: '' };

    var canvas = document.getElementById("rectangular_canvas");
    var ctx = canvas.getContext("2d");

    var canvas_width = canvas.width;
    var canvas_height = canvas.height;

    var num_lines_x = Math.floor(canvas_height/grid_size);
    var num_lines_y = Math.floor(canvas_width/grid_size);

    // Draw grid lines along X-axis
    for(var i=0; i<=num_lines_x; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;

        // If line represents X-axis draw in different color
        if(i == x_axis_distance_grid_lines) 
            ctx.strokeStyle = "#000000";
        else
            ctx.strokeStyle = "#e9e9e9";

        if(i == num_lines_x) {
            ctx.moveTo(0, grid_size*i);
            ctx.lineTo(canvas_width, grid_size*i);
        }
        else {
            ctx.moveTo(0, grid_size*i+0.5);
            ctx.lineTo(canvas_width, grid_size*i+0.5);
        }
        ctx.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=num_lines_y; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_axis_distance_grid_lines) 
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#e9e9e9";
    
    if(i == num_lines_y) {
        ctx.moveTo(grid_size*i, 0);
        ctx.lineTo(grid_size*i, canvas_height);
    }
    else {
        ctx.moveTo(grid_size*i+0.5, 0);
        ctx.lineTo(grid_size*i+0.5, canvas_height);
    }
    ctx.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);

// Ticks marks along the positive X-axis
for(i=1; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(grid_size*i+0.5, -3);
    ctx.lineTo(grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(x_axis_starting_point.number*i + x_axis_starting_point.suffix, grid_size*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_axis_distance_grid_lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-grid_size*i+0.5, -3);
    ctx.lineTo(-grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'end';
    ctx.fillText(-x_axis_starting_point.number*i + x_axis_starting_point.suffix, -grid_size*i+3, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(num_lines_x - x_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, grid_size*i+0.5);
    ctx.lineTo(3, grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(-y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, grid_size*i+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<x_axis_distance_grid_lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -grid_size*i+0.5);
    ctx.lineTo(3, -grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, -grid_size*i+3);
}
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
        // draw_vertical_cartesian_plane_axis();
        // draw_horizontal_cartesian_plane_axis();
        test();
        populate_f_menu();
        populate_p_menu();
        populate_r_menu();
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in initialize_application(): " + exception);
    } 
}