get '/login' do
    erb :login
end

post '/login' do
    User.create(
        username: params[:username],
        password_hash: params[:password]
        )
    redirect '/'
end
