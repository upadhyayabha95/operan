#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 3) return 1;
    float a = atof(argv[1]);
    float b = atof(argv[2]);
    printf("%.2f\n", (a + b) / 2);
    return 0;
}

