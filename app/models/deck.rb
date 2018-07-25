class Deck
	include Mongoid::Document
	field :name, type: String
	# has_many :child_deck, :class_name => 'Deck', :inverse_of => :parent_deck
	# belongs_to :parent_deck, :class_name => 'Deck', :inverse_of => :child_deck
	# has_many :flashcards
	validates :name, presence:true
end