class AuthController < ApplicationController
	# skip_before_action :authenticate_request

 	def authenticate
   		command = AuthenticateUser.call(user_params[:name], user_params[:password])

	   	if command.success?
    		render json: { auth_token: command.result }
   		else
     		render json: { error: command.errors }, status: :unauthorized
   		end
 	end

 	def user_params
      params.permit(:name, :password)
    end
end
