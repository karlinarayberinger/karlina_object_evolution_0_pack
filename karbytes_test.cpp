/**
 * file: karbytes_test.cpp
 * type: C++ (source file)
 * date: 09_JUNE_2023
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

// preprocessing directives
#include <iostream> 
#include <cmath>

// function prototypes
double power(double base, double exponent);

/**
 * program entry point
 */
int main()
{
    // Declare required variables.
    double base, exponent, result;

    // Get user input.
    std::cout << "\n\nInput Base: ";
    std::cin >> base;
    std::cout << "\n\nInput Exponent: ";
    std::cin >> exponent;

    // Compute base to the power of exponent.
    result = power(base, exponent);

    // Output result.
    std::cout << "\n\nResult is: " << result << "\n\n";

    // program exit point
    return 0;
}

/**
 * Reverse engineer the cmath pow() function 
 * using the following property of natural logarithms:
 * 
 * ln(x ^ y) = y * ln(x)
 * 
 * A relevant property of logarithms in general is the following:
 * 
 * For a log of any positive number base, b,
 * log(x) = ln(x) / ln(b).
 * 
 * Note that the base of the logarithmic function 
 * used by the cmath log() function is 
 * (approximately) Euler's Number.
 * 
 * Hence, log(x) is approximately the 
 * natural log of x (i.e. ln(x)).
 * 
 * Note that the base of the exponential function
 * used by the cmath exp() function is
 * (approximately) Euler's Number.
 * 
 * Hence, exp(x) is approcimately 
 * x ^ e (where e is approximately Euler's Number).
 */
double power(double base, double exponent)
{
    // Return e ^ (ln(base) * exponent).
    return exp(log(base) * exponent);
}