class Song
  attr_accessor :name, :next_song

  def initialize(name, next_song = nil)
    @name = name
    @next_song = next_song
  end
end

class Playlist
  attr_accessor :first_song

  def initialize
    @first_song = nil
  end

  def add_song(name)
    if @first_song
      current_song = @first_song
      current_song = current_song.next_song while current_song.next_song
      current_song.next_song = Song.new(name)
    else
      @first_song = Song.new(name)
    end
  end

  def display_songs
    current_song = @first_song
    while current_song
      puts current_song.name
      current_song = current_song.next_song
    end
  end

  def remove_song(name)
    return unless @first_song

    if @first_song.name == name
      @first_song = @first_song.next_song
      return
    end

    previous_song = nil
    current_song = @first_song
    while current_song && current_song.name != name
      previous_song = current_song
      current_song = current_song.next_song
    end

    return unless current_song

    previous_song.next_song = current_song.next_song
  end
end

# Exemplo de uso
my_playlist = Playlist.new
my_playlist.add_song("Song 1")
my_playlist.add_song("Song 2")
my_playlist.add_song("Song 3")

puts "Current Playlist:"
my_playlist.display_songs

# Removing a song
my_playlist.remove_song("Song 2")
puts "\nPlaylist after removing a song: Song 2"
my_playlist.display_songs
