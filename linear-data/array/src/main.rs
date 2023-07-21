fn main() {
    let array0: [i32; 6] = [0;6];
    let array1: [i32; 6] = [0, 1, 2 , 3, 4 , 5];

    for x in array1{
        print!("{x} \n");
    }
    println!("##################");
    for y in array0{
        println!("{y}");
    }
}
