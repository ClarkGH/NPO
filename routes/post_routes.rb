get '/create' do
    erb :create_post, :layout => false
end

post '/create' do
    p params
    post = Post.create(
        title: params[:title],
        author: params[:author],
        content: params[:content]
    )
    content_type :json
    post.to_json
end

get '/edit' do
    @posts = Post.all
    @action = 'edit'
    erb :show_posts, :layout => false

end

get '/edit/:id' do
    @post = Post.find( params[:id] )
    erb :edit_post, :layout => false

end

put '/edit/:id' do
    post = Post.find( params[:id] )
    post.update_attributes(
        title: params[:title],
        author: params[:author],
        content: params[:content]
    )
    #content_type :json
    #post.to_json
    redirect '/'
end

get '/delete' do
    @posts = Post.all
    @action = 'delete'
    erb :show_posts, :layout => false

end

get '/delete/:id' do
    @post = Post.find( params[:id] )
    erb :delete_post, :layout => false

end

delete '/delete/:id' do
    post = Post.find( params[:id] )
    post.destroy
    redirect '/'
end

get '/deena' do
    @posts = Post.where( author: 'deena' )
    content_type :json
    @posts.to_json
end

get '/jennifer' do
    @posts = Post.where( author: 'jennifer' )
    content_type :json
    @posts.to_json
end

get '/rachel' do
    @posts = Post.where( author: 'rachel' )
    content_type :json
    @posts.to_json
end

