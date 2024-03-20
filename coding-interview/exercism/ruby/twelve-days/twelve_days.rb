module TwelveDays
  def self.song
    file = File.expand_path('song.txt', __dir__)
    IO.read(file)
  end
end
