class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :subdomain, :active
end
