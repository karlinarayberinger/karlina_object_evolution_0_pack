// test_power.cpp was written by chatGPT on 03_JUNE_2023

#include<iostream>
#include<iomanip>
#include <cmath>

using namespace std;

double log(double x){
  double e = 2.71828;
  double log_x = 0; 
  while(x > e){
    log_x++;
    x /= e;
  }
  return log_x;
}
 
double exp(double x){ 
    double e = 2.71828; 
    double exp_x = 1; 
    while(x > 0){ 
        exp_x *= e; 
        x--; 
    } 
    return exp_x;
}

int main(){
	
	//Declare required variables
	long double base;
	long double exponent;
	long double result;
	
	//Get user input
	cout << "Input Base (e.g. 2): ";
	cin >> base;
	cout << "Input Exponent (e.g 0.5): ";
	cin >> exponent;
	
	//Reverse engineer the pow() function
	result = exp(log(base) * exponent);
	
	//Output result with precision similar to Pythons pow()
	cout << fixed;
	cout << setprecision(20);
	cout << "Result is: " << result << endl;
	
	return 0;
	
}