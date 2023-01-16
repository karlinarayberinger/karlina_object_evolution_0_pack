/**
 * file: probability.js
 * type: JavaScript
 * date: 15_JANUARY_2023
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
        const html_color_codes = generate_color_values();
        let T = html_color_codes.length;
        let i = 0, k = 0, S = "";
        for(i = 0; i < 10; i += 1) {
            S += p0;
            S += html_color_codes[i] + " := ";

            S += '<' + 'select id="' + html_color_codes[i] + '" style="color:#000000;background:' + html_color_codes[i] + '"' + '>';
            for (k = 0; k <= 100; k += 1) {
                if (k === 0) S += '<' + 'option selected' + '>';
                else S += '<' + 'option' + '>';
                S += k;
                S += '<' + '/' + 'option' + '>';
            }
            S += '<' + '/' + 'select' + '>';
            S += p1;
        }
        return S;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of populate_c_menus(): " + exception);
    }
}

/**
 * Return a String type value which will be used as the inner HTML content of the 
 * P element whose id is "p_menu" in probability.html.
 * 
 * The returned inner HTML string defines a SELECT element whose options are
 * PROBABILITY_WITHOUT_REPLACEMENT or PROBABILITY_WITH_REPLACEMENT.
 * 
 * Note that the PROBABILITY_WITHOUT_REPLACEMENT option is automatically selected 
 * if the application user does not click on the SELECT element whose id is "probability_options".
 * 
 * @return {String} inner HTML content to populate the DIV element whose id is "c_menus"
 */
function populate_p_menu() {
    try {
        const p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>';
        let S = '<' + 'select class="console" id="probability_options"' + '>';
        S += '<' + 'option value="probability_without_replacement" selected' + '>';
        S += "PROBABILITY_WITHOUT_REPLACEMENT";
        S += '<' + '/' + 'option' + '>';
        S += '<' + 'option value="probability_with_replacement"' + '>';
        S += "PROBABILITY_WITH_REPLACEMENT";
        S += '<' + '/' + 'option' + '>';
        S += '<' + '/' + 'select' + '>';
        return S;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of populate_p_menu(): " + exception);
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
 * Populate the DIV element whose id is "c_menus" with a SELECT menu for each one of the ten COLOR values used by this web application.
 * 
 * Populate the P element whose id is "p_menu" with a SELECT menu for the options of whether to use PROBABILITY_WITHOUT_REPLACEMENT
 * or else PROBABILITY_WITH_REPLACEMENT.
 * 
 * Set the GENERATE button to visible.
 * 
 * Set the RESET button to hidden.
 * 
 * Set the DIV element whose id is "output" inner HTML content to some default message.
 * 
 * Set the DIV element whose id is "events_log" inner HTML content to a message indicating that the initialize_application() function was called.
 */
function initialize_application() {
    try {
        const p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>';
        const message = "The initialize_application() function was called at time: " + generate_time_stamp();
        console.log(message);
        document.getElementById("c_menus").innerHTML = populate_c_menus();
        document.getElementById("p_menu").innerHTML = populate_p_menu();
        document.getElementById("generate_button").style.display = "inline";
        document.getElementById("reset_button").style.display = "none";
        document.getElementById("output").innerHTML = p0 + "This text will be replaced with program output." + p1;
        document.getElementById("events_log").innerHTML = p0 + message + p1;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of initialize_application(): " + exception);
    }
}

/**
 * Create an emtpy array named A.
 * 
 * For each one of the ten unique HTML color code values displayed on the web page named probability.html,
 * extract the selected quantity option for in the SELECT menu element which is accociate with that particular color value
 * and insert that color value into A as many times as that quantity represents (i.e. some nonnegative integer less than 100).
 * 
 * Return A after all the color values are inserted into A.
 * 
 * @return {Object} an array containing String type elements which each represent one of ten unique HTML color code values.
 */
function generate_array_A() {
    try {
        let i = 0, k = 0, A = [], selected_quantity = 0;
        const html_color_codes = generate_color_values();
        for (i = 0; i < html_color_codes.length; i += 1) {
            selected_quantity = parseInt(get_selected_menu_option_value(html_color_codes[i]));
            for (k = 0; k < selected_quantity; k += 1) A.push(html_color_codes[i]);
        }
        // Debugging: display a web console message for each element value of array.
        // for (i = 0; i < A.length; i++) console.log("A[" + i + "] := " + A[i] + ".");
        return A;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_array_A(): " + exception);
    }
}

/**
 * Determine whether or not the input array is comprised exclusively of valid HTML color code values.
 * 
 * If erroneous input is detected or if a runtime error occurs, use a try-catch block for exception handling
 * which outputs a message to the web browser console about the type of runtime exception which was detected.
 * 
 * @param {Object} array is assumed to be a non-empty array containing exclusively String type elements.
 * 
 * @return {Boolean} true if array is an array comprised exclusively of valid HTML color code values; false otherwise.
 */
function validate_array_of_color_values(array) {
    try {
        const hexidecimal_digits = "0123456789abcdef";
        let i = 0, k = 0, p = 0, S = "", is_hexidecimal_digit = false;
        if (arguments.length !== 1) throw "Error: exactly one function input is required.";
        for (i = 0; i < array.length; i += 1) {
            if (typeof array[i] !== "string") throw "Error: array[" + i + "] does not represent a String type value."
            if (array[i].length !== 7) throw "Error: array[" + i + "] does not represent a string comprised of exactly 7 characters.";
            if (array[i][0] !== "#") throw "Error: The first character of the string represented by array[" + i + "] does is not '#'.";
            if (i > 0) {
                for (k = 0; k < array[i].length; k++) {
                    for (p = 0; p < hexidecimal_digits.length; p++) {
                        if (array[i][k] === hexidecimal_digits[p]) {
                            is_hexidecimal_digit = true;
                        }
                    }
                }
                if (!is_hexidecimal_digit) throw "Error: array[" + i + "][" + k + "] does not represent a valid hexidecimal digit.";
                is_hexidecimal_digit = false;
            }
        }
        return true;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of validate_array_of_color_values(array): " + exception);
        return false;
    }
}

/**
 * 
 */
function generate_array_B(A) {
    let B, C, i;
    C = [];
    try {
       if (!validate_array_of_color_values(A)) throw "Status: validate_array_of_color_values(A) returned false.";
       for (i = 0; i < A.length; i += 1) {
            B[i] = 0;
            C[i] = A[i];
       }
       return B;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_array_B(A): " + exception);
    }
}

/**
 * Generate an HTML content string to be appended to the inner HTMl of the DIV element whose id is "output" 
 * such that the string which is returned by this function represents a TABLE whose cells (table data (TD))
 * each represents exactly one element of array (and that table cell depicts the corresponding HTML color code
 * value (which is a String-type element of array) as black text and as the background color of that cell).
 * 
 * @param {Object} a non-empty array whose elements are exclusively HTML color code values.
 * 
 * @return {String} HTML content which visually depicts the contents of A.
 */
function generate_array_visual_representation(array) {
    const p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>';
    const tr0 = '<' + 'tr' + '>', tr1 = '<' + '/' + 'tr' + '>';
    const t0 = '<' + 'table' + '>', t1 = '<' + '/' + 'table' + '>';
    let i = 0, S = '';
    try {
       if (!validate_array_of_color_values(array)) throw "Status: validate_array_of_color_values(array) returned false.";
       S += p0 + t0;
       for (i = 0; i < array.length; i += 1) {
            S += tr0;
            S += '<' + 'td style="background:' + array[i] + '; color:#000000; text-align: center"' + '>';
            S += array[i];
            S += '<' + '/' + 'td' + '>';
            S += tr1;
       }
       S += t1 + p1;
       return S;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_array_visual_representation(array): " + exception);
        return p0 + "ERROR" + p1;
    }
}

/**
 * Assume that this function is called in response to the event of a GENERATE button click.
 * 
 * Set each of the ten SELECT elements for unique HTML color values to disabled.
 * 
 * Set the SELECT element for whether to use PROBABILITY_WITHOUT_REPLACEMENT or 
 * else PROBABILITY_WIT_REPLACEMENT to disabled.
 * 
 * Set the GENERATE button to hidden.
 * 
 * Set the RESET button to visible.
 * 
 * Append a paragraph to the inner HTML conent of the DIV element whose id is "events_log" to a message 
 * indicating that the generate() function was called.
 */
function generate() {
    try {
        let i = 0, A = undefined;
        const p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>', html_color_codes = generate_color_values();
        const message = "The generate() function was called at time: " + generate_time_stamp();
        console.log(message);
        // Update the web page user interface such that the RESET button is the only interactive web page element.
        for (i = 0; i < 10; i += 1) document.getElementById(html_color_codes[i]).disabled = true;
        document.getElementById("probability_options").disabled = true;
        document.getElementById("generate_button").style.display = "none";
        document.getElementById("reset_button").style.display = "inline";
        document.getElementById("events_log").innerHTML += p0 + message + p1;
        // Generate array A and display it on the web page interface inside of the DIV element whose id is "output".
        A = generate_array_A();
        document.getElementById("output").innerHTML = p0 + "Array A:" + p1;
        document.getElementById("output").innerHTML += generate_array_visual_representation(A);
        // Generate array B and display it on the web page interface inside of the DIV element whose id is "output".
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate(): " + exception);
    }
}