/**
 * file: power.cpp
 * type: C++ (source file)
 * date: 11_JUNE_2023
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/* preprocessing directives */
#include <iostream> // standard input (std::cin), standard output (std::cout)
#include <fstream> // file input, file output
#include <cmath> // exp() and log() functions
#define MAXIMUM_ABSOLUTE_VALUE_BASE 100 // constant which represents maximum absolute value for base
#define MAXIMUM_ABSOLUTE_VALUE_EXPONENT 100 // constant which represents maximum absolute value for exponent

/* function prototypes */
bool is_whole_number(double x);
double absolute_value(double x);
double power(double base, double exponent);

/**
 * program entry point 
 */
int main()
{
    // Declare a file output stream object named file.
    std::ofstream file;

    // Declare three variables for storing floating-point number values.
    double base = 0.0, exponent = 0.0, result = 0.0;

    // Declare a variable for storing the program user's answer of whether or not to continue inputting values.
    int input_additional_values = 1;

    // Set the number of digits of floating-point numbers which are printed to the command line terminal to 100 digits.
    std::cout.precision(100);

    // Set the number of digits of floating-point numbers which are printed to the file output stream to 100 digits.
    file.precision(100);

    /**
     * If the file named power_output.txt does not already exist 
     * inside of the same file directory as the file named power.cpp, 
     * create a new file named power_output.txt in that directory.
     * 
     * Open the plain-text file named power_output.txt 
     * and set that file to be overwritten with program data.
     */
    file.open("power_output.txt");

    // Print an opening message to the command line terminal.
    std::cout << "\n\n--------------------------------";
    std::cout << "\nSTART OF PROGRAM";
    std::cout << "\n--------------------------------";

    // Print an opening message to the file output stream.
    file << "--------------------------------";
    file << "\nSTART OF PROGRAM";
    file << "\n--------------------------------";

    while (input_additional_values != 0)
    {
        // Prompt the user to enter a value to store in the variable named base (to the command line terminal).
        std::cout << "\n\nEnter a real number value for base which is no larger than ";
        std::cout << MAXIMUM_ABSOLUTE_VALUE_BASE;
        std::cout << " and no smaller than ";
        std::cout << (-1 * MAXIMUM_ABSOLUTE_VALUE_BASE) << ": ";

        // Print the prompt for entering a base value to the file output stream.
        file << "\n\nEnter a real number value for base which is no larger than ";
        file << MAXIMUM_ABSOLUTE_VALUE_BASE;
        file << " and no smaller than ";
        file << (-1 * MAXIMUM_ABSOLUTE_VALUE_BASE) << ": ";

        // Print the most recently input keyboard value to the command line terminal.
        std::cout << base;

        // Print the most recently input keyboard value to the file output stream.
        file << base;

        // Prompt the user to enter a value to store in the variable named exponent (to the command line terminal).
        std::cout << "\n\nEnter a real number value for exponent which is no larger than ";
        std::cout << MAXIMUM_ABSOLUTE_VALUE_EXPONENT;
        std::cout << " and no smaller than ";
        std::cout << (-1 * MAXIMUM_ABSOLUTE_VALUE_EXPONENT) << ": ";

        // Print the prompt for entering an exponent value to the output file.
        file << "\n\nEnter a real number value for exponent which is no larger than ";
        file << MAXIMUM_ABSOLUTE_VALUE_EXPONENT;
        file << " and no smaller than ";
        file << (-1 * MAXIMUM_ABSOLUTE_VALUE_EXPONENT) << ": ";

        // Print the most recently input keyboard value to the command line terminal.
        std::cout << exponent;

        // Print the most recently input keyboard value to the file output stream.
        file << exponent;

        // If base is not within the range of accepted values, set base to 1.
        if ((base < (-1 * MAXIMUM_ABSOLUTE_VALUE_BASE)) || (base > MAXIMUM_ABSOLUTE_VALUE_BASE)) 
        {
            base = 1;
            std::cout << "\n\nBecause the input value for base was not within the range of accepted values, base was set to the default value of 1.";
            file << "\n\nBecause the input value for base was not within the range of accepted values, base was set to the default value of 1.";
        }

        // If exponent is not within the range of accepted values, set exponent to 0.
        if ((exponent < (-1 * MAXIMUM_ABSOLUTE_VALUE_EXPONENT)) || (base > MAXIMUM_ABSOLUTE_VALUE_EXPONENT)) 
        {
            exponent = 0;
            std::cout << "\n\nBecause the input value for exponent was not within the range of accepted values, exponent was set to the default value of 0.";
            file << "\n\nBecause the input value for exponent was not within the range of accepted values, exponent was set to the default value of 0.";
        }

        // Compute base to the power of exponent.
        result = power(base, exponent);

        // Output result.
        std::cout << "\n\nResult is: " << result;

        // Ask the user whether or not to continue inputing values.
        std::cout << "\n\nContinue inputing program values? (Enter 1 if YES. Enter 0 if NO).";
        std::cin >> input_additional_values;
    }

    // Print a closing message to the command line terminal.
    std::cout << "\n\n--------------------------------";
    std::cout << "\nEND OF PROGRAM";
    std::cout << "\n--------------------------------\n\n";

    // Print a closing message to the file output stream.
    file << "\n\n--------------------------------";
    file << "\nEND OF PROGRAM";
    file << "\n--------------------------------";

    // Close the file output stream.
    file.close();

    // Exit the program.
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
 * Return the absolute value of a real number input, x.
 */
double absolute_value(double x)
{
    if (x < 0) return -1 * x;
    return x;
}

/**
 * Reverse engineer the cmath pow() function 
 * using the following properties of natural logarithms:
 * 
 * ln(x ^ y) = y * ln(x).
 * 
 * ln(e ^ x) = x. // e is approximately Euler's Number.
 * 
 * A potentially useful property of logarithms in general 
 * is the following:
 * 
 * For a log of any positive number base, b,
 * log(x) = ln(x) / ln(b).
 * 
 * Note that the base of the logarithmic function 
 * used by the cmath log() function is e.
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
    // if ((base == 0) && (exponent < 0)) return -666; // Technically 0 raised to the power of some negative exponent is undefined (i.e. not a number).
    if (is_whole_number(exponent))
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
    if (exponent > 0) return exp(log(base) * exponent); // Return e ^ (ln(base) * exponent). For example, power(0.5,0.5) outputs (approximately) 0.707107 (which is mathematically correct).
    return exp(exp(log(base) * absolute_value(exponent))); // Return e ^ (e ^ (ln(base) * absolute_value(exponent))). For example, power(0.5,-0.5) outputs 2.02811 (and the mathematically correct answer is 2).
}