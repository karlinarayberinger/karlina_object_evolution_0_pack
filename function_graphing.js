/**
 * file: function_graphing.js
 * type: JavaScript
 * author: karbytes
 * date: 10_APRIL_2023
 * license: PUBLIC_DOMAIN
 * dependencies: karbytes_utilities.js
 */

/**
 * Respond to the event of the RESET button being clicked or the web page being loaded by a web browser.
 * 
 * (Note that the RESET button replaces the GENERATE button after the GENERATE button is clicked).
 */
function initialize_application() {
    let time_stamped_message, events_log_div, output_div, canvas_container, cartesian_plane_canvas, generate_button_container_paragraph, function_menu_container_paragraph;
    try {
        // Populate the "events_log" div with a time stamped message indicating that this function was called.
        time_stamped_message = "The function named initialize_application() was called at time: " + generate_time_stamp();
        console.log(time_stamped_message);
        time_stamped_message = generate_paragraph_html_element(time_stamped_message);
        events_log_div = document.getElementById("events_log");
        events_log_div.innerHTML = time_stamped_message;

        // Populate the "output" div with placeholder text.
        output_div = document.getElementById("output");
        output_div.innerHTML = generate_paragraph_html_element("This sentence will disappear as a result of the GENERATE button being clicked.");

        // Populate the "generate_button_container" paragraph element with a button input web page element which calls the function named graph_selected_function().
        generate_button_container = document.getElementById("generate_button_container");
        generate_button_container.innerHTML = '<' + 'input type="button" value="GENERATE" style="text-align:center" onclick="graph_selected_function()"' + '/' + '>';
        
        // Populate the "canvas_container" div with a canvas web page element (and the canvas is a rectangular area 750 pixels in horizontal length and 450 pixels in vertical length).
        cartesian_plane_canvas = '<' + 'canvas id="cartesian_plane" width="750" height="450" style="background:#ffffff">' + '<' + '/' + '>';
        canvas_container_div = document.getElementById("canvas_container");
        canvas_container_div.innerHTML = generate_paragraph_html_element(cartesian_plane_canvas);
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of initialize_application(): " + exception);
    }
}

/**
 * Respond to the event of the GENERATE button being clicked.
 * 
 * (Note that the RESET button replaces the GENERATE button after the GENERATE button is clicked).
 */
function graph_selected_function() {
    let time_stamped_message, events_log_div, output_div;
    try {
        // Populate the "events_log" div with a time stamped message indicating that this function was called.
        time_stamped_message = "The function named graph_selected_function() was called at time: " + generate_time_stamp();
        console.log(time_stamped_message);
        time_stamped_message = generate_paragraph_html_element(time_stamped_message);
        events_log_div = document.getElementById("events_log");
        events_log_div.innerHTML = time_stamped_message;

        // Populate the "output" div with placeholder text.
        output_div = document.getElementById("output");
        output_div.innerHTML = generate_paragraph_html_element("[program output]");

        // Populate the "generate_button_container" paragraph element with a button input web page element which calls the function named initialize_application().
        generate_button_container = document.getElementById("generate_button_container");
        generate_button_container.innerHTML = '<' + 'input type="button" value="RESET" style="text-align:center" onclick="initialize_application()"' + '/' + '>';
        
        //...
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of graph_selected_function(): " + exception);
    }
}