#config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :comics do
      resources :comments
    end
  end
end
end


