Rails.application.routes.draw do
  resources :users
	root 'pages#home'
  get 'pages/home'
  get 'pages/help'
  post 'users.json', to: "users#create"
  post 'authenticate', to: "auth#authenticate"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
end
