class SimpleCalculator
    ALLOWED_OPERATIONS = ['+', '/', '*'].freeze

  def self.calculate(first_operand, second_operand, operation)
    raise(UnsupportedOperation) if !ALLOWED_OPERATIONS.include?(operation)

    raise (ArgumentError) if first_operand.is_a?(String) || second_operand.is_a?(String)
    
    result = first_operand.public_send operation, second_operand

    return "#{first_operand} #{operation} #{second_operand} #{"="} #{result}"
  rescue ZeroDivisionError 
    'Division by zero is not allowed.'
  end


  class UnsupportedOperation < StandardError
  end
end
