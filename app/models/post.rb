class Post < ActiveRecord::Base
    validates_presence_of :title, :author, :content
end