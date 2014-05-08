class User < ActiveRecord::Base
    validates_presence_of :username, :password_hash
    validates_uniqueness_of :username
end

