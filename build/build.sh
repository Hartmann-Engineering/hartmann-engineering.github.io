rm -rf ./public
docker inspect medienstation_web &>/dev/null
if [[ $? -eq 1 ]]; then
  docker run --name medienstation_web -it -v $(pwd):/srv/jekyll jekyll/jekyll:latest jekyll build --watch --incremental --destination ./public
else
  docker start medienstation_web; docker exec -it medienstation_web jekyll build --watch --incremental --destination ./public
fi