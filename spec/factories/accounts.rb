FactoryGirl.define do
  factory :account do
    association :owner, factory: :user
    active true
    name { Faker::Company.name }
    subdomain { Faker::Internet.domain_word }
  end
end
