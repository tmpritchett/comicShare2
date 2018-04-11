# Rails.application.routes.draw do
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
# end
Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :comics do
      resources :comments
    end
  end
end
end


