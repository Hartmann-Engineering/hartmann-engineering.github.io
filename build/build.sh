docker run --rm -it -v $(pwd):/srv/jekyll jekyll/jekyll:latest jekyll build --watch --incremental --destination ./public
#  gem update --user-install