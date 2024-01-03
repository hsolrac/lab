# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
  index = nums.bsearch_index { |n| n >= target } || nums.length
  index
end
