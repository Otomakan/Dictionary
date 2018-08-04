class Deck
  include Mongoid::Document
  field :title, type: String
  field :tags, type: Array
  belongs_to :user
  has_many :flashcard
end
