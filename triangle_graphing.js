/**
 * file: triangle_graphing.js
 * type: JavaScript
 * author: karbytes
 * date: 21_FEBRUARY_2023
 * license: PUBLIC_DOMAIN
 */

/**
 * Return a String type value which describes the number of milliseconds which have elapsed since the Unix Epoch.
 * 
 * Note that the Unix Epoch is 01_JANUARY_1970 at 0 hours, 0 minutes, 0 seconds, and 0 seconds 
 * (i.e. 00:00:00) (i.e. midnight) (Coordinated Universal Time (UTC)).
 * 
 * @return {String} text which denotes the number of milliseconds which have elapsed since the Unix Epoch.
 */
function generate_time_stamp() {
    const milliseconds_elapsed_since_unix_epoch = Date.now();
    return milliseconds_elapsed_since_unix_epoch + " milliseconds since midnight on 01_JANUARY_1970.";
}

/**
 * Return a String type value which is used to instantiate a paragraph type web page element such that
 * the String type value which is passed into this function as its only input is that paragraph element's 
 * inner HTML content.
 * 
 * Note that the String type constant variable values are broken up into single-character String type values 
 * to avoid causing the WordPress web page editor to interpret HTML tags in the web page body with 
 * source code which is hosted on that web page inside of PRE (preformatted) web page elements.
 * 
 * @param {String} inner_HTML is assumed to be plain text or HTML content.
 * 
 * @return {String} a sequence of text characters which is used to instantiate a paragraph (P) web page element.
 */
function generate_paragraph_html_element(inner_html) {
    const opening_paragraph_tag = ('<' + 'p' + '>'), closing_paragraph_tag = ('<' + '/' + 'p' + '>');
    try {
        if (typeof inner_html.length !== "number") throw 'The expression (typeof inner_html.length !== "number") was evaluated to be true.';
        return opening_paragraph_tag + inner_html + closing_paragraph_tag;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_paragraph_html_element(inner_html): " + exception);
    }
}

/**
 * Return a String type value which is used to instantiate a select type web page element such that
 * the String type value which is passed into this function as its only input is that select menu element's
 * id property value.
 * 
 * When clicked on, the select menu interface element will expand to display a list of all integers which are
 * no smaller than -100 and no larger than 100 in ascending order (with the smallest integer option at the top
 * of the list).
 * 
 * @param {String} select_id is assumed to be either 
 *                 "a_x_menu" or else
 *                 "a_y_menu" or else
 *                 "b_x_menu" or else
 *                 "b_y_menu" or else
 *                 "c_x_menu" or else
 *                 "c_y_menu". 
 * 
 * @return {String} a sequence of text characters which is used to instantiate an expandable list menu (SELECT) web page element.
 */
function generate_coordinate_menu_select_html_element(select_id) {
    let select_menu = '', option = '', i = 0;
    try {
        if (typeof select_id.length !== "number") throw 'The expression (typeof select_id.length !== "number") was evaluated to be true.';
        if ((select_id !== "a_x_menu") && (select_id !== "a_y_menu") && 
            (select_id !== "b_x_menu") && (select_id !== "b_y_menu") &&
            (select_id !== "c_x_menu") && (select_id !== "c_y_menu"))
        throw 'select_id must either be "a_x_menu" or else "a_y_menu" or ' + 
               'else "b_x_menu" or else "b_y_menu" or ' + 
               'else "c_x_menu" or else "c_y_menu".';
        select_menu = ('<' + 'select id="' + select_id + '" style="text-align:center"' + '>');
        for (i = -100; i <= 100; i += 1) {
            if (i === 0) option = ('<' + 'option value="0" selected' + '>');
            else option = ('<' + 'option value="' + i + '"' + '>');
            option += (i + ('<' + '/' + 'option' + '>'));
            select_menu += option;
        }
        select_menu += ('<' + '/' + 'select' + '>');
        return select_menu;

    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_coordinate_menu_select_html_element(select_id): " + exception);
    } 
}

/**
 * Return the String type value of the selected menu option of a SELECT menu element.
 * 
 * Assume that select_menu_identifier is a String type value and the id of an existing select HTML element.
 * 
 * @param {String} select_menu_identififier is assumed to be the id of an existing SELECT menu web page element.
 * 
 * @return {String} value of an OPTION of the SELECT whose id is select_menu_identifier.
 */
function get_selected_menu_option_value(select_menu_identifier) {
    try {
        let menu_object = {}, options_array = [], selected_option_index = 0, selected_option_object = {}, selected_option_value;
        if (arguments.length !== 1) throw "Error: exactly one function input is required.";
        if (typeof arguments[0] !== "string") throw "Error: select_menu_identifier is required to be a String type data value.";
        menu_object = document.getElementById(select_menu_identifier);
        options_array = menu_object.options;
        selected_option_index = menu_object.selectedIndex;
        selected_option_object = options_array[selected_option_index];
        selected_option_value = selected_option_object.value
        return selected_option_value;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of get_selected_menu_option(select_menu_identifier): " + exception);
    }
}

/**
 * Draw a line segment whose thickness is one pixel and whose color is black from the middle point of the left edge 
 * of the HTML canvas whose id is "cartesian_plane" to the middle of the right edge of that canvas.
 * 
 * Assume that the length of each one of the four sides of that canvas is 750 pixels.
 */
function draw_horizontal_line_through_middle_of_canvas() {
    const CANVAS_SIDE_LENGTH = 750;
    let canvas = undefined, context = undefined, canvas_midpoint = 0;
    try {
        canvas = document.getElementById("cartesian_plane");
        if (canvas.width !== canvas.height) throw "The expression (canvas.width !== canvas.height) was evaluated to be true.";
        if (canvas.width !== CANVAS_SIDE_LENGTH) throw "The expression (canvas.width !== CANVAS_SIDE_LENGTH) was evaluated to be true.";
        canvas_midpoint = (canvas.width / 2);
        console.log("canvas_midpoint = (canvas.width / 2); // evaluates to " + canvas_midpoint);
        canvas_midpoint = parseInt(canvas_midpoint);
        console.log("canvas_midpoint = parseInt(canvas_midpoint); // evaluates to " + canvas_midpoint);
        context = canvas.getContext("2d");
        context.strokeStyle = "#000000"; 
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(0, canvas_midpoint); // the middle point of the left edge of the square canvas
        context.lineTo((canvas_midpoint * 2), canvas_midpoint); // the middle point of the right edge of the square canvas
        context.stroke();
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in draw_horizontal_line_through_middle_of_canvas(): " + exception);
    }
}

/**
 * Draw a line segment whose thickness is one pixel and whose color is black from the middle point of the top edge 
 * of the HTML canvas whose id is "cartesian_plane" to the middle of the bottom edge of that canvas.
 * 
 * Assume that the length of each one of the four sides of that canvas is 750 pixels.
 */
function draw_vertical_line_through_middle_of_canvas() {
    const CANVAS_SIDE_LENGTH = 750;
    let canvas = undefined, context = undefined, canvas_midpoint = 0;
    try {
        canvas = document.getElementById("cartesian_plane");
        if (canvas.width !== canvas.height) throw "The expression (canvas.width !== canvas.height) was evaluated to be true.";
        if (canvas.width !== CANVAS_SIDE_LENGTH) throw "The expression (canvas.width !== CANVAS_SIDE_LENGTH) was evaluated to be true.";
        canvas_midpoint = (canvas.width / 2);
        console.log("canvas_midpoint = (canvas.width / 2); // evaluates to " + canvas_midpoint);
        canvas_midpoint = parseInt(canvas_midpoint);
        console.log("canvas_midpoint = parseInt(canvas_midpoint); // evaluates to " + canvas_midpoint);
        context = canvas.getContext("2d");
        context.strokeStyle = "#000000"; 
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(canvas_midpoint, 0); // the middle point of the top edge of the square canvas
        context.lineTo(canvas_midpoint, (canvas_midpoint * 2)); // the middle point of the bottom edge of the square canvas
        context.stroke();
    }
    catch(exception) {
        console.log("An exception to expected functioning occurred in draw_vertical_line_through_middle_of_canvas(): " + exception);
    }
}

/**
 * ...
 */
function initialize_application() {
    let cartesian_plane_canvas = "";
    let time_stamped_message = "", initial_output_message = "";
    let output_div = undefined, events_log_div = undefined, generate_button_container_paragraph = undefined;
    let a_x_menu_container_paragraph = undefined, a_y_menu_container_paragraph = undefined;
    let b_x_menu_container_paragraph = undefined, b_y_menu_container_paragraph = undefined;
    let c_x_menu_container_paragraph = undefined, c_y_menu_container_paragraph = undefined;
    let generate_button_container = "";
    try {
        // Populate the "event_log" div with a time stamped message indicating that this function was called.
        time_stamped_message = generate_paragraph_html_element("The function named initialize_application() was called at time: " + generate_time_stamp());
        events_log_div = document.getElementById("events_log");
        events_log_div.innerHTML = time_stamped_message;
        // Populate the "output" div with a canvas web page element.
        cartesian_plane_canvas = (('<' + 'canvas id="cartesian_plane" width="750" height="750" style="background:#ffffff">') + ('<' + '/' + '>'));
        output_div = document.getElementById("output");
        output_div.innerHTML = cartesian_plane_canvas
        // Draw the horizontal axis of a Cartesian plane through the center of the square canvas.
        draw_horizontal_line_through_middle_of_canvas();
        // Draw the vertical axis of a Cartesian plane through the center of the square canvas.
        draw_vertical_line_through_middle_of_canvas();
        // Populate the "a_x_menu_container" paragraph element with a select menu for choosing an integer value for the X property of POINT object A.
        a_x_menu_container_paragraph = document.getElementById("a_x_menu_container");
        a_x_menu_container_paragraph.innerHTML = ('A.X := ' + generate_coordinate_menu_select_html_element("a_x_menu") + '. // horizontal position of two-dimensional POINT labeled A.'); 
        // Populate the "a_y_menu_container" paragraph element with a select menu for choosing an integer value for the Y property of POINT object A.
        a_y_menu_container_paragraph = document.getElementById("a_y_menu_container");
        a_y_menu_container_paragraph.innerHTML = ('A.Y := ' + generate_coordinate_menu_select_html_element("a_y_menu") + '. // vertical position of two-dimensional POINT labeled A.');   
        // Populate the "b_x_menu_container" paragraph element with a select menu for choosing an integer value for the X property of POINT object B.
        b_x_menu_container_paragraph = document.getElementById("b_x_menu_container");
        b_x_menu_container_paragraph.innerHTML = ('B.X := ' + generate_coordinate_menu_select_html_element("b_x_menu") + '. // horizontal position of two-dimensional POINT labeled B.'); 
        // Populate the "B_y_menu_container" paragraph element with a select menu for choosing an integer value for the Y property of POINT object B.
        b_y_menu_container_paragraph = document.getElementById("b_y_menu_container");
        b_y_menu_container_paragraph.innerHTML = ('B.Y := ' + generate_coordinate_menu_select_html_element("b_y_menu") + '. // vertical position of two-dimensional POINT labeled B.');  
        // Populate the "c_x_menu_container" paragraph element with a select menu for choosing an integer value for the X property of POINT object C.
        c_x_menu_container_paragraph = document.getElementById("c_x_menu_container");
        c_x_menu_container_paragraph.innerHTML = ('C.X := ' + generate_coordinate_menu_select_html_element("c_x_menu") + '. // horizontal position of two-dimensional POINT labeled C.'); 
        // Populate the "C_y_menu_container" paragraph element with a select menu for choosing an integer value for the Y property of POINT object B.
        c_y_menu_container_paragraph = document.getElementById("c_y_menu_container");
        c_y_menu_container_paragraph.innerHTML = ('C.Y := ' + generate_coordinate_menu_select_html_element("c_y_menu") + '. // vertical position of two-dimensional POINT labeled C.'); 
        // Populate the "generate_button_container" paragraph element with a button input web page element which calls the function named generate_triangle_using_input_coordinates().
        generate_button_container = document.getElementById("generate_button_container");
        generate_button_container.innerHTML = ('<' + 'input type="button" id="generate_button" value="GENERATE" style="text-align:center" onclick="generate_triangle_using_input_coordinates()"' + '/' + '>');
        //...    
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of initialize_application(): " + exception);
    }
}

/**
 */
function generate_triangle_using_input_coordinates() {
    let cartesian_plane_canvas = "";
    let time_stamped_message = "", final_output_message = "";
    let output_div = undefined, events_log_div = undefined, generate_button_container_paragraph = undefined;
    let a_x_menu_container_paragraph = undefined, a_y_menu_container_paragraph = undefined;
    let b_x_menu_container_paragraph = undefined, b_y_menu_container_paragraph = undefined;
    let c_x_menu_container_paragraph = undefined, c_y_menu_container_paragraph = undefined;
    let reset_button = undefined;
    try {
        // Transform each of the six input select menus into plain text displaying its selected option.
        a_x_menu_container_paragraph = document.getElementById("a_x_menu_container");
        a_x_menu_container_paragraph.innerHTML = ('A.X := ' + get_selected_menu_option_value("a_x_menu") + '. // horizontal position of two-dimensional POINT labeled A.'); 
        //...    
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_triangle_using_input_coordinates(): " + exception);
    }
}