class LogLineParser
  REGEX_LINE = /(\w+) (.*)/
  Customer = Struct.new(:log, :msg)

  def initialize(line)
    @line = line
  end

  def message
    parse_line(@line.delete "[]:").msg.strip
  end

  def log_level
    parse_line(@line.delete "[]:").log.downcase
  end

  def reformat
    "#{parse_line(@line.delete "[]:").msg.strip} #{'(' + parse_line(@line.delete "[]:").log.downcase + ')'}"
  end

  private 

  def parse_line(line) 
    line.match(REGEX_LINE) {|l| Customer.new(*l.captures) } 
  end
end
