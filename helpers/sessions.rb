def login(user)
    @current_user = user
    session[:user_id] = user.id
end

def logged_in?
    !current_user.nil?
end

def current_user
    return nil unless session[:user_id]
    @current_user ||= User.find( session[:user_id] )
end

def logout
    @current_user = nil
    session.clear
end
