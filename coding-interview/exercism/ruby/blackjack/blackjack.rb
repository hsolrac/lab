module Blackjack
  def self.parse_card(card)
    case card 
    when "ace" then 11
    when "two" then 2
    when "three" then 3
    when "four" then 4
    when "five" then 5
    when "six" then 6
    when "seven" then 7
    when "eight" then 8
    when "nine" then 9
    when "ten", "jack", "queen", "king" then 10
    when  "other "then 0
    else 
      0
    end
  end

  def self.card_range(card1, card2)
    range = self.parse_card(card1) + self.parse_card(card2)
    case range
    when 4..11 then "low"
    when 12..16 then "mid"
    when 17..20 then "high"
    when 21 then "blackjack"
    else 
      0
    end
  end

  def self.first_turn(card1, card2, dealer_card)
    if card1 == 'ace' && card2 == 'ace'
      return "P"
    elsif card1 == 'ace' && card2 == 'ace' && dealer_card == 'ace'
      return "P"
    elsif self.blackjack?(card1, card2) && !self.figure?(dealer_card)
      return "W"
    elsif self.blackjack?(card1, card2) && self.figure?(dealer_card)
      return "S"
    elsif (17..20).include?(self.sum_cards(card1, card2)) && self.figure?(dealer_card)
      return "S"
    elsif (12..16).include?(self.sum_cards(card1, card2)) && self.parse_card(dealer_card) < 7
      return "S"
    elsif (12..16).include?(self.sum_cards(card1, card2)) && self.parse_card(dealer_card) >= 7
      return "H"
    elsif self.sum_cards(card1, card2) <= 11
      return "H"
    else
      return 
    end
  end

  private 

  def self.blackjack?(card1, card2)
   return true if self.sum_cards(card1, card2) == 21
   false
  end

  def self.figure?(card)
    card == "jack" || card == "queen" || card == "king" || card == "ten" || card == "ace"
  end
    
  def self.sum_cards(card1, card2) = self.parse_card(card1) + self.parse_card(card2)
end
