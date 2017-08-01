require 'rails_helper'

describe Account, type: :model do
  context 'associations' do
    xit { is_expected.to belong_to(:owner).class_name('User') }
  end

  context 'validations' do
    xit { is_expected.to validate_presence_of(:owner) }
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:subdomain) }
    it { is_expected.to validate_uniqueness_of(:subdomain).case_insensitive }
    it { is_expected.to allow_value('startwifi').for(:subdomain) }
    it { is_expected.to allow_value('test').for(:subdomain) }
    it { is_expected.to_not allow_value('www').for(:subdomain) }
    it { is_expected.to_not allow_value('WWW').for(:subdomain) }
    it { is_expected.to_not allow_value('.test').for(:subdomain) }
    it { is_expected.to_not allow_value('test/').for(:subdomain) }

    it 'should validate case insensitive uniqueness' do
      create(:account, subdomain: 'Test')
      expect(build(:account, subdomain: 'test')).to_not be_valid
    end
  end
end
