module Acronym
    def self.abbreviate(phrase)
     phrase.lines(' ')
      .map{|i| i[0]}
      .join('')
      .upcase
      .gsub(/-/, '')
    end
end
