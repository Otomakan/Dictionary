class AuthController < ApplicationController


 	def authenticate
   		command = AuthenticateUser.call(user_params[:name], user_params[:password])

	   	if command.success?
    		render json: { status: "200", auth_token: command.result }
   		else
     		render json: { error: command.errors }, status: :unauthorized
   		end
 	end

 	def checktoken
 		@current_user = AuthApiCalls.call(request.headers).result
 		if @current_user
 			render json: {status:"200", name: @current_user.name}
 		else	
 			render json: { error: 'Not Authorized' }, status: 401
		end
	end
 	def user_params
      params.permit(:name, :password)
    end
end
