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
 */
function generate_array_of_objects_representing_all_possible_T_values() {
    const array_of_objects = [];
    let i = 0, current_object = {html_color_code: "#RRGGBB", T_nonnegative_integer_value: 0};
    //...
    return array_of_objects;
}