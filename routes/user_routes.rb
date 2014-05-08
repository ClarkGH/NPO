get '/login' do
    erb :login
end

post '/login' do
    @user = User.find_by username: params[:username]
    login(@user)
    redirect '/'
end

post '/logout' do
    session.clear
    redirect '/'
end

# post '/sign-up' do
    # User.create(
    #     username: params[:username],
    #     password_hash: params[:password]
    #     )
# end
