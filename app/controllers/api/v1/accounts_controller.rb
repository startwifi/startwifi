class Api::V1::AccountsController < ApiController
  def index
    @accounts = Account.all
    render json: @accounts
  end

  def show
    @account = Account.find(params[:id])
    render json: @account
  end
end
