class ApplicationController < ActionController::API
  include Knock::Authenticable

  def unauthorized_entity(entity_name)
    render json: { error: "Unauthorized request from #{entity_name}" }, status: :unauthorized
  end
end
