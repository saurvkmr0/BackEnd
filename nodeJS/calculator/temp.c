#include<stdio.h>
#include<stdlib.h>

struct sll
{
    int data;
    struct sll *next;
};
typedef struct sll *node;

node input(node head);
void output(node head);
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
        case 1: head=input(head);
        break;

        case 2: output(head);
        break;

        default : printf("Choice is not correct!!");
        exit(0);

    }
}
}

node input(node head)
{
    node newnode,temp;
    newnode=(node)malloc(sizeof(struct sll));
      
    if(head==NULL)
    {
        printf("node not created\n");
        exit(0);
    }
    else
    {
    head->next=newnode;
    }

    
    printf("Enter the data in list=");
    scanf("%d",&newnode->data);
    newnode->next=NULL;


    else
    {
        temp->next=newnode;
        temp=newnode;
    }
    return newnode;
}

void output(node head)
{
  node temp;

   if(temp==NULL)
   {
    printf("List is empty!!");
    exit(0);
   }
    temp=head;
   while(temp!=NULL)
   {
    printf("%d ",temp->data);
    temp=temp->next;
   }
   printf("\n");
}