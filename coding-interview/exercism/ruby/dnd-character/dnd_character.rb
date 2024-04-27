=begin
Write your code for the 'D&D Character' exercise in this file. Make the tests in
`dnd_character_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/dnd-character` directory.
=end

class DndCharacter
  BASE_HITPOINTS = 10
  
  attr_reader :strength, :dexterity, :constitution, :intelligence, :wisdom, :charisma
 
  def self.modifier(score)
    ((score - BASE_HITPOINTS) / 2.0).floor
  end

  def initialize
    @streangth = points
    @dexterity = points
    @constitution = points
    @intelligence = points
    @wisdom = points
    @charisma = points
  end

  def points 
    4.times.map { rand(0..6) }.sort.drop(1).sum
  end

  def hitpoints 
    BASE_HITPOINTS + self.class.modifier(constitution)
  end
end
