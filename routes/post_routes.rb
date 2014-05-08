get '/create' do
    erb :create_post
end

post '/create' do
    Post.create(
        title: params[:title],
        author: params[:author], 
        content: params[:content]
    )
    redirect '/'
end

get '/edit' do
    @posts = Post.all
    @action = 'edit'
    erb :show_posts
end

get '/edit/:id' do
    @post = Post.find( params[:id] )
    erb :edit_post
end

put '/edit/:id' do
    post = Post.find( params[:id] )
    post.title = params[:title]
    post.author = params[:author]
    post.content = params[:content]
    post.save
    redirect '/'
end

get '/delete' do
    @posts = Post.all
    @action = 'delete'
    erb :show_posts
end

get '/delete/:id' do
    @post = Post.find( params[:id] )
    erb :delete_post
end

delete '/delete/:id' do
    post = Post.find( params[:id] )
    post.destroy
    redirect '/' 
end