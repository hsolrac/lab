class Isogram
  def self.isogram?(input)
    return true if input.empty?
    input.downcase!
    input.chars.uniq.delete_if { |c| c == '-' || c == ' ' } == input.chars.delete_if { |c| c == '-' || c == ' ' }
  end
end
