require 'byebug'
require_relative './node.rb'

class LinkedList 
  attr_accessor :head

  def initialize 
    @head = nil
  end

  def append(value)
    if @head
      find_tail.next = Node.new(value)
    else 
      @head = Node.new(value)
    end

  end

  def find_tail
    node = @head

    return node if !node.next
    return node if !node.next while (node = node.next)
  end
end


list = LinkedList.new
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.append(9)
list.append(10)
list.append(11)
list.append(12)
list.append(13)

p list

