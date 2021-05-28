# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'uri'
require 'net/http'
require 'json'

uri = URI('https://arrivalist-puzzles.s3.amazonaws.com/national_travel.json')
res = Net::HTTP.get_response(uri)
body = res.body if res.is_a?(Net::HTTPSuccess)
json = JSON.parse(body)


if json
  data = json["data"]
  Trip.create(data)
end
