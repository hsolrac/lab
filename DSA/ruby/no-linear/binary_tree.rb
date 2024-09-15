require 'byebug'

class BinaryTree
  attr_accessor :value, :left, :right
  
  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end

  def add_left(leftValue)
    self.left = BinaryTree.new(leftValue)
  end

  def add_right(rightValue)
    self.right = BinaryTree.new(rightValue)
  end

  def height
    height_left = self.left&.height || 0
    height_right = self.right&.height || 0

    [height_left, height_right].max + 1
  end

  def left_most
    self.left.nil? ? self.value : self.left.left_most
  end

  def right_most 
    self.right.nil? ? self.value : self.right.right_most
  end

  def count
    count_left = left ? left.count : 0
    count_right = right ? right.count : 0
 
    count_left + count_right + 1
  end
end

puts '
-----------------------
       10
      /  \ 
    20    50
    /      \ 
   30      60
   /
  40
  /
 70
----------------------
'

root = BinaryTree.new(10)
node20 = root.add_left(20)
node30 = node20.add_left(30)
node35 = node30.add_right(35)
node40 = node30.add_right(40)
node50 = root.add_right(50)
node60 = node50.add_right(60)
node70 = node40.add_right(70)


p "Left most: #{root.left_most}"
p "Right most: #{root.right_most}"
p "Height: #{root.height}"
p "Count: #{root.count}"
