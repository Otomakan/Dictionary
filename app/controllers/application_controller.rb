class ApplicationController < ActionController::API
	def authenticate
	    command = AuthenticateUser.call(user_params[:email], user_params[:password])

	   if command.success?
	     render json: { auth_token: command.result }
	   else
	     render json: { error: command.errors }, status: :unauthorized
	   end
 	end
 	private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email)
    end
end
