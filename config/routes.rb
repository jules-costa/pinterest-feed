Rails.application.routes.draw do
  resources :pins, only: [:index]
  root to: "static_pages#root"
end
