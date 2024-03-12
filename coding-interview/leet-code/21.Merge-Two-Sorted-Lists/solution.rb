# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
  return [] if list1.nil? && list2.nil? 
  merged_list = []
  
  merge(list1).map { |h| merged_list << h } 
  merge(list2).map { |h| merged_list << h }

  merged_list.sort
end

def merge(list)
  nums = []
  current_node = list
  return [] if current_node&.val.nil?

  nums << current_node.val
  while(current_node.next != nil)
    current_node = current_node.next
    return if current_node.val.nil?
    nums << current_node.val
  end
  nums
end
