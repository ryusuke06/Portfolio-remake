class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken

  # APIではCSRFチェックをしないように
  skip_before_action :verify_authenticity_token, if: :devise_controller?
end
