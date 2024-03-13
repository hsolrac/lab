class LocomotiveEngineer
  def self.generate_list_of_wagons(*args)
    args
  end

  def self.fix_list_of_wagons(each_wagons_id, missing_wagons)
    return each_wagons_id if each_wagons_id[0] == 1

    first, second = each_wagons_id
    each_wagons_id.push(first, second)
    each_wagons_id.shift(2)

    each_wagons_id.insert(1, *missing_wagons)
  end

  def self.add_missing_stops(*keyword_arguments)
    first_hash, second_hash = keyword_arguments
    first_hash.merge!({stops: second_hash&.values || []})
  end

  def self.extend_route_information(route, more_route_information)
    route.merge(more_route_information)
  end
end
