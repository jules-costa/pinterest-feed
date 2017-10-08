Pin.destroy_all

items = JSON.parse(File.read('app/assets/javascripts/pins_formatted.json'))
items.each do |item|
  Pin.create!(payLoad: item)
end
