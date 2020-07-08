class V1::TopsController < ApplicationController
  def index
    render json: {
      msg: "Hello!!!!!"
    }
  end
end
