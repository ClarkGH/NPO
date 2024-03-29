require 'rubygems'
# If RACK_ENV isn't set, set it to 'test'.  Sinatra defaults to development,
# so we have to override that unless we want to set RACK_ENV=test from the
# command line when we run rake spec.  That's tedious, so do it here.
ENV['RACK_ENV'] ||= 'test'

require File.expand_path("../../config/environment", __FILE__)
require 'shoulda-matchers'
require 'rack/test'
require 'rspec'

RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.color_enabled = true
  config.tty = true
  config.formatter = :documentation
end

def app
  Sinatra::Application
end
