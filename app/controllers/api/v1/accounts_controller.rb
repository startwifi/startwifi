class Api::V1::AccountsController < ApiController
  def index
    @accounts = Account.all
    render json: @accounts
  end
end
