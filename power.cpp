/**
 * file: power.cpp
 * type: C++ (source file)
 * date: 09_JUNE_2023
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/* preprocessing directives */
#include <iostream> // command line input and command line output operations
#include <fstream> // file input and file output operations
#include <cmath> // just for fabs, will remove after absolute value function is added
#define MAXIMUM_INPUT 100 // constant which represents maximum value of base and maximum value of exponent.
#define MINIMUM_INPUT -100 // constant which represents minimum value of base and minimum value of exponent.

/* function prototypes */
bool is_whole_number(double d);
// double naturalLog(double value);
//double power(double base, double exponent);

int main() {
    /*
    std::cout << "\n\nis_whole_number(3.3) = " <<  is_whole_number(3.3) << ".";
    std::cout << "\n\nis_whole_number(3) = " <<  is_whole_number(3) << ".";
    std::cout << "\n\nis_whole_number(0.125) = " <<  is_whole_number(0.125) << ".";
    std::cout << "\n\nis_whole_number(-6) = " <<  is_whole_number(3.3) << ".";
    std::cout << "\n\nis_whole_number(9) = " <<  is_whole_number(3) << ".";
    std::cout << "\n\nis_whole_number(12.008) = " <<  is_whole_number(0.125) << ".";
    */
    std::cout << "\n\nnaturalLog(8) = " <<  naturalLog(8) << ".";
    return 0;
}

bool is_whole_number(double d)
{
    return (d == (long int)d); 
}

/*****************************************************************************
 * Power Rule of Natural Logarithms: ln(x ^ y) = y * ln(x)
 *****************************************************************************/

// This function uses an algorithm to calculate the natural log of a number
// this function does not work.
/*
double naturalLog(double value)
{
    double result = 0.0; // This value will hold the natural log result

    // Calculate the natural log using a Taylor Series.
    // The series is truncated after 15 terms.
    for(int i = 1; i <= 15; i++)
    {
        double numerator = pow(-1, i - 1) * pow(value - 1, i);
        double denominator = i * pow(value, i);
        result += numerator / denominator; 
    }

    // Return the result
    return result;
}*/

/**
 * Program Entry Point 
 */
/*
int main() 
{
    // Declare a file output stream object named file.
    std::ofstream file;

    // Declare three double type variables named base, exponent, and result.
    double base, exponent, result;

    // Set the number of digits of floating-point numbers which are printed to the command line terminal to 100 digits.
    std::cout.precision(100);

    // Set the number of digits of floating-point numbers which are printed to the file output stream to 100 digits.
    file.precision(100);

    // Open the plain-text file named power_output.txt (and create that file if it does not exist) and set that file to be overwritten with program data.
    file.open("power_output.txt");

    // Print an opening message to the command line terminal.
    std::cout << "\n\n--------------------------------";
    std::cout << "\nSTART OF PROGRAM";
    std::cout << "\n--------------------------------";

    // Print an opening message to the file output stream.
    file << "--------------------------------";
    file << "\nSTART OF PROGRAM";
    file << "\n--------------------------------";

    //************************************
    // STEP_0: Input a value for base. 
    //************************************

    // Print "Enter a real number to store in a variable named base which is no larger than {MAXIMUM_INPUT} and no smaller than {MINIMUM_INPUT}: " to the command line terminal.
    std::cout << "\n\nEnter a real number to store in a variable named base which is no larger than " << MAXIMUM_INPUT << " and no smaller than " << MINIMUM_INPUT << ": ";

    // Print "Enter a real number to store in a variable named base which is no larger than {MAXIMUM_INPUT} and no smaller than {MINIMUM_INPUT}: " to the file output stream.
    file << "\n\nEnter a real number to store in a variable named base which is no larger than " << MAXIMUM_INPUT << " and no smaller than " << MINIMUM_INPUT << ": ";

    // Scan the command line terminal for the most recent keyboard input value and store that value in base.
    std::cin >> base;

    // Print the value stored in base to the command line terminal.
    std::cout << base;

    // Print the value stored in base to the file output stream.
    file << base;

    // If base is smaller than MINIMUM_INPUT or if base is larger than MAXIMUM_INPUT, set base to zero.
    if ((base < MINIMUM_INPUT) || (base > MAXIMUM_INPUT)) base = 0;

    // Print "base := {base}." to the command line terminal.
    std::cout << "\n\nbase := " << base << ".";

    // Print "base := {base}." to the file output stream.
    file << "\n\nbase := " << base << ".";

    //***************************************
    // STEP_1: Input a value for exponent. 
    //***************************************
 
    // Print "Enter a real number to store in a variable named exponent which is no larger than {MAXIMUM_INPUT} and no smaller than {MINIMUM_INPUT}: " to the command line terminal.
    std::cout << "\n\nEnter a real number to store in a variable named exponent which is no larger than " << MAXIMUM_INPUT << " and no smaller than " << MINIMUM_INPUT << ": ";

    // Print "Enter a real number to store in a variable named exponent which is no larger than {MAXIMUM_INPUT} and no smaller than {MINIMUM_INPUT}: " to the file output stream.
    file << "\n\nEnter a real number to store in a variable named exponent which is no larger than " << MAXIMUM_INPUT << " and no smaller than " << MINIMUM_INPUT << ": ";

    // Scan the command line terminal for the most recent keyboard input value and store that value in exponent.
    std::cin >> exponent;

    // Print the value stored in exponent to the command line terminal.
    std::cout << exponent;

    // Print the value stored in exponent to the file output stream.
    file << exponent;

    // If exponent is smaller than MINIMUM_INPUT or if base is larger than MAXIMUM_INPUT, set exponent to zero.
    if ((exponent < MINIMUM_INPUT) || (exponent > MAXIMUM_INPUT)) exponent = 0;

    // Print "exponent := {exponent}." to the command line terminal.
    std::cout << "\n\nexponent := " << exponent << ".";

    // Print "exponent := {exponent}." to the file output stream.
    file << "\n\nexponent := " << exponent << ".";

    //***************************************************************
    // STEP_2: Output the value returned by power(base, exponent). 
    //***************************************************************

    // Compute base raised to the power of exponent and save the value obtained by that computation in result.
    result = power(base, exponent);

    // Print "result := power(base, exponent) = power({base}, {exponent}) = {result}." to the command line terminal.
    std::cout << "\n\nresult := power(base, exponent) = power(" << base << ", " << exponent << ") = " << result << ".";

    // Print "result := power(base, exponent) = power({base}, {exponent}) = {result}." to the file output stream.
    file << "\n\nresult := power(base, exponent) = power(" << base << ", " << exponent << ") = " << result << ".";

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
}*/

/**
 */
/*
double power(double base, double exponent)
{
    if (is_whole_number(exponent))
    {
        //...
    }
    return 0;
}
*/