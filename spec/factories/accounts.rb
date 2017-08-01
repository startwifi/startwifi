FactoryGirl.define do
  factory :account do
    owner nil
    active true
    name { Faker::Company.name }
    subdomain { Faker::Internet.domain_word }
  end
end
