/**
 * file: probability.js
 * type: JavaScript
 * date: 27_DECEMBER_2022
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/**
 * Return a String which describes the number of milliseconds which have elapsed since the Unix Epoch.
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

function initialize_application() {
    let colors = generate_color_values(), i = 0, N = 10, S = "";
    for (i = 0; i < N; i++) S += '<' + 'p style="background:' + colors[i] + '"' + '>' + colors[i] + '<' + '/' + 'p' + '>';
    document.getElementById("output").innerHTML = S;
}

