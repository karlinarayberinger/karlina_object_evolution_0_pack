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
 */
function initialize_application() {
    try {
        let output_div = document.getElementById("output");
        output_div.innerHTML = "";
        populate_f_menu();
        populate_p_menu();
        populate_r_menu();
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in initialize_application(): " + exception);
    } 
}