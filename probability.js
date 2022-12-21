/**
 * file: probability.js
 * type: JavaScript
 * date: 20_DECEMBER_2022
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/**
 * Get the Number of milliseconds which have elapsed since the Unix Epoch.
 * The Unix Epoch is 01_JANUARY_1970 at midnight (Coordinated Universal Time (UTC)).
 * 
 * @return {String} message displaying the time at which this function was called.
 */
function generate_time_stamp() {
    const milliseconds_elapsed_since_unix_epoch = Date.now();
    return  milliseconds_elapsed_since_unix_epoch + " milliseconds since midnight on 01_JANUARY_1970.";
}

/**
 * Return an array of objects such that each object represents a unqique HTML color code 
 * and corresponding nonnegative integer value no larger than the cardinality of the returned array
 * (and every nonnegative integer value no larger than the cardinality of the returned array is
 * included exactly one time as an object property value throughout the entire array of objects).
 * 
 * @return {Object} an array comprised of Object type elements.
 */
function generate_array_of_objects_representing_all_possible_T_values() {
    const array_of_objects = [];
    let i = 0, current_object = {html_color_code: "#RRGGBB", T_nonnegative_integer_value: 0};
    //...
    return array_of_objects;
}

/**
 * Return an array of objects such that each object represents one of the first T
 * nonnegative integer values.
 * 
 * Select each nonnegative integer value at random.
 * 
 * @return {Object} an array comprised of Object type elements.
 */
function generate_array_of_random_objects_representing_T_values() {
    const array_of_objects = [];
    let i = 0, current_object = {html_color_code: "#RRGGBB", T_nonnegative_integer_value: 0};
    //...
    return array_of_objects;
}

/**
 * Let A represent the set of objects which is metaphorically represented as a 
 * palette of paint filling a tray of S colors.
 * 
 * (It is possible for A to contain multiple palette wells which are filled with the same
 * color of paint. For example, if the user selects 5 for the T value and 3 for the S value,
 * A may instantiate as a palette comprised only of one paint well filled with RED paint and
 * two paint wells filled with GREEN paint).
 * 
 * Array A is generated before array B is generated.
 * 
 * @return {Object} an array comprised of Object type elements.
 */
function generate_array_A() {
    return generate_array_of_random_objects_representing_T_values();
}

/**
 * Let B represent a set of objects which is metaphorically represented as a 
 * canvas being painted by the palette of paint represented by array A.
 * 
 * Array B is generated after array A is generated.
 * 
 * @return {Object} an array comprised of Object type elements.
 */
function generate_array_B() {
    //...
}

/**
 * Let C represent a set of objects which is metaphorically represented as a 
 * canvas being painted by the palette of paint represented by array A.
 * 
 * Array C is generated after array B is generated.
 * 
 * @return {Object} an array comprised of Object type elements.
 */
function generate_array_C() {
    //...
}

/**
 * Let D represent a set of objects which is metaphorically represented as a 
 * canvas being painted by the palette of paint represented by array A.
 * 
 * Array D is generated after array B is generated.
 * 
 * @return {Object} an array comprised of Object type elements.
 */
function generate_array_D() {
    //...
}

/**
 * Change the content displayed in the div whose id is "output"
 * to statistics about arrays A, B, C, and D.
 * 
 * Display the contents of each array (empirical).
 * 
 * Display counts of each T state (empirical-logical).
 * 
 * Display probabilities of each unique value in A (empirical-logical).
 * 
 * Display probabilities of each unique value in B (logical).
 * 
 * Display probabilities of each unique value in C (logical).
 * 
 * Display probabilities of each unique value in D (logical).
 * 
 * Display a histogram describing the contents of array A.
 * 
 * Display a histogram describing the contents of array B.
 * 
 * Display a histogram describing the contents of array C.
 * 
 * Display a histogram describing the contents of array D.
 */
function populate_output_div_with_statistics_about_arrays_A_B_C_D() {
    // array_0 represents the set of all possible states for T.
    let array_0;
    // array_1 represents the set of all possible states for 
    //...
}

/**
 * Insert a select element which displays every nonnegative integer in ascending order 
 * which is less than or equal to the natural number (S - 1) into the paragraph element
 * whose id is "S_menu_paragraph".
 */
function populate_S_menu_paragraph() {
    //..
}

/**
 * Insert a select element which displays every nonnegative integer in ascending order 
 * which is less than or equal to the natural number (T - 1) into the paragraph element
 * whose id is "T_menu_paragraph".
 */
function populate_T_menu_paragraph() {
    //...
}

/**
 * Insert a select element which displays one of the two options of random events to simulate:
 * 
 * - probability_with_replacement : randomly select an element from either array B or else array C or else array D to remove such that the cardinality of the array is unchanged
 *                                  due to the fact that, after the selected element is removed, a new randomly generated new object which is created by randomly selecting an 
 *                                  element of array A and making a copy of that element to put inside the array which an element was removed from.
 * 
 * - probability_without_replacement : for each event, randomly select an element from either array B or else array C or else array D to remove such that the array loses one element.
 */
function populate_universe_menu_paragraph() {
    //...
}

/**
 * Display a time stamped message inside of the div element whose id is "output".
 * 
 * Set the web page whose source code is defined in the HTML file named probability.html
 * to be in its initial state.
 * 
 * Assume that this function is called when the web page is loaded by a web browswer
 * or else refreshed by a web browser.
 */
function initialize_application() {
    try {
        const page_loaded_message = ("function initialize_application() was called at time: " + generate_time_stamp()), p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
        const output_initial_message = "Statistics about the probability of each T state manifesting (abstract) and being empirically observed (concrete) will be displayed as cyan text (replacing this text) when the START button is clicked.";
        console.log(page_loaded_message);
        document.getElementById("log").innerHTML = p0 + page_loaded_message + p1;
        document.getElementById("output").innerHTML = p0 + output_initial_message + p1;
        document.getElementById("start_button").style.display = "block";
    }
    catch(e) {
        console.log("An exception to normal functioning occurred during the runtime of initialize_application(): " + e);
    }
}

/**
 * Respond to the event of a START button click.
 * 
 * Display a time stamped message inside of the div element whose id is "output".
 * 
 * Hide all select menus and buttons.
 * 
 * Display program output.
 */
function start() {
    try {
        const start_button_clicked_message = ("function start() was called at time: " + generate_time_stamp()), p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
        const output_initial_message = "Statistics about the probability of each T state manifesting (abstract) and being empirically observed (concrete) will be displayed as cyan text (replacing this text) when the START button is clicked.";
        let statistics_string = "// statistics_string";
        console.log(start_button_clicked_message);
        //...
        document.getElementById("log").innerHTML = p0 + start_button_clicked_message + p1;
        document.getElementById("output").innerHTML = p0 + statistics_string + p1;
        document.getElementById("start_button").style.display = "none";
    }
    catch(e) {
        console.log("An exception to normal functioning occurred during the runtime of start(): " + e);
    }
}
