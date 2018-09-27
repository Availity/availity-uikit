#!/usr/bin/env bash

set -e

BUMP_TYPE=$1

if [ -z "$BUMP_TYPE" ]; then
  echo "Grabbing recommended bump type..."
  BUMP_TYPE="$(node_modules/.bin/conventional-recommended-bump -p angular)"
fi

if [ -z "$BUMP_TYPE" ]; then
  error "Unable to set the type of version bump"
  exit 1
fi

echo "==> Bumping npm version"
VERSION="$(npm version --no-git-tag-version $BUMP_TYPE | sed 's/v//g')"

echo "==> Updating Changelog"
node_modules/.bin/conventional-changelog -i CHANGELOG.md -o CHANGELOG.md -p angular
git add .
git commit -m "chore: release v${VERSION}"

echo "==> Bumping lerna version"
node_modules/.bin/lerna publish --repo-version ${VERSION} --yes
