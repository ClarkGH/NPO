get '/login' do
    erb :login
end

post '/login' do
    #set session key
    redirect '/'
end

# post '/sign-up' do
    # User.create(
    #     username: params[:username],
    #     password_hash: params[:password]
    #     )
# end
