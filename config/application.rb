require_relative 'boot'

# require 'rails/all'
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

# config.middleware.insert_before 0, Rack::Cors do
#       allow do
#         origins '*'
#         resource '*', headers: :any, methods: [:get, :post, :options]
#       end
#     end

class Application < Rails::Application
	# Initialize configuration defaults for originally generated Rails version.
	config.load_defaults 5.2


	# Settings in config/environments/* take precedence over those specified here.
	# Application configuration can go into files in config/initializers
	# -- all .rb files in that directory are automatically loaded after loading
	# the framework and any gems in your application.

	# Setup CORS to allow communciation with REACT app
	config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'localhost:5000'
        resource '*', headers: :any, methods: [:get, :post]
      end
    end
end
