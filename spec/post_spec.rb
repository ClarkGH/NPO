require 'spec_helper'

describe Post do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:content) }

    it "should save a post to the database" do
        expect{ Post.create(
                title: "test",
                author: "test", 
                content: "test"
            )}.to change{ Post.count }.by(1)
    end
end