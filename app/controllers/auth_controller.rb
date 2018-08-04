class AuthController < ApplicationController


 	def authenticate
   		command = AuthenticateUser.call(user_params[:name], user_params[:password])

	   	if command.success?
    		render json: {auth_token: command.result, name: user_params[:name] }, status: 200
   		else
     		render json: { error: command.errors }, status: :unauthorized
   		end
 	end

 	def checktoken
 		@current_user = AuthApiCalls.call(request.headers).result
 		if @current_user
 			render json: { name: @current_user.name}, status: 200
 		else	
 			render json: { error: 'Not Authorized' }, status: 401
		end
	end
 	def user_params
      params.permit(:name, :password)
    end
end
