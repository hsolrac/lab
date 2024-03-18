
class HighScores
  attr_accessor :scores
    
  def initialize(scores = nil)
      @scores = scores || [30, 50, 20, 70]
  end

  def latest
    scores.last
  end

  def personal_best
    scores.max
  end

  def personal_top_three
    scores.max(3)
  end

  def latest_is_personal_best?
    latest == personal_best
  end
end
