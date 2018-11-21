FROM ruby:2.5
RUN gem install bundler
COPY Gemfile Gemfile.lock ./
RUN bundle install
WORKDIR /usr/src/app
CMD ["bundle", "exec", "middleman", "server"]
