class DecksController < ApplicationController
	before_action :authenticate_request
  	attr_reader :current_user

  	def show
  		render json: {decks: Deck.all}, status:200
  	end


    def create
      @deck = deck.create(deck_params)
        @deck.user_id = @current_user._id
      if @deck.save
        render json: {message: "Success"}, status: 200
      else
        render json: {error: @deck.errors.messages}, status: 401
  	  end
    end

    private

  	def authenticate_request
    	@current_user = AuthApiCalls.call(request.headers).result
    	render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  	end

    def deck_params
      params.require(:deck).permit(:title, :tags)
    end
end