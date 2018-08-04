# app/commands/authenticate_user.rb

class AuthenticateUser
  include JWTHelper
  prepend SimpleCommand

  def initialize(name, password)
    @name = name
    @password = password
  end


  def call
    if user
      JWTencode({user_id: user.id, exp: 24.hours.from_now.to_i})
    end
  end


  private

  attr_accessor :name, :password

  def user
    user = User.find_by({name: name})
    return user if user && user.authenticate(password)

    errors.add :user_authentication, 'invalid credentials'
    nil
  end
end