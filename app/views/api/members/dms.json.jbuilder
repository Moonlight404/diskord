json.array! @dm_memberships do |dm_membership|
  json.id dm_membership.channel.id
  json.name dm_membership.second_member.username
end