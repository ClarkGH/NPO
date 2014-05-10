require 'spec_helper'

describe Post do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:content) }

    it "should be able to write a post to the DB" do
        params = {
            title: "herp",
            author: "derp",
            content: "meow"
        }
        expect{ post '/create', params }.to change{Post.count}.by(1)
    end
end
