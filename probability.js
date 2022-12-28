/**
 * file: probability.js
 * type: JavaScript
 * date: 27_DECEMBER_2022
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/**
 * Return a String type value which describes the number of milliseconds which have elapsed since the Unix Epoch.
 * 
 * Note that the Unix Epoch is 01_JANUARY_1970 at 0 hours, 0 minutes, 0 seconds, and 0 seconds 
 * (i.e. 00:00:00) (i.e. midnight) (Coordinated Universal Time (UTC)).
 */
function generate_time_stamp() {
    const milliseconds_elapsed_since_unix_epoch = Date.now();
    return milliseconds_elapsed_since_unix_epoch + " milliseconds since midnight on 01_JANUARY_1970.";
}

/**
 * Return an array of ten String type values such that each of those values is a unique HTML color code.
 * 
 * An HTML color code is a String whose leftmost character is '#' followed by two hexidecimal digits
 * which represent a RED hue, then two hexidecimal digits which represent a GREEN hue, and then
 * two hexidecimal digits which represent a BLUE hue.
 * 
 * RED: #ff0000
 * GREEN: #00ff00
 * BLUE: #0000ff
 * MAGENTA: #ff00ff
 * CYAN: #00ffff
 * YELLOW: #ffff00
 * BLACK: #000000
 * WHITE: #ffffff
 */
function generate_color_values() {
    return ["#3cfa07", "#fa0738", "#0a7df7", "#b700ff", "#ffc800", "#00ff95", "#1a02b8", "#a89c87", "#4c7852", "#f5a9a9"];
}

/**
 * Return a String type value which will be used as the inner HTML content of the 
 * DIV element whose id is "c_menus" in probability.html.
 */
function populate_c_menus() {
    try {
        let html_color_codes = generate_color_values();
        let T = html_color_codes.length;
        let i = 0, S = "", p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>';
        for(i = 0; i < T; i += 1) {
            
        }
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of get_selected_menu_option(select_menu_identifier): " + exception);
    }
}

/**
 * Return the String type value of the selected menu option of a SELECT menu element.
 * 
 * Assume that select_menu_identifier is a String type value and the id of an existing select HTML element.
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

