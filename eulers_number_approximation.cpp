/**
 * file: eulers_number_approximation.cpp
 * type: C++ (source file)
 * date: 05_JUNE_2023
 * author: karbytes
 * license: PUBLIC_DOMAIN
 */

/* preprocessing directives */
#include <iostream> // command line user interface input and output
#include <fstream> // file input and output
#define MAXIMUM_N 65 // constant which represents maximum N value 

/* function prototypes */
unsigned long long int compute_factorial_of_N_using_iteration(int N);
long double eulers_number_approximation(int N, std::ostream & output);

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
 * Assume that N is a nonnegative integer no larger than MAXIMUM_N.
 */
unsigned long long int compute_factorial_of_N_using_iteration(int N)
{
	// Declare an int type variable (i.e. a variable for storing integer values) named i. 
	// Set the initial value which is stored in i to zero.
	int i = 0;

	// Declare an unsigned long long int type variable (i.e. a variable for storing nonnegative integer values) named F. 
	// Set the initial value which is stored in F to zero.
	unsigned long long int F = 0; 

	// If N is larger than negative one and if N is not larger than MAXIMUM_N, set i to N. 
	// Otherwise, set i to 0.
	i = ((N > -1) && (N <= MAXIMUM_N)) ? N : 0; 

	// If N is larger than zero, set F to N.
	// Otherwise, set F to 1.
	F = (N > 0) ? N : 1; 

	// While i is larger than zero: execute the code block enclosed by the following curly braces.
	while (i > 0) 
	{
		// If i is larger than 1, multiply F by (i - 1).
		if (i > 1) F *= i - 1; 

		// Decrement i by 1.
		i -= 1; 
	}

	// Return the value stored in F.
	// The value stored in F is factorial N.
	// Factorial N is denoted by N followed by the exclamation mark.
	return F; // Return the value represented by N!
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
 * Assume that N is a natural number no larger than MAXIMUM_N.
 */
long double eulers_number_approximation(int N, std::ostream & output)
{
	// Declare a long double type variable (i.e. a variable for storing floating-point number values) named A. 
	// Set the initial value which is stored in A to one.
	long double A = 1.0;

	// Declare an int type variable (i.e. a variable for storing integer values) named i. 
	// Set the intiial value which is stored in i to zero.
	int i = 0;

	// Declare a pointer to an unsigned long long int type variable named T.
	// A pointer variable stores 0 or else the memory address of a variable of the corresponding data type.
	// The value stored in a pointer is a sixteen-character memory address which denotes the first memory cell in a chunk of contiguous memory cells
	// (and that chunk of contiguous memory cells is exactly as large as a variable of the pointer's corresponding data type).
	// Note that each memory cell has a data capacity of one byte.
	unsigned long long int * T;

	// If N is smaller than one or if N is larger than MAXIMUM_N, set N to one. 
	if ((N < 1) || (N > MAXIMUM_N)) N = 1;

	// Allocate N contiguous unsigned long long int sized chunks of memory to an array for storing N floating-point values.
	// Store the memory address of the first element of that array in T.
	T = new unsigned long long int [N];

	// Print "number_of_bytes(unsigned long long int) := {sizeof(unsigned long long int)}." to the output stream.
	output << "\n\nnumber_of_bytes(unsigned long long int) := " << sizeof(unsigned long long int) << ".";

	// Print "memory_address_of(T) = (&T) := {memory_address_of(T)}." to the output stream.
	output << "\n\nmemory_address_of(T) = (&T) := " << &T << ".// & is a reference operator";

	// Print "T := {T}." to the output stream.
	output << "\n\nT := " << T << ". // pointer to unsigned long long int type variable";

	// Print "(*T) := {*T}." to the output stream.
	output << "\n\n(*T) := " << (*T) << ". // dereferenced pointer to unsigned long long int type variable \n";

	// For each integer value represented by i (starting with 0 and ending with N in ascending order): 
	// print the memory address of the ith element of the unsigned long long int type array represented by T to the output stream.
	for (i = 0; i < N; i += 1) 
	{
		// Print "(&T[{i}]) := {memory_address_of(T[i])}." to the output stream.
		output << "\n(&T[" << i << "]) := " << &T[i] << ". // memory address of T[" << i << "]";
	}

	// Print a newline character to the output stream.
	output << '\n';

	// For each integer value represented by i (starting with 0 and ending with N in ascending order):
	// set the value of the ith element of the unsigned long long int type array represented by T to (N - i) and
	// print the data value which is stored in the ith element of the array to the output stream.
	for (i = 0; i < N; i++) // (The expression "N++" is essentially identical to the expression "N += 1").
	{
		// Store the result of the arithmetic expression (N - i) in T[i].
		T[i] = N - i;

		// Print "T[{i}] := {T[i]}." to the output stream.
		output << "\nT[" << i << "] := " << T[i] << " = (" << N << " - " << i << ").";
	}

	// Print a newline character to the output stream.
	output << '\n';

	// For each integer value represented by i (starting with 0 and ending with N in ascending order):
	// set the value of the ith element of the unsigned long long int type array represented by T to (N - i)! and
	// print the data value which is stored in the ith element of the array to the output stream.
	for (i = 0; i < N; i += 1) 
	{
		// Print "T[{i}] := factorial({T[i]}) = ({T[i]})! = " to the output stream.
		output << "\nT[" << i << "] := factorial(" << T[i] << ") = (" << T[i] << ")! = ";

		// Store (N - i)! in T[i].
		T[i] = compute_factorial_of_N_using_iteration(T[i]);

		// Print {T[i]} to the output stream.
		output << T[i];
	}

	// Print a newline character to the output stream.
	output << '\n';

	// For each integer value represented by i (starting with 0 and ending with N in ascending order):
	// print the value of (1 / (N - i)!) to the output stream.
	for (i = 0; i < N; i += 1) output << "\n(1 / T[" << i << "]) = (1 / " << T[i] << ") = " << (long double) 1 / T[i] << ".";

	// For each integer value represented by i (starting with 0 and ending with N in ascending order):
	// add the value of (1 / (N - i)!) to A and print the data value which is stored in A to the output stream.
	for (i = 0; i < N; i += 1) 
	{
		output << "\n\nA := A + (1 / (" << N << " - " << i << ")!)";
		output << "\n   = " << A << " + (1 / " << T[i] << ")";
		output << "\n   = " << A << " + " << (long double) 1 / T[i];
		A += (long double) 1 / T[i];
		output << "\n   = " << A << ".";
	}

	// De-allocate memory which was assigned to the array named T.
	delete [] T;

	// Return the value which is stored in A.
	return A;
}

/* program entry point */
int main()
{
	// Declare a file output stream object named file.
	std::ofstream file;

	// Declare an int type variable (i.e. a variable for storing integer values) named N. 
	// Set the initial value which is stored in N to one.
	int N = 1;

	// Declare a long double type variable (i.e. a variable for storing floating-point number values) named A. 
	// Set the initial value which is stored in A to one.
	long double A = 1.0;

    // Set the number of digits of floating-point numbers which are printed to the command line terminal to 100 digits.
    std::cout.precision(100);

    // Set the number of digits of floating-point numbers which are printed to the file output stream to 100 digits.
    file.precision(100);

	/**
	 * If the file named eulers_number_approximation_output.txt does not already exist 
	 * inside of the same file directory as the file named eulers_number_approximation.cpp, 
	 * create a new file named eulers_number_approximation_output.txt in that directory.
	 * 
	 * Open the plain-text file named eulers_number_approximation_output.txt 
	 * and set that file to be overwritten with program data.
	 */
	file.open("eulers_number_approximation_output.txt");

	// Print an opening message to the command line terminal.
	std::cout << "\n\n--------------------------------";
	std::cout << "\nSTART OF PROGRAM";
	std::cout << "\n--------------------------------";

	// Print an opening message to the file output stream.
	file << "--------------------------------";
	file << "\nSTART OF PROGRAM";
	file << "\n--------------------------------";

	// Print "Enter a natural number which is no larger than {MAXIMUM_N}: " to the command line terminal.
	std::cout << "\n\nEnter a natural number which is no larger than " << MAXIMUM_N << ": ";

	// Print "Enter a natural number which is no larger than {MAXIMUM_N}: " to the file output stream.
	file << "\n\nEnter a natural number which is no larger than " << MAXIMUM_N << ": ";

	// Scan the command line terminal for the most recent keyboard input value.
	std::cin >> N;

	// Print {N} to the command line terminal.
	std::cout << N;

	// Print {N} to the file output stream.
	file << N;

	// If N is smaller than one or if N is larger than MAXIMUM_N, set N to one.
	if ((N < 1) || (N > MAXIMUM_N)) N = 1;

	// Print "N := {N}." to the command line terminal.
	std::cout << "\n\nN := " << N << ". // int type variable";

	// Print "N := {N}." to the file output stream.
	file << "\n\nN := " << N << ". // int type variable";

	// Print "number_of_bytes(int) := {sizeof(int)}." to the command line terminal.
	std::cout << "\n\nnumber_of_bytes(int) := " << sizeof(int) << ".";

	// Print "number_of_bytes(int) := {sizeof(int)}." to the file output stream.
	file << "\n\nnumber_of_bytes(int) := " << sizeof(int) << ".";

	// Print "memory_address_of(A) := (&N) = {memory_address_of(A)}." to the command line terminal.
	std::cout << "\n\nmemory_address_of(N) = (&N) := " << &N << ". // & is a reference operator";

	// Print "memory_address_of(N) = (&N) := {N}." to the file output stream.
	file << "\n\nmemory_address_of(N) = (&N) := " << &N << ". // & is a reference operator";

	// Print "number_of_bytes(long double) := {sizeof(long double)}." to the command line terminal.
	std::cout << "\n\nnumber_of_bytes(long double) := " << sizeof(long double) << ".";

	// Print "number_of_bytes(long double) := {sizeof(long double)}." to the file output stream.
	file << "\n\nnumber_of_bytes(long double) := " << sizeof(long double) << ".";

	// Print "A := {A}." to the command line terminal.
	std::cout << "\n\nA := " << A << ". // long double type variable";

	// Print "A := {A}." to the file output stream.
	file << "\n\nA := " << A << ". // long double type variable";

	// Print "memory_address_of(A) = (&A) := {memory_address_of(A)}." to the command line terminal.
	std::cout << "\n\nmemory_address_of(A) = (&A) := " << &A << ". // & is a reference operator";

	// Print "memory_address_of(A) = (&A) := {A}." to the file output stream.
	file << "\n\nmemory_address_of(N) = (&A) := " << &A << ". // & is a reference operator";

	// Compute the Nth approximation of Euler's Number and store the result in A.
	// Print the steps involved in generating an approximation of Euler's Number to the command line terminal.
	A = eulers_number_approximation(N, std::cout);

	// Print the steps involved in generating an approximation of Euler's Number to the file output stream.
	eulers_number_approximation(N, file);

	// Print "A = eulers_number_approximation(N) := {eulers_number_approximation(N)}." to the command line terminal.
	std::cout << "\n\nA = eulers_number_approximation(N) := " << A << ".";

	// Print "A = eulers_number_approximation(N) := {eulers_number_approximation(N)}." to the file output stream.
	file << "\n\nA = eulers_number_approximation(N) := " << A << ".";

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
