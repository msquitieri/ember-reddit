class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :link_id

end