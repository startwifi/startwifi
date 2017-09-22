class Api::V1::UsersController < ApiController
  before_action :authenticate_user

  def me
    token = Knock::AuthToken.new(payload: { sub: current_user.id }).token
    render json: { user: current_user, jwt: token }, status: 200
  end
end
