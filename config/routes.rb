Rails.application.routes.draw do

  resources :operations, only: :index do
    collection do
      post :default_content_type
      post :set_response_content_type
      post :respond_to_block

      get :extra_simple_default_content_type
      get :extra_simple_set_response_content_type
      get :extra_simple_respond_to_block
    end
  end

  root to: redirect("/operations")
end
