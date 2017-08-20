require 'rails_helper'

describe User, type: :model do
  context 'associations' do
  end

  context 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:email) }
  end
end
