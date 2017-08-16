class Account < ApplicationRecord
  SUBDOMAIN_FORMAT = /\A[\w\-]+\Z/i
  RESTRICTED_SUBDOMAINS = %w(www cp oauth auth).freeze

  validates :name, :subdomain, presence: true
  validates :subdomain, uniqueness: { case_sensitive: false },
                        format: { with: SUBDOMAIN_FORMAT, message: 'contains invalid characters' },
                        exclusion: { in: RESTRICTED_SUBDOMAINS, message: 'restricted' }

  before_validation :downcase_subdomain

  private

  def downcase_subdomain
    self.subdomain = subdomain&.downcase
  end
end
