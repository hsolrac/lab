/**
* Data Structure in which each node have at most two children
* which are referred to as the left child and the right child.
*
* Representation:
* 
* - Data
* - Pointer to the left child  
* - Pointer to the right child
*/
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};

//constructor
struct Node* createNode(int data) {
    struct Node* newNode =
      (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

/**
*          2  <- root
*         / \ .
*        3   4
*       /
*      5
*/

int height(struct Node* node){
	int count = 0;
	if(node == NULL) return 0;
	height(node->left);
	height(node->right);

	count++;
	return count;
}


int main() {
    struct Node* firstNode = createNode(2);
    struct Node* secondNode = createNode(3);
    struct Node* thirdNode = createNode(4);
    struct Node* fourthNode = createNode(5);

    firstNode->left = secondNode;
    firstNode->right = thirdNode;
    secondNode->left = fourthNode;

		printf("firstNode:%d \n", firstNode->data);
		printf("secondNode:%d \n", secondNode->data);
		printf("thirdNode:%d \n", thirdNode->data);
		printf("fourthNode:%d \n", fourthNode->data);


		printf("%d,", height(firstNode));
    return 0;
}

