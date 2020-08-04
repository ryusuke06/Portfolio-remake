Rails.application.routes.draw do

    #devise_for :admins, skip: [:registrations], controllers: {
    #sessions:      "admins/sessions",
    #passwords:     "admins/passwords"
    #}
    #devise_for :users, controllers: {
    #sessions:      "users/sessions",
    #passwords:     "users/passwords",
    #registrations: "users/registrations"
    #}

  devise_for :users

  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      root "tops#index"
      post "simple_login", to: "tops#user_simple_login"

      resources :users,only:[:show, :edit, :update]
      resources :tests, only:[:index, :show] do
        resource :favorites, only:[:create, :destroy]
        resource :details, only:[:show]
        resource :assessments, only:[:create, :update, :destroy]
      end
      resources :results, only:[:show]
      resource :inquiries, only:[:new, :create]

      namespace :admins do
        root "tops#top"
        post "simple_login", to: "tops#admins_simple_login"
        get "inquiries/unread", to: "inquiries#unread"
        resources :users, only:[:index, :edit, :update]
        resources :categories, only:[:index, :create, :update]
        resources :tests do
          resource :details, only:[:show]
        end
        resources :inquiries, only:[:index, :show, :update, :destroy]
      end
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
