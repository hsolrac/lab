# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
  return x if x.zero?
  n = 1
  x.times do
    n+=1 
    return n if n * n == x   
  end
  n = x / 2
  n = n / 2
end
