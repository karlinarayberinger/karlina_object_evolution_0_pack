/**
 * file: power.cpp
 * type: C++ (source file)
 * date: 28_MAY_2023
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/* preprocessing directives */
#include <iostream> // command line input and command line output operations
#include <fstream> // file input and file output operations

/*
#include <cmath> // power function (e.g. 8 = pow(2,3))
#define MAXIMUM_N 65 // constant which represents maximum N value
*/

/* function prototypes */
bool is_whole_number(double input);
double power(double base, double exponent);

/**
 * Program Entry Point 
 */
int main() 
{
    // Program Exit Point
    return 0;
}

/**
 */
bool is_whole_number(double input) 
{
    return true;
}

/**
 */
double power(double base, double exponent) 
{
    if (exponent == 0) return 1;
    if (exponent == 1) return base;
    return 0.0;
}