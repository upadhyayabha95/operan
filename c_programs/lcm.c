#include <stdio.h>
#include <stdlib.h>

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}

int main(int argc, char *argv[]) {
    if (argc != 3) return 1;
    int a = abs(atoi(argv[1]));
    int b = abs(atoi(argv[2]));
    if (a == 0 || b == 0) {
        printf("0\n");
    } else {
        printf("%d\n", lcm(a, b));
    }
    return 0;
}

