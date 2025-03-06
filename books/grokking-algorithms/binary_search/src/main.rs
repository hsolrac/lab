// Args: List Vec<i32> and Element i32
// return: index element i32

fn binary_search(list: Vec<i32>, el: i32) -> Option<usize> {
    let mut low = 0;
    let mut high = list.len() - 1;

    while low <= high {
        let mid = (low + high) / 2;
        if list[mid] == el {
            return Some(mid);
        }
        if list[mid] > el {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    None
}

// With recursion
fn binary_search_recursive(list: Vec<i32>, el: i32, low: usize, high: usize) -> Option<usize> {
    match (low, high) {
        (low, high) if low > high => None,
        (low, high) => {
            let mid = (low + high) / 2;
            match list[mid].cmp(&el) {
                std::cmp::Ordering::Equal => Some(mid),
                std::cmp::Ordering::Less => binary_search_recursive(list, el, mid + 1, high),
                std::cmp::Ordering::Greater => binary_search_recursive(list, el, low, mid - 1),
            }
        }
    }
}

fn main() {
    let element = 10;
    let list = vec![2, 3, 5, 7, 8, 10];
    let result = binary_search(list.clone(), element);
    let result_v2 = binary_search_recursive(list.clone(), element, 0, list.len() - 1);

    println!("{:?}", result);
    println!("Recursive: {:?}", result_v2)
}
