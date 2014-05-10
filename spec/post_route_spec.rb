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
        expected_output = Post.find( @post.id )

        #if route returns JSON
        #expect( last_response.body ).to eq( expected_output.to_json )

        #if route redirects
        expect( expected_output.title ).to eq( 'edit' )
    end

    it "should be able to delete a post" do
        expect{ delete "/delete/#{ @post.id }", { id: @post.id } }.to change{ Post.count }.by(-1)
    end
end
