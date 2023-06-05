/**
 * file: power.cpp
 * type: C++ (source file)
 * date: 05_JUNE_2023
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/* preprocessing directives */
#include <iostream> // command line input and command line output operations
#include <fstream> // file input and file output operations
#define MAXIMUM_INPUT 100.0 // constant which represents maximum value of either base or exponent.
#define MINIMUM_INPUT -100.0 // constant which represents minimum value of either base or exponent.

/* function prototypes */
unsigned long long int compute_factorial_of_N_using_iteration(int N);
long double eulers_number_approximation(int N);
long double natural_log(float x);
long double exponential(float x);
long double power(float base, float exponent);

/**
 * Program Entry Point 
 */
int main() 
{
    // Declare a file output stream object named file.
    std::ofstream file;

    // Declare two float type variables named base and exponent and initial each of their values to zero.
    // A float type variable in C++ occupies 4 bytes of memory.
    float base = 0.0, exponent = 0.0;

    // Declare a long double type variable named result and initialize its value to zero.
    // A long double type variable in C++ occupies 8 bytes of memory.
    long double result = 0.0;

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

    /***********************************/
    /* STEP_0: Input a value for base. */
    /***********************************/

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

    /***************************************/
    /* STEP_1: Input a value for exponent. */
    /***************************************/

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

    /***************************************************************/
    /* STEP_2: Output the value returned by power(base, exponent). */
    /***************************************************************/

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
}

/**
 * Compute N factorial (N!) using an iterative algorithm.
 * 
 * If N is a natural number, then N! is the product of exactly one instance 
 * of each unique natural number which is less than or equal to N. 
 * N! := N * (N - 1) * (N - 2) * (N - 3) * ... * 3 * 2 * 1. 
 * 
 * If N is zero, then N! is one.
 * 0! := 1.
 * 
 * The value returned by this function is a nonnegative integer (which is N factorial).
 * 
 * Assume that N is a nonnegative integer no larger than 65.
 */
unsigned long long int compute_factorial_of_N_using_iteration(int N)
{
    int i = 0;
    unsigned long long int F = 0; 
    i = ((N >= 0) && (N <= 65)) ? N : 0; 
    F = (N > 0) ? N : 1; 
    while (i > 0) 
    {
        if (i > 1) F *= (i - 1); 
        i -= 1; 
    }
    return F;
}

/**
 * Generate an approximation of the the mathematical constant named e (i.e. Euler’s Number).
 * 
 * The approximate value of Euler's Number is computed by adding N unique terms 
 * (and each of those N terms is 1 divided by factorial n 
 * (and n is a nonnegative integer which is smaller than or equal to N)).
 * 
 * Note that the actual value of e is a limit which cannot be determined using 
 * a finite number of additions as described in the previous sentence. Instead, 
 * the actual value of e is defined as the sum of every unique instance of 
 * (1/(n!)) such that n is a nonnegative integer.
 * 
 * The value returned by this function is a positive floating-point number (which is the Nth approximation of Euler's Number).
 * 
 * Assume that N is a natural number no larger than 65.
 */
long double eulers_number_approximation(int N)
{
    long double A = 1.0;
    int i = 0;
    unsigned long long int * T;
    if ((N < 0) || (N > MAXIMUM_N)) N = 1;
    T = new unsigned long long int [N];
    for (i = 0; i < N; i++) T[i] = N - i;
    for (i = 0; i < N; i += 1) T[i] = compute_factorial_of_N_using_iteration(T[i]);
    for (i = 0; i < N; i += 1) A += (long double) 1 / T[i];
    delete [] T;
    return A;
}

/**
 * This function computes the natural log (ln) of a some real number x (and the base of natural log is e) 
 * by iteratively dividing x by e each iteration 
 * and by incrementing an output natural log value by one each iteration
 * until the x is smaller than e.
 * 
 * Natural Log Example: 
 * ln(x) = y.
 * ln(5) = 1.60944.
 * 1.60944 ^ e = 5. 
 * y ^ e = x.
 * power(y, e) = x.
 * 
 * The value returned by this function represents the number of times the input value was divided by e.
 * 
 * Assume that x is a real number which is no smaller than MINIMUM_INPUT and no larger than MAXIMUM_INPUT.
 */
long double natural_log(float x); 
{
    long double e = eulers_number_approximation(65);
    long double log_x = 0; 
    if ((x < MINIMUM_INPUT) || (x > MAXIMUM_INPUT)) x = 0;
    while(x > e)
    {
        log_x += 1;
        x /= e;
    }
    return log_x;
}

/**
 * This function computes the exponential of some real number x
 * by iteratively multiplying an output exp_x value by e (and e is the base of natural log) each iteration
 * and by decrementing x by one each iteration
 * until x is zero. 
 * 
 * Exponential Example:
 * e ^ x = y.
 * power(e,x) = y.
 * power(e, ln(x)) = x.
 * power(e, 5) = 148.41316.
 * power(e, 0) = 1. 
 * 
 * The value returned by this function represents the number of times e was multiplied by itself.
 * 
 * Assume that x is a real number which is no smaller than MINIMUM_INPUT and no larger than MAXIMUM_INPUT.
 */
long double exponential(float x)
{
    long double e = eulers_number_approximation(65);
    double exp_x = 1; 
    if ((x < MINIMUM_INPUT) || (x > MAXIMUM_INPUT)) x = 0;
    while(x > 0)
    { 
        exp_x *= e; 
        x -= 1; 
    } 
    return exp_x;
}

/**
 * Reverse engineer the pow() function (which is defined in the cmath C++ library).
 * 
 * If exponent is a natural number, then the returned value is base multiplied by itself exponent times.
 * 
 * Power Example:
 * power(2, 3) = 8. // 8 = 2 * 2 * 2.
 * power(2, -3) = 0.125. // 0.125 = 1 / 8 = 1 / (2 * 2 * 2).
 * power(8, 0.25) = 2. // 0.25 = 1 / 4 = (1 / 2) / 2.
 * power(8, -0.25) = 0.5. 
 * power(-2, 3) = -8. // -8 = -2 * -2 * -2.
 * power(0, 1) = 0.
 * power(1, 0) = 1.
 * power(2, 1) = 2.
 * power(2, 0) = 1.
 * 
 * The value returned by this function represents the result of base raised to the power of exponent (i.e. base ^ exponent).
 * 
 * Assume that x is a real number which is no smaller than MINIMUM_INPUT and no larger than MAXIMUM_INPUT.
 */
long double power(float base, float exponent) 
{
    return exponential(natural_log(base) * exponent);
}