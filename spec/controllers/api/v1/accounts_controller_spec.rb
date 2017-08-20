require 'rails_helper'

describe Api::V1::AccountsController, type: :controller do
  describe 'GET #index' do
    let(:accounts) { create_list(:account, 3) }

    it 'should be success' do
      get :index
      should respond_with :ok
    end
  end

  describe 'GET #show' do
    let(:account) { create(:account) }

    it 'should be success' do
      get :show, params: { id: account.id }
      should respond_with :ok
    end
  end

  describe 'POST #create' do
    let(:params) { attributes_for(:account, owner_attributes: attributes_for(:user)) }

    it 'should be success' do
      post :create, params: params
      should respond_with :created
    end

    it 'should create an account' do
      expect { post :create, params: params }.to change { Account.count }.by(1)
    end

    it 'should return status 422' do
      allow_any_instance_of(Account).to receive(:save).and_return(false)
      post :create, params: params
      should respond_with :unprocessable_entity
    end
  end
end
