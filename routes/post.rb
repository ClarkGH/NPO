get '/create' do
    erb :create
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
    erb :edit
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
      
