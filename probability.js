/**
 * file: probability.js
 * type: JavaScript
 * date: 03_FEBRUARY_2023
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
 * Use the native JavaScript Math library function for generating random numbers to select a 
 * base-ten number no smaller than 0 and less than 1.
 * 
 * @return {Number} a base-ten (i.e. decimal) number no smaller than zero and smaller than one.
 */
function generate_random_nonnegative_number_less_than_one() {
    return Math.random();
}

/**
 * Use the native JavaScript Math library function for generating random numbers to select a base-ten 
 * number no smaller than 0 and less than 1 and store the result in a variable named N.
 * 
 * Multiply N by T, round the result down to the nearest integer, and return that rounded down result.
 * 
 * @param {Number} T is assumed to be a natural number no larger than 1000
 * 
 * @return {Number} a base-ten (i.e. decimal) integer no smaller than 0 and no larger than (T - 1).
 */
function generate_random_nonnegative_integer_less_than_T(T) {
    try {
        let N = generate_random_nonnegative_number_less_than_one();
        if (arguments.length !== 1) throw "Error: exactly one function input is required.";
        if ((typeof T != "number") || (T !== Math.floor(T)) || (T < 1) || (T > 1000)) throw "Error: T is required to be a natural number no larger than 1000.";
        return Math.floor(N * T);
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_random_nonnegative_integer_less_than_T(T): " + exception);
    }
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
        S += '<' + 'option value="PROBABILITY_WITH_REPLACEMENT" selected' + '>';
        S += "PROBABILITY_WITHOUT_REPLACEMENT";
        S += '<' + '/' + 'option' + '>';
        S += '<' + 'option value="PROBABILITY_WITH_REPLACEMENT"' + '>';
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
 * @param {String} select_menu_identififier is assumed to be the id of an existing SELECT menu web page element
 * 
 * @return {String} value of an OPTION of the SELECT whose id is select_menu_identifier
 */
function get_selected_menu_option_value(select_menu_identifier) {
    try {
        let menu_object = {}, options_array = [], selected_option_index = 0, selected_option_object = {}, selected_option_value;
        if (arguments.length !== 1) throw "Error: exactly one function input is required.";
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
 * @return {Object} an array containing exclusively String type elements which each represent one of ten unique HTML color code values.
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
 * For each unique color value which occurs as an element of A, generate a paragraph which displays the HTML color code associated with that color (String),
 * the number of times that particular color value occurs as an element of A (Number), and the expected probability that the color value will be
 * randomly selected from A (Number).
 * 
 * Assume that each random selection of one element from A is approximately equal in terms of randomness as every other random selection of one element from A
 * and that no particular color value is intrinsicall favored more or less than any other color from the list of ten unique colors which could be added to array A.
 * (What that means is that, if each one of the ten unique colors is selected to have the same quantity in A as every other one of those ten colors, 
 * then each of those color values is assumed to have the same probability of being selected during the first seclection of either A or else B).
 * 
 * @return {Object} array of JSON objects which textually depicts the contents of A based on what the user selected on the web page interface for unique color counts.
 */
function generate_initial_color_probabilities_list() {
    const p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>';
    let html_color_codes = undefined, total_number_of_elements_in_A = 0, selected_color_frequency = 0, i = 0, S = '', unique_color_counts_array = [], unique_color_count_object = {};
    try {
        html_color_codes = generate_color_values();
        for (i = 0; i < html_color_codes.length; i += 1) {
            selected_color_frequency = parseInt(get_selected_menu_option_value(html_color_codes[i]));
            // Only insert a JSON object into the statistics array if the frequency for that JSON object's corresponding color value is larger than zero.
            if (selected_color_frequency > 0) {
                unique_color_count_object.VALUE = html_color_codes[i];
                unique_color_count_object.FREQUENCY = selected_color_frequency;
                unique_color_counts_array.push(unique_color_count_object);
                total_number_of_elements_in_A += unique_color_count_object.FREQUENCY;
                unique_color_count_object = {};
            }
        }
        // Debugging: display the value of total_number_of_elements_in_A to the web console.
        // console.log("total_number_of_elements_in_A := " + total_number_of_elements_in_A + ".");
        for (i = 0; i < unique_color_counts_array.length; i += 1) {
            unique_color_counts_array[i].PROBABILITY = (unique_color_counts_array[i].FREQUENCY / total_number_of_elements_in_A);
            // Debugging: display the property values of the Object type value named unique_color_count_object to the web console.
            /*
            console.log("-------------------------------------");
            console.log("unique_color_counts_array[i].VALUE := " + unique_color_counts_array[i].VALUE + ". // HTML color code (String).");
            console.log("unique_color_counts_array[i].FREQUENCY := " + unique_color_counts_array[i].FREQUENCY + ". // number of occurrences in A (nonnegative integer).");
            console.log("unique_color_counts_array[i].PROBABILITY:= " + unique_color_counts_array[i].PROBABILITY + ". // likelihood of being selected in A (number which is no smaller than 0 and no larger than 1).");
            console.log("-------------------------------------");
            */
        }
        return unique_color_counts_array;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_initial_color_probabilities_list(): " + exception);
        return undefined;
    }
}

/**
 * Determine whether or not the input array is comprised exclusively of valid HTML color code values.
 * 
 * If erroneous input is detected or if a runtime error occurs, use a try-catch block for exception handling
 * which outputs a message to the web browser console about the type of runtime exception which was detected.
 * 
 * @param {Object} array is assumed to be a non-empty array containing no more than 1000 exclusively String type elements.
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
 * A unique_color_count_object is a JSON object comprised of the following three properties:
 * COLOR: {String} one of the ten unique HTML color codes comprising the array returned by generate_color_values().
 * FREQUENCY: {Number} a natural number no larger than 100.
 * PROBABILITY: {Number} a number which is larger than 0 and no larger than 1.
 * 
 * In order for the input array to be considered valid, 
 * that array must not contain more than ten elements,
 * each element of array must be formatted as a unique_color_count_object (as described above),
 * and each element of array must contain a unique COLOR property with respect to every other element or array.
 * 
 * @param {Object} array is assumed to be a non-empty array containing no more than 100 exclusively Object type elements.
 * 
 * @return {Boolean} true if array is an array comprised exclusively of valid unique_color_count_object array values; false otherwise.
 */
function validate_array_of_color_array_statistics(array) {
    try {
        let i = 0, k = 0, current_COLOR = "", current_FREQUENCY = 0, current_PROBABILITY = 0.0, is_valid_html_color_code = false;
        const html_color_codes = generate_color_values();
        let mutable_html_color_codes = generate_color_values();
        if (arguments.length !== 1) throw "Error: exactly one function input is required.";
        if (typeof array !== "object") throw "Error: array is required to be an Object type data value.";
        if (array.length < 11) throw "Error: array is required to contain no more than ten elements.";
        for (i = 0; i < array.length; i += 1) {
            // Type check the value represented by the ith element of array (i.e. array[i]).
            if (typeof array[i] !== "object") throw "Error: array[i] is required to be an Object type data value.";
            // Store the relevant property values of array[i] in respective variables.
            current_COLOR = array[i].COLOR;
            current_FREQUENCY = array[i].FREQUENCY;
            current_PROBABILITY = array[i].PROBABILITY;
            // Type check the property values of the object represented by array[i].
            if (typeof current_COLOR !== "string") throw "Error: array[i].COLOR is required to be a String type data value.";
            if (typeof current_FREQUENCY !== "number") throw "Error: array[i].FREQUENCY is required to be a Number type data value.";
            if (typeof current_PROBABILITY !== "number") throw "Error: array[i].PROBABILITY is required to be a Number type data value.";
            // Require that current_COLOR occurs as an element value of the array named html_color_codes.
            is_valid_html_color_code = false;
            for (k = 0; k < html_color_codes.length; k += 1) if(current_COLOR === html_color_codes[k]) is_valid_html_color_code = true;
            if (!is_valid_html_color_code) throw "Error: current_COLOR is not an element of the array returned by generate_color_values().";
            // Require that exactly one instance of current_COLOR occurs in array.
            is_valid_html_color_code = false;
            for (k = 0; k < mutable_html_color_codes.length; k += 1) if (current_COLOR === mutable_html_color_codes[k]) is_valid_html_color_code = true;
            if (!is_valid_html_color_code) throw "Error: current_COLOR is not an element of the array named mutable_html_color_codes.";
            // Remove the element from mutable_html_color_codes whose value is identical to current_COLOR.
            for (k = 0; k < mutable_html_color_codes.length; k += 1) {
                if (current_COLOR === mutable_html_color_codes[k]) {
                    // Remove mutable_html_color_codes[k] from mutable_html_color_codes.
                    mutable_html_color_codes.splice(k,1); 
                }
            }
            // Require that current_FREQUENCY be a natural number no larger than ten.
            if ((current_FREQUENCY !== parseInt(current_FREQUENCY)) || (current_FREQUENCY < 1) || (current_FREQUENCY > 10)) throw "Error: current_FREQUENCY is required to be a natural number no larger than ten.";
            // Require that current_PROBABILITY be a number which is larger than zero and no larger than one.
            if ((current_PROBABILITY < 0) || (current_PROBABILITY > 1)) throw "Error: current_PROBABILITY is required to be a natural number no larger than ten.";
        }
        return true;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of validate_array_of_color_array_statistics(array): " + exception);
        return false;
    }
}

/**
 * Copy the contents of array A into a new array named B such that the elements of A are each of the elements of A (but the elements of B are arranged in a randomized order).
 * 
 * @param {Object} A is assumed to be a non-empty array containing no more than 1000 exclusively String type elements which each represent one of ten unique HTML color code values.
 * 
 * @return {Object} an array containing each of the elements of A arranged in a randomized order (if no runtime errors occur (and undefined otherwise)).
 */
function generate_array_B(A) {
    let B, C, i, r;
    B = [], C = [];
    try {
       if (!validate_array_of_color_values(A)) throw "Error: validate_array_of_color_values(A) returned false.";
       // Populate array C with the elements of array A such that the elements of C are arranged in the same order as the elements of A are arranged.
       for (i = 0; i < A.length; i += 1) C.push(A[i]);
       // Until array C is empty, randomly remove an element from C and place it into B.
       while (C.length > 0) {
            for (i = 0; i < C.length; i += 1) {
                r = generate_random_nonnegative_integer_less_than_T(C.length);
                B.push(C[r]); // Insert C[r] into B at the right end of B.
                C.splice(r,1); // At position r, remove one element.
            }
       }
       return B;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_array_B(A): " + exception);
    }
}

/**
 * Generate an HTML content string to be appended to the inner HTMl of the DIV element whose id is "output".
 * 
 * The string which is returned by this function represents a TABLE which has two columns and as many rows
 * as there are elements in array.
 * 
 * The left column denotes the index value of an array element.
 * 
 * The right column denotes the value of the the array element whose index number is the adjacent left table data cell value.
 *  
 * The string which is returned by this function represents a TABLE whose cells (table data (TD))
 * each represent exactly one element of array (and that table cell depicts the corresponding HTML color code
 * value (which is a String-type element of array) as black text and as the background color of that cell).
 * 
 * The background color of each table data cell which contains an array element index value is CYAN.
 * 
 * The background color of each table data cell which contains an array element value is identical to that array element value.
 * 
 * The text color of each table data cell is black.
 * 
 * @param {Object} array is assumed to be a non-empty array whose elements are exclusively HTML color code (String type) values.
 * 
 * @return {String} HTML content which visually depicts the contents of A.
 */
function generate_array_visual_representation(array) {
    const p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>';
    const tr0 = '<' + 'tr' + '>', tr1 = '<' + '/' + 'tr' + '>';
    const t0 = '<' + 'table' + '>', t1 = '<' + '/' + 'table' + '>';
    let i = 0, S = '';
    try {
       if (!validate_array_of_color_values(array)) throw "Error: validate_array_of_color_values(array) returned false.";
       S += p0 + t0;
       for (i = 0; i < array.length; i += 1) { 
            S += tr0;
            S += '<' + 'td style="background:#00ffff;color:#000000;text-align:center"' + '>' + i + '<' + '/' + 'td' + '>';
            S += '<' + 'td style="background:' + array[i] + ';color:#000000;text-align:center"' + '>' + array[i] + '<' + '/' + 'td' + '>';
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
 * For each call to this function, randomly select one element of colors_array to be removed.
 * Then update statistics_array accordingly.
 * 
 * If probability_type is "PROBABILITY_WITH_REPLACEMENT", then insert a new randomly generated color value
 * which is one of the ten unique HTML color code values displayed on the web page interface.
 * Then update statistics_array accordingly.
 * 
 * @param {Object} colors_array is assumed to be array B.
 * 
 * @param {Object} statistics_array is assumed to be P (i.e. the arary returned by the call to generate_initial_color_probabilities_list() in the generate() function).
 * 
 * @param {String} probability_type is assumed to either be "PROBABILITY_WITHOUT_REPLACEMENT" or else "PROBABILITY_WITH_REPLACEMENT".
 * 
 * @return {Object} the modified input array after removing (and possibly replacing) one of the elements from the array.
 */
function randomly_select_element_from_array(colors_array, statistics_array, probability_type) {
    try {
        if (arguments.length !== 3) throw "Error: exactly three function inputs are required.";
        if (!validate_array_of_color_values(colors_array)) throw "Error: validate_array_of_color_values(colors_array) returned false.";
        if (!validate_array_of_color_array_statistics(statistics_array)) throw "Error: validate_array_of_color_array_statistics(statistics_array) returned false.";
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of randomly_select_element_from_array(colors_array, statistics_array, probability_type): " + exception);
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
        let i = 0, N = 0, selected_probability_type = "", A = undefined, P = undefined;
        const p0 = '<' + 'p' + '>', p1 = '<' + '/' + 'p' + '>', html_color_codes = generate_color_values();
        const divider_line = p0 + "------------------------------------------------------------------" + p1;
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
        document.getElementById("output").innerHTML = divider_line;
        document.getElementById("output").innerHTML += p0 + "Array A: (colors according to selected frequencies)" + p1;
        document.getElementById("output").innerHTML += generate_array_visual_representation(A);
        document.getElementById("output").innerHTML += divider_line;
        // Generate a textual description of the contents of A in terms of color value quantities and the probabilities which are dependent on such quantities.
        P = generate_initial_color_probabilities_list();
        document.getElementById("output").innerHTML += p0 + "Array A Statistics:" + p1;
        for (i = 0; i < P.length; i += 1) {
            document.getElementById("output").innerHTML += p0;
            document.getElementById("output").innerHTML += "{ VALUE: " + P[i].VALUE + ", ";
            document.getElementById("output").innerHTML += "FREQUENCY: " + P[i].FREQUENCY + ", ";
            document.getElementById("output").innerHTML += "PROBABILITY: " + P[i].PROBABILITY + " }";
            document.getElementById("output").innerHTML += p1;
        }
        // Generate array B and display it on the web page interface inside of the DIV element whose id is "output".
        B = generate_array_B(A);
        document.getElementById("output").innerHTML += divider_line;
        document.getElementById("output").innerHTML += p0 + "Array B: (randomized version of A)" + p1;
        document.getElementById("output").innerHTML += generate_array_visual_representation(B);
        document.getElementById("output").innerHTML += divider_line;
        // Display whether PROBABILITY_WITHOUT_REPLACEMENT or else PROBABILITY_WITH_REPLACEMENT was selected by the application user.
        selected_probability_type = get_selected_menu_option_value("probability_options");
        document.getElementById("output").innerHTML += p0 + "Probability Type: " + selected_probability_type + p1;
        // Display the value of N (and N represents the number random selections to perform on array B).
        N = A.length;
        document.getElementById("output").innerHTML += p0 + "N: " + N + " (number of random selections to perform on B)" + p1;
        document.getElementById("output").innerHTML += divider_line;
        // For each one of the N random selections from array B, display the selected array element and statistics about array B after B is updated as a result of that selection.
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate(): " + exception);
    }
}