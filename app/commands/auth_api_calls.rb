class AuthApiCalls
	include JWTHelper
	prepend SimpleCommand

	def initialize(headers={})
		@headers = headers
	end
	def call
		user
	end

	private

	attr_reader :headers
	def decoded_token
		JWTdecode(auth_header)
	end
	def auth_header
		if headers['Authorization'].present?
			return headers['Authorization'].split(' ').last
    	else
      		errors.add(:token, 'Missing token')
    	end
   		return nil
	end
	def user
		@user ||= User.find_by({name: decoded_token[:name]}) if decoded_token
		@user || errors.add(:token, "invalid token") && nil
	end
end