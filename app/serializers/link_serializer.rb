class LinkSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :link, :votes

  has_many :comments
end