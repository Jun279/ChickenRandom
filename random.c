#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main() {
  srand(time(NULL)); 
  for(int i = 0;i<5;i++) {
    int random = rand() % 20 + 1;
    printf("%d ", random);
  }
  printf("\n");

  return 0;
}