FactoryGirl.define do
  factory :account do
    owner nil
    active true
    name { Faker::Company.name }
  end
end
