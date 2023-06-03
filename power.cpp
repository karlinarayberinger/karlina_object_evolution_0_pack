/**
 * file: power.cpp
 * type: C++ (source file)
 * date: 03_JUNE_2023
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/* preprocessing directives */
#include <iostream> // command line input and command line output operations
#include <fstream> // file input and file output operations

// remove later
#include <cmath>

/*
#include <cmath> // power function (e.g. 8 = pow(2,3))
#define MAXIMUM_N 65 // constant which represents maximum N value
*/

/* function prototypes */
bool is_whole_number(double input);
double absolute_value(double input);
double power(double base, double exponent);

/**
 * Program Entry Point 
 */
int main() 
{
    // temp test:
    std::cout << "\n\npower(2, 3) := " << power(2, 3) << ".";
    std::cout << "\n\npow(2, 3) := " << pow(2, 3) << ".";
    std::cout << "\n\npow(2, 0.5) := " << pow(2, 0.5) << ".";
    // Program Exit Point
    return 0;
}

/**
 */
bool is_whole_number(double input) 
{
    //...
    return true;
}

/**
 * Assume that input is a real number value whose absolute value is no larger than MAXIMUM_N.
 */
double absolute_value(double input) 
{
    if (input < 0) input *= -1; // "input *= -1" is identical to "input = input * -1" is identical to "input = input * (-1)".
    return input;
}

/**
 */
double power(double base, double exponent) 
{
    int i = 0;
    double result = 1.0;
    if (exponent == 0) return 1; // Any real number to the power of zero is one.
    if (exponent == 1) return base; // Any real number X to the power of one is X.
    if (exponent > 1) 
    {
        if (is_whole_number(exponent))
        {
            i = exponent;
            while (i > 0) 
            {
                result = result * base;
                i = i - 1;
            }
            return result;
        }
        else 
        {
            //...
        }
        return result;
    }
    return 0.0;
}