class Api::V1::UsersController < ApiController
  before_action :authenticate_user

  def me
    render json: current_user, status: 200
  end
end
