FROM ruby:2.5.1
RUN echo "deb http://archive.debian.org/debian stretch main" > /etc/apt/sources.list
COPY . /usr/src/app
VOLUME /usr/src/app
EXPOSE 4567
WORKDIR /usr/src/app
RUN apt-get update
RUN apt-get install -y gem
RUN apt-get install -y nodejs
RUN rm -rf /var/lib/apt/lists/*
RUN bundle install
CMD ["bundle", "exec", "middleman", "server", "--watcher-force-polling"]



