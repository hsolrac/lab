class Isogram
  def self.isogram?(input)
    return true if input.empty?
    input.downcase!
    input_reject_hifen = input.chars.reject { |w| w == '-' }
    input_reject_hifen.uniq == input
  end
end

class Array
  def uniq(*args)
    result = []
    self.each do |element|
     result << element unless result.include?(element)
    end
    return result if args.empty?
    args.each { |ele| result << ele }

    result
  end
end
