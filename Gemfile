source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'rack-cors'
gem 'rails', '~> 5.0.2'

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'foreman'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
end
