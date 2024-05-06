module TwelveDays
  VERSION = 1
  def self.song 
    # verses = {
    #   "first": "a Partridge in a Pear Tree.",
    #   "second": "two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "third": "three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "fourth": "four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "fifth": "five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "sixth": "six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "seventh": "seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "eighth": "eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "ninth": "nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "tenth": "ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "eleventh": "eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.",
    #   "twelfth": "twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree."
    # }
    #
    # verses = verses.map do |day, verse|
    #   "On the #{day} day of Christmas my true love gave to me: #{verse}\n\n"
    # end.join
    file = File.open("./song.txt")
    IO.read(file)
  end
end
