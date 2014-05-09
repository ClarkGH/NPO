get '/' do
    @current_user = current_user
    erb :index
end
