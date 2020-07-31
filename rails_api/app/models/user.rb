class User < ApplicationRecord
	extend Devise::Models
    # Include default devise modules.
    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :trackable, :validatable,
          # :confirmable, :omniauthable 今回はTwitter認証とかしない
          # https://masahiro.me/2017/01/devise-token-auth-1/
    include DeviseTokenAuth::Concerns::User
end
