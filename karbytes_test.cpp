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
bool is_whole_number(double x);
bool is_even_number(double x);
double absolute_value(double x);
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
 * If x is determined to be a whole number, return true.
 * Otherwise, return false.
 */
bool is_whole_number(double x)
{
    return (x == (long int) x); 
}

/**
 * If x is determined to be an even number, return true.
 * Otherwise, return false.
 */
bool is_even_number(double x)
{
    if (!is_whole_number(x)) return false;
    return (0 == ((long int) x % 2));
}

/**
 * Return the absolute value of a real number input, x.
 */
double absolute_value(double x)
{
    if (x < 0) return -1 * x;
    return x;
}

/**
 * Reverse engineer the cmath pow() function 
 * using the following property of natural logarithms:
 * 
 * ln(x ^ y) = y * ln(x)
 * 
 * A potentially useful property of logarithms in general 
 * is the following:
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
 * 
 * Note that any number, x, raised to the power of 0 is 1.
 * In more succinct terms, x ^ 0 = 1.
 * 
 * Note that any number, x, raised to the power of 1 is x.
 * In more succinct terms, x ^ 1 = x.
 * 
 * Note that any real number, x, 
 * raised to the power of a positive whole number exponent, y, 
 * is x multiplied by itself y times.
 * For example, if x is 2 and y is 3, 
 * 2 ^ 3 = power(2,3) = 2 * 2 * 2 = 8.
 * 
 * Note that any real number, x, 
 * raised to the power of a negative exponent, y, 
 * is 1 / (x ^ -y).
 * For example, if x is 2 and y is -3,
 * 2 ^ -3 = power(2,-3) = 1 / (2 * 2 * 2) = 1/8 = 0.125.
 */
double power(double base, double exponent)
{
    double output = 1.0;
    if (exponent == 0) return 1; 
    if (exponent == 1) return base;
    if (is_whole_number(exponent) && (absolute_value(exponent) > 0))
    {
        if (exponent > 0)
        {
            while (exponent > 0) 
            {
                output *= base;
                exponent -= 1;
            }
            return output;
        }
        else 
        {
            exponent = absolute_value(exponent);
            while (exponent > 0)
            {
                output *= base;
                exponent -= 1;
            }
            return 1 / output;
        }
    }
    /*
    if (base < 0) 
    {
        output = exp(log(absolute_value(base)) * exponent);
       if (exponent )
    }*/
    /*
    // Return e ^ (ln(base) * exponent).
    return exp(log(base) * exponent);
    */
    return 666;
}