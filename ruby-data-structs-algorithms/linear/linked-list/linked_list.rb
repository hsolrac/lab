require 'byebug'
require_relative './node.rb'

class LinkedList 
  attr_accessor :head, :count

  def initialize 
    @head = nil
    @count = 0
  end

  def append(value)
    if @head
      find_tail.next = Node.new(value)
    else 
      @head = Node.new(value)
    end
    @count += 1
  end

  def append_after(target, value)
    node = find(target)

    return unless node

    old_next = node.next
    node.next = Node.new(value)
    node.next.next = old_next
  end

  def find(value)
    node = @head

    return false if !node.next
    return node  if node.value == value

    while (node = node.next)
      return node if node.value == value
    end
  end

  def find_tail
    node = @head

    return node if !node.next
    return node if !node.next while (node = node.next)
  end

  def find_by_index(index)
    if(index >= 0 && index <= @count)
      node = @head
      index.times do 
        node = node.next
      end
      return node
    end
    return "undefined"
  end

end


list = LinkedList.new
list.append(2)
list.append(3)
list.append(5)

#list.find_by_index(1)



