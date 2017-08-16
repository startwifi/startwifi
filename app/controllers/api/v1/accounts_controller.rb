class Api::V1::AccountsController < ApiController
  def index
    @accounts = Account.all
    render json: @accounts
  end

  def show
    @account = Account.find(params[:id])
    render json: @account
  end

  def create
    @account = Account.new(account_params)
    if @account.save
      render json: @account, status: 201
    else
      render json: @account.errors, status: 422
    end
  end

  private

  def account_params
    params.permit(:name, :subdomain)
  end
end
