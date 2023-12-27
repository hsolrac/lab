=begin
Write your code for the 'Meetup' exercise in this file. Make the tests in
`meetup_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/meetup` directory.
=end
class Meetup
  attr_reader :year, :month
  def initialize(month, year)
    @month = month
    @year = year
  end
  def day(weekday, schedule)
    week        = week_dates_for(schedule)
    start_date  = Date.new(year, month, week.first)
    end_date    = Date.new(year, month, week.last)
    start_date.upto(end_date).find {|d| d.wday == lookup_day(weekday)}
  end
  private
  def week_dates_for(schedule)
    weeks = {
      first:  1..7,
      second: 8..14,
      third:  15..21,
      fourth: 22..28,
      teenth: 13..19,
      last:   -7..-1
    }
    weeks[schedule]
  end
  def lookup_day(weekday)
    weekdays = [ :sunday, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday ]
    weekdays.index(weekday)
  end
end
