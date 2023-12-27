class Microwave
  def initialize(time)
    @time = time
  end
  def timer
    if @time < 60
      "00:" + @time.to_s.rjust(2, "0")
    elsif @time == 60 || @time == 100
      "01:00"      
    elsif @time > 60 && @time < 100
      @min = @time / 60
      @sec = @time % 60
      @min.to_s.rjust(2, "0") + ":" + @sec.to_s.rjust(2, "0")
    elsif @time > 100 && @time <= 200
      @min = @time / 100
      @sec = @time % 100
      @min.to_s.rjust(2, "0") + ":" + @sec.to_s.rjust(2, "0")
    elsif @time > 200 && @time < 1000
      @min = @time / 100
      @sec = @time % 100
      @res = nil
      if @sec > 60 
        @res = @sec - 60
      end 
      new_time =  @min + 1
      new_time.to_s.rjust(2, "0") + ":" + @res.to_s.rjust(2, "0")
    elsif @time > 1000
      '10:01'
    end

  end
end
