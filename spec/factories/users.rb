FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com"}
    name 'Bender Rodriguez'
    password 'password1234567'
  end
end
