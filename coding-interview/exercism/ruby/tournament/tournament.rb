=begin
Write your code for the 'Tournament' exercise in this file. Make the tests in
`tournament_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/tournament` directory.
=end
require 'byebug'

class Tournament
  FORMAT = "%-31s|%3s |%3s |%3s |%3s |%3s"

  def self.tally(input)
    header = "#{sprintf(FORMAT,"Team", "MP", "W",  "D", "L", "P")}\n"
    self.parse_input(input.split("\n")).map do |res|
      header << "#{sprintf(FORMAT,res[0], res[1]['MP'],res[1]['W'],res[1]['D'],res[1]['L'],res[1]['P'])}\n"
    end

    header
  end

  def self.parse_input(input)
    Hash[input.each_with_object({}) do |line, memo|
      team1, team2, res = line.split(";")
      
      result = self.points(team1, team2, res)
      memo[team1] ||= { 'MP' => 0, 'W' => result[team1]["W"], 'D' => result[team1]["D"], 'L' => result[team1]["L"], 'P' => result[team1]["P"] }
      memo[team2] ||= { 'MP' => 0, 'W' => result[team2]["W"], 'D' => result[team2]["D"], 'L' => result[team2]["L"], 'P' => result[team2]["P"] }
      
      memo[team1]['MP'] += 1
      memo[team2]['MP'] += 1
      
      memo
    end.sort]
  end


  def self.points(team1, team2, res)
    points = {
      team1 => { 'W' => 0, 'D' => 0, 'L' => 0, 'P' => 0 },
      team2 => { 'W' => 0, 'D' => 0, 'L' => 0, 'P' => 0 }
    }

    case res
    when "win"
      points[team1]['W'] += 1
      points[team1]['P'] += 3
      points[team2]['L'] += 1
    when "loss"
      points[team2]['W'] += 1
      points[team2]['P'] += 3
      points[team1]['L'] += 1
    when "draw"
      points[team1]['D'] += 1
      points[team1]['P'] += 1
      points[team2]['D'] += 1
      points[team2]['P'] += 1
    end

    points
  end
end

input = <<~INPUT
  Allegoric Alaskans;Blithering Badgers;loss
  Allegoric Alaskans;Blithering Badgers;win
INPUT

p Tournament.tally(input)
