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

      
