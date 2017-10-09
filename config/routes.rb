Rails.application.routes.draw do
  resources :pins, only: [:index]
  get '/more', to: 'pins#more'
  root to: "static_pages#root"

end
