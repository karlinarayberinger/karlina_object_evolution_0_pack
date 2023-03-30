/**
 * file: karbytes_utilities.js
 * type: JavaScript
 * author: karbytes
 * date: 29_MARCH_2023
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
 * (Note that the String type constant variable values are broken up into single-character String type values 
 * to avoid causing the WordPress web page editor to interpret HTML tags in the web page body with 
 * source code which is hosted on that web page inside of PRE (preformatted) web page elements).
 * 
 * @param {String} inner_html is assumed to be plain text or HTML content.
 * 
 * @return {String} a sequence of text characters which is used to instantiate a paragraph web page element.
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
 * Then multiply N by T, round the result down to the nearest integer, and return that rounded down result.
 * 
 * @param {Number} T is assumed to be a nonnegative integer.
 * 
 * @return {Number} a base-ten (i.e. decimal) integer no smaller than 0 and no larger than (T - 1).
 */
function generate_random_nonnegative_integer_less_than_T(T) {
    try {
        let N = generate_random_nonnegative_number_less_than_one();
        if (arguments.length !== 1) throw "Error: exactly one function input is required.";
        if ((typeof T != "number") || (T !== Math.floor(T)) || (T < 0)) throw "Error: T is required to be a nonnegative integer.";
        return Math.floor(N * T);
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_random_nonnegative_integer_less_than_T(T): " + exception);
    }
}