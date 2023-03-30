/**
 * file: karbytes_utilities.js
 * type: JavaScript
 * author: karbytes
 * date: 29_MARCH_2023
 * license: PUBLIC_DOMAIN
 */

/**
 * Respond to the event of the RESET button being clicked or the web page being loaded by a web browser.
 * 
 * (Note that the RESET button replaces the GENERATE button after the GENERATE button is clicked).
 */
function initialize_application() {
    let time_stamped_message, events_log_div, output_div, canvas_container_div, generate_button_container_paragraph, function_menu_container_paragraph;
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
        // Populate the "generate_button_container" paragraph element with a button input web page element which calls the function named generate_triangle_using_input_coordinates().
        generate_button_container = document.getElementById("generate_button_container");
        generate_button_container.innerHTML = ('<' + 'input type="button" value="GENERATE" style="text-align:center" onclick="generate_triangle_using_input_coordinates()"' + '/' + '>')
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of initialize_application(): " + exception);
    }
}