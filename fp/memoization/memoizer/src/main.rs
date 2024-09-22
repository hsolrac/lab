use std::collections::HashMap;
use std::hash::Hash;

fn memoization<F, A, R>(mut f: F) -> impl FnMut(A) -> R
where
    F: FnMut(A) -> R,
    A: Copy + Eq + Hash,
    R: Copy + std::fmt::Debug + std::fmt::Display,
{
    let mut cache = HashMap::new();

    move |args: A| {
        if let Some(&result) = cache.get(&args) {
            println!("Retornando do cache {:?}", result);
        }

        let result = f(args);
        cache.insert(args, result);

        result
    }
}

fn sum_two_numbers(args: (i32, i32)) -> i32 {
    args.0 + args.1
}

fn main() {
    let mut memoizer = memoization(sum_two_numbers);

    println!("{}", memoizer((2, 2)));
    println!("{}", memoizer((2, 2)));
    println!("{}", memoizer((3, 2)));
    println!("{}", memoizer((1, 4)));
    println!("{}", memoizer((1, 4)));
}
