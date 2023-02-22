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
        if (typeof inner_html.length !== "number") throw '(typeof inner_html.length !== "number") was evaluated as true.';
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
 *                 "a_x_menu_container" or else
 *                 "a_y_menu_container" or else
 *                 "b_x_menu_container" or else
 *                 "b_y_menu_container" or else
 *                 "c_x_menu_container" or else
 *                 "c_y_menu_container". 
 * 
 * @return {String} a sequence of text characters which is used to instantiate an expandable list menu (SELECT) web page element.
 */
function generate_coordinate_menu_select_html_element(select_id) {
    let select_menu = '', option = '', i = 0;
    try {
        if (typeof select_id.length !== "number") throw '(typeof select_id.length !== "number") was evaluated as true.';
        if ((select_id !== "a_x_menu_container") && (select_id !== "a_y_menu_container") && 
            (select_id !== "b_x_menu_container") && (select_id !== "b_y_menu_container") &&
            (select_id !== "c_x_menu_container") && (select_id !== "c_y_menu_container"))
        throw 'select_id must either be "a_x_menu_container" or else "a_y_menu_container" or ' + 
               'else "b_x_menu_container" or else "b_y_menu_container" or ' + 
               'else "c_x_menu_container" or else "c_y_menu_container".';
        select_menu = ('<' + 'select id="' + select_id + '">');
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
 * ... (reverse abstract to concrete) ...
 */
function initialize_application() {
    let cartesian_plane_canvas = "";
    let time_stamped_message = "", initial_output_message = "";
    let output_div = undefined, events_log_div = undefined, generate_button_container_paragraph = undefined;
    let a_x_menu_container_paragraph = undefined, a_y_menu_container_paragraph = undefined;
    let b_x_menu_container_paragraph = undefined, b_y_menu_container_paragraph = undefined;
    let c_x_menu_container_paragraph = undefined, c_y_menu_container_paragraph = undefined;
    try {
        // Populate the "event_log" div with a time stamped message indicating that this function was called.
        time_stamped_message = generate_paragraph_html_element("The function named initialize_application() was called at time: " + generate_time_stamp());
        events_log_div = document.getElementById("events_log");
        events_log_div.innerHTML = time_stamped_message;
        // Populate the "output" div with a canvas web page element.
        cartesian_plane_canvas = (('<' + 'canvas id="cartesian_plane" width="750" height="750" style="background:#ffffff">') + ('<' + '/' + '>'));
        output_div = document.getElementById("output");
        output_div.innerHTML = cartesian_plane_canvas
        //... ... (reverse abstract to concrete) ...
        console.log(generate_coordinate_menu_select_html_element("thing"));
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of initialize_application(): " + exception);
    }
}