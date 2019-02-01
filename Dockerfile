FROM ruby:2.5.1
VOLUME /usr/src/app/source
EXPOSE 4567

RUN apt-get update
RUN apt-get install -y gem
RUN apt-get install -y nodejs
RUN rm -rf /var/lib/apt/lists/*

CMD ["bundle", "exec", "middleman", "server", "--watcher-force-polling"]
