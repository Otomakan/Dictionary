class Flashcard
  include Mongoid::Document
  field :title, type: String
  field :abstract, type: String
  field :tags, type: Array
  has_and_belongs_to_many :deck
end
