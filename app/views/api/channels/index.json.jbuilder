json.array! @channels_array do |channel|
  json.extract! channel, :id, :name, :guild_id
end
