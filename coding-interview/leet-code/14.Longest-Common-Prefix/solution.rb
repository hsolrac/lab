require 'debug'
# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  prefix = []
  count = 0

  strs.length.times do 
    strs.each do |w|
      prefix << w[count]
    end
    count += 1
  end
  prefix
end

p longest_common_prefix(["flower", "flow", "flight"])
