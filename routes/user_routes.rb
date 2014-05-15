get '/login' do
    erb :login, :layout => false

end

post '/login' do
    @user = User.find_by username: params[:username]
    login(@user)
    redirect '/'
end

get '/logout' do
    logout
    redirect '/'
end

# post '/sign-up' do
    # User.create(
    #     username: params[:username],
    #     password_hash: params[:password]
    #     )
# end
