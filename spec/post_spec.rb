require 'spec_helper'

describe Post do
    before( :all ) do
        Post.destroy_all
        @params = {
            title: "herp",
            author: "derp",
            content: "meow"
        }
        @post = Post.create( @params )
    end

    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:author) }
    it { should validate_presence_of(:content) }

    it "should be able to a post" do
        expect{ post '/create', @params }.to change{ Post.count }.by(1)
    end

    it "should be able to edit a post" do
        edit_params = {
            id: @post.id,
            title: "edit",
            author: "these",
            content: "params"
        }
        put "/edit/#{ @post.id }", edit_params
        expected_output = Post.find( @post.id ).to_json

        expect( last_response.body ).to eq( expected_output )
    end
end
