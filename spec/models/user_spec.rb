require 'rails_helper'

describe User, type: :model do
  context 'associations' do
    it { is_expected.to have_one(:account) }
  end

  context 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
  end
end
