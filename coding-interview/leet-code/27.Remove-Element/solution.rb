# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
  nums.delete_if { |n| n == val }.length
end
