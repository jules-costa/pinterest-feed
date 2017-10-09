@pins.each do |pin|
  json.set! pin.id do
    json.id pin.id
    json.title pin.payLoad["title"]
    json.description pin.payLoad["description"]
    json.link pin.payLoad["link"]
    json.xsmall pin.payLoad["images"]["136x136"]["url"]
    json.small pin.payLoad["images"]["236x"]["url"]
    json.medium pin.payLoad["images"]["474x"]["url"]
    json.large pin.payLoad["images"]["736x"]["url"]
    json.xlarge pin.payLoad["images"]["orig"]["url"]
  end
end
