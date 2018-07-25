module UsersHelper
	def res_json(object)
		render json: object, notice: "OK"
	end
end
