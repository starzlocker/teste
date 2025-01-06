#include<stdio.h>

int main()
{
    struct node
    {
        int data;
        struct node *next;
    }typedef node;

    struct node *a,*b,*c;

    //Implement task 1 here
    a = malloc(sizeof(node));
    b = malloc(sizeof(node));
    c = malloc(sizeof(node));


    //Implement task 2 here
    a->data = 100;
    b->data = 200;
    c->data = 300;

    print("na main");
    
    return 0;
}
