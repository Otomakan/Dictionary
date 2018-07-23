module JWTHelper
	def JWTencode(payload)
     payload[:exp] = 24.hours.from_now.to_i
     JWT.encode(payload, Rails.application.credentials.secret_key_base)
   end

   def JWTdecode(token)
     JWT.decode(token, Rails.application.credentials.secret_key_base)[0]
     # puts "IN JWT decode"
     # puts "THE HASH"
     # puts HashWithIndifferentAccess.new(body)
     # puts format(body)
     # format(body)
   rescue
     nil
   end
  
end