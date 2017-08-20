class Account < ApplicationRecord
  SUBDOMAIN_FORMAT = /\A[\w\-]+\Z/i
  RESTRICTED_SUBDOMAINS = %w(www cp oauth auth).freeze

  belongs_to :owner, class_name: User.name

  validates :name, :subdomain, presence: true
  validates :owner, presence: true
  validates :subdomain, uniqueness: { case_sensitive: false },
                        format: { with: SUBDOMAIN_FORMAT, message: 'contains invalid characters' },
                        exclusion: { in: RESTRICTED_SUBDOMAINS, message: 'restricted' }

  accepts_nested_attributes_for :owner

  before_validation :downcase_subdomain

  private

  def downcase_subdomain
    self.subdomain = subdomain&.downcase
  end
end
