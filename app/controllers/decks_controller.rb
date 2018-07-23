class DecksController < ApplicationController
	before_action :authenticate_request
  	attr_reader :current_user

  	def show
  		render :json => Deck.all
  	end

  	private

  	def authenticate_request
    	@current_user = AuthApiCalls.call(request.headers).result
    	render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  	end
end