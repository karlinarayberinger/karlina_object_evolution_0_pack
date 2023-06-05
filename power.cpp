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
#define MAXIMUM_INPUT 1000.0 // constant which represents maximum value of either base or exponent.
#define MINIMUM_INPUT -1000.0 // constant which represents minimum value of either base or exponent.

/* function prototypes */
unsigned long long int compute_factorial_of_N_using_iteration(int N);
long double eulers_number_approximation(int N);
long double natural_log(float x);
long double exponential(float x);


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
 * by iteratively dividing x by e until the x is smaller than e 
 * and by incrementing an output natural log value by one each iteration. 
 * 
 * Natural Log Example: 
 * ln(x) = y.
 * ln(5) = 1.60944.
 * 1.60944 ^ e = 5. 
 * y ^ e = x.
 * power(y,e) = x.
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
 * by iteratively multiplying an output exp_x value by e (and e is the base of natural log)
 * until x is zero. 
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
        x--; 
    } 
    return exp_x;
}

/**
 */
bool is_whole_number(double input) 
{
    //...
    return true;
}

/**
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
    else // if (exponent < 0)
    {
        //...
    }
    return 0.0;
}