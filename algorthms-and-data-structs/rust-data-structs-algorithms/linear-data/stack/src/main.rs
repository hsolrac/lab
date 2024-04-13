use std::vec::Vec;

fn main() {
    println!("Stack: ");

    let mut stack = Vec::new();
    stack.push(1);
    stack.push(2);
    
    //len() tamanho da stack
    assert_eq!(stack.len(), 2);

    //acessar valor por index
    assert_eq!(stack[0], 1);
    
    //extend() add lista 
    stack.extend([3, 4, 5]);
    let num = 0;
    stack.push(num);
   
    //FIFO
    assert_eq!(stack[stack.len() -1], 0);
    println!("Ultimo elemento adicionado => {}", stack[stack.len()-1]);
    println!("é o primeiro da fila e esta no topo");
    println!("se for removido, quem estará no topo será => {}", stack[stack.len()-2]);

    println!("{:?}", stack);
    
    //remover elementos
    stack.pop();
    stack.pop();
    
    loop {
        stack.pop();
        if stack.len() == 0 {
            break;
        }
    }

    println!("{:?}", stack);
    println!("stack vazia");

}
