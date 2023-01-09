/**
 * file: probability.js
 * type: JavaScript
 * date: 08_JANUARY_2023
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/**
 * Return a String type value which describes the number of milliseconds which have elapsed since the Unix Epoch.
 * 
 * Note that the Unix Epoch is 01_JANUARY_1970 at 0 hours, 0 minutes, 0 seconds, and 0 seconds 
 * (i.e. 00:00:00) (i.e. midnight) (Coordinated Universal Time (UTC)).
 * 
 * @return {String} text which denotes the number of milliseconds which have elapsed since the Unix Epoch
 */
function generate_time_stamp() {
    const milliseconds_elapsed_since_unix_epoch = Date.now();
    return milliseconds_elapsed_since_unix_epoch + " milliseconds since midnight on 01_JANUARY_1970.";
}

/**
 * Return an array of ten unique String type values such that each of those values is a unique HTML color code.
 * 
 * An HTML color code is a String whose leftmost character is '#' followed by two hexidecimal digits
 * which represent a RED hue, then two hexidecimal digits which represent a GREEN hue, and then
 * two hexidecimal digits which represent a BLUE hue.
 * 
 * The lower the hue value is, the darker that hue is.
 * The higher the hue value is, the brighter that hue is.
 * 
 * RED: #ff0000
 * GREEN: #00ff00
 * BLUE: #0000ff
 * MAGENTA: #ff00ff
 * CYAN: #00ffff
 * YELLOW: #ffff00
 * BLACK: #000000
 * WHITE: #ffffff
 * 
 * @return {Object} array of ten unique String type values
 */
function generate_color_values() {
    return ["#3cfa07", "#fa0738", "#0a7df7", "#b700ff", "#ffc800", "#00ff95", "#1a02b8", "#a89c87", "#4c7852", "#f5a9a9"];
}

/**
 * Return a String type value which will be used as the inner HTML content of the 
 * DIV element whose id is "c_menus" in probability.html.
 * 
 * The returned inner HTML string defines ten SELECT elements such that each SELECT element
 * is assigned the same id value as the background color of that SELECT element and
 * such that the SELECT menu displays the first 100 natural numbers in ascending order
 * as OPTION elements within that SELECT menu (and the first OPTION is selected by default).
 * 
 * @return {String} inner HTML content to populate the DIV element whose id is "c_menus"
 */
function populate_c_menus() {
    try {
        const p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>';
        let html_color_codes = generate_color_values();
        let T = html_color_codes.length;
        let i = 0, k = 0, S = "";
        for(i = 0; i < 10; i += 1) {
            S += p0;
            S += '<' + 'select id="' + html_color_codes[i] + '" style="background:' + html_color_code[i] + '"' + '>';
            for (k = 1; k <= 100; k += 1) {
                if (k === 1) S += '<' + 'option selected' + '>';
                else S += '<' + 'option' + '>';
                S += k;
                S += '<' + '/' + 'option' + '>';
            }
            S += '<' + '/' + 'select' + '>';
            S += p1;
        }
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of populate_c_menus(): " + exception);
    }
}

/**
 * Return the String type value of the selected menu option of a SELECT menu element.
 * 
 * Assume that select_menu_identifier is a String type value and the id of an existing select HTML element.
 * 
 * @param {String} id of a SELECT menu web page element
 * 
 * @return {String} value of an OPTION of the SELECT whose id is select_menu_identifier
 */
function get_selected_menu_option_value(select_menu_identifier) {
    try {
        let menu_object = {}, options_array = [], selected_option_index = 0, selected_option_object = {}, selected_option_value;
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
 * Assume that this function is called in response to either the web page named probability.html being loaded by a web browser 
 * or else the RESET button being clicked.
 * 
 * Set the GENERATE button to visible.
 * 
 * Set the RESET button to hidden.
 * 
 * Set the DIV whose id is "output" inner HTML content to some default message.
 * 
 * Set the DIV whose id is "events_log" inner HTML content to a message indicating that the initialize_application() function was called.
 */
function initialize_application() {
    try {
        const p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>';
        const message = "The initialize_application() function was called at time: " + generate_time_stamp();
        console.log(message);
        document.getElementById("events_log").innerHTML = p0 + message + p1;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of initialize_application(): " + exception);
    }
}


