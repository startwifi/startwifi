require 'rails_helper'

describe Api::V1::AccountsController, type: :controller do
  let!(:user) { create(:user) }

  def authenticated_header(user)
    token = Knock::AuthToken.new(payload: { sub: user.id }).token
    { 'Authorization': "Bearer #{token}" }
  end

  describe 'GET #index' do
    let(:accounts) { create_list(:account, 3) }

    it 'should be success' do
      request.headers.merge!(authenticated_header(user))
      get :index
      should respond_with :ok
    end

    it 'should be failure' do
      get :index
      should respond_with :unauthorized
    end
  end

  describe 'GET #show' do
    let(:account) { create(:account) }

    it 'should be success' do
      request.headers.merge!(authenticated_header(user))
      get :show, params: { id: account.id }
      should respond_with :ok
    end

    it 'should be failure' do
      get :show, params: { id: account.id }
      should respond_with :unauthorized
    end
  end

  describe 'POST #create' do
    let(:params) { attributes_for(:account, owner_attributes: attributes_for(:user)) }

    it 'should be success' do
      request.headers.merge!(authenticated_header(user))
      post :create, params: params
      should respond_with :created
    end

    it 'should create an account' do
      request.headers.merge!(authenticated_header(user))
      expect { post :create, params: params }.to change { Account.count }.by(1)
    end

    it 'should return status 422' do
      allow_any_instance_of(Account).to receive(:save).and_return(false)
      request.headers.merge!(authenticated_header(user))
      post :create, params: params
      should respond_with :unprocessable_entity
    end
  end
end
