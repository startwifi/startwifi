Rails.application.routes.draw do
  post :user_token, to: 'user_token#create'

  namespace :api do
    namespace :v1 do
      resources :accounts
      resources :users
    end
  end
end
