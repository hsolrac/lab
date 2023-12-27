class BoutiqueInventory
  def initialize(items)
    @items = items
  end

  def item_names
   @items.map {|item| item[:name]}.reverse
  end

  def cheap
    @items.select {|item| item[:price] < 30}
  end

  def out_of_stock
   @items.select {|item| item[:quantity_by_size].empty? }
  end

  def stock_for_item(name)
    result = @items.find {|item| item[:name] == name }
    result[:quantity_by_size]
  end

  def total_stock
    total = 0
    @items.each do |item|
      item[:quantity_by_size].map{|k, v| total += v}
    end
   total
  end

  private
  attr_reader :items
end
