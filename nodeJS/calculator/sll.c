#include <stdio.h>
#include <stdlib.h>

typedef struct NODE
{
    int data;
    struct NODE *next;
}*node;

node getnode()
{
    node new;
    new=(node)malloc(sizeof(struct NODE));
    if(new==NULL)
    {
        printf("NODE not created/n");
        exit(0);
    }
    printf("Enter the data\n");
    scanf("%d",&new->data);
    new->next=NULL;
    return new;
}

node insert_rear(node head)
{
    node new,cur;
    new=getnode();
    if(head==NULL)
    {
        return new;
    }
    cur=new;
    while(cur->next!=NULL)
    {
        cur=cur->next;
    }
    cur->next=new;
    return head;
}

void display(node head)
{
    node cur;
    if(head==NULL)
    {
        printf("List is empty\n");
        exit(0);
    }
    printf("Elements are\n");
    cur=head;
    while(cur!=NULL)
    {
        printf("%d\n,cur->data");
        cur=cur->next;
    }
}

int main()
{
    node head=NULL;
    int choice;
    for(;;)
    {

    printf("Enter your choice\n 1- for input\n 2- for output \n");
    scanf("%d",&choice);
    switch(choice)
    {
        case 1: insert_rear(head);
        break;

        case 2: display(head);
        break;

        default : printf("Choice is not correct!!");
        exit(0);

    }
}
}
