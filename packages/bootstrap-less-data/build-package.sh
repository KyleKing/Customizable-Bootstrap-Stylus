#!/usr/bin/env bash

set -e
set -u
set -o pipefail

BOOTSTRAP_TAG="v3.3.4"
PUBLISH_VERSION="3.3.4_1"

BOOTSTRAP_DIR="bootstrap"
BOOTSTRAP_LESS_DIR="$BOOTSTRAP_DIR/less"
BOOTSTRAP_JS_DIR="$BOOTSTRAP_DIR/js"
BOOTSTRAP_FONT_DIR="$BOOTSTRAP_DIR/fonts"
PACKAGE_JS="package.js"

if [ ! -d "$BOOTSTRAP_DIR" ]
then
  mkdir "${BOOTSTRAP_DIR}"
fi

if [ ! -d "$BOOTSTRAP_JS_DIR" ]
then
  git submodule init
fi

git submodule update

cd "${BOOTSTRAP_DIR}"
git checkout "${BOOTSTRAP_TAG}"

cd ..

cat << HEREDOC > ${PACKAGE_JS}
Package.describe({
  name: "kyleking:bootstrap-less-data",
  summary: "bootstrap data",
  version: "${PUBLISH_VERSION}",
  git: "https://github.com/Nemo64/meteor-bootstrap-data.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles('bootstrap-data.js', 'server');
  api.export(['BootstrapData']);
HEREDOC

LESS_FILES=`find $BOOTSTRAP_LESS_DIR -name "*.less"`
JS_FILES=`find $BOOTSTRAP_JS_DIR -name "*.js" -a ! -path '*tests*'`
FONT_FILES="$BOOTSTRAP_DIR/fonts/*"

# add all js and less files
echo "  api.add_files([" >> $PACKAGE_JS
for FILE in $LESS_FILES $JS_FILES
do
  echo "    '$FILE'," >> $PACKAGE_JS
done
echo "  ], 'server', {isAsset:true});" >> $PACKAGE_JS

# add fonts directly for the frontend
echo "  api.add_files([" >> $PACKAGE_JS
for FILE in $FONT_FILES
do
  echo "    '$FILE'," >> $PACKAGE_JS
done
echo "  ], 'client');" >> $PACKAGE_JS

# end the use statement
echo "});" >> $PACKAGE_JS
