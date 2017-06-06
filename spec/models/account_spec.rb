require 'rails_helper'

describe Account, type: :model do
  context 'associations' do
    xit { is_expected.to belong_to(:owner).class_name('User') }
  end

  context 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    xit { is_expected.to validate_presence_of(:owner) }
  end
end
