class User < ApplicationRecord
  has_secure_password

  has_one :account, foreign_key: :owner_id, dependent: :destroy

  validates :name, :email, presence: true
  validates :email, uniqueness: { case_sensitive: false }
end
