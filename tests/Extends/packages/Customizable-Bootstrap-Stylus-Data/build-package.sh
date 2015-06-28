# Note if "-dirty error": delete the submodule folder with:
# cd path/to/packages/bootstrap-stylus-data/
# rmdir -rf bootstrap/ # be careful!
# Then update the submodule because you only deleted the content:
# git submodule update


# Generates the package contents and programmatic defines the package.js files
#!/usr/bin/env bash

set -e
set -u
set -o pipefail

# Establish Variables
BOOTSTRAP_TAG="4.0.5"
PUBLISH_VERSION="4.0.5"

BOOTSTRAP_DIR="bootstrap"
BOOTSTRAP_STYLUS_DIR="$BOOTSTRAP_DIR/bootstrap"
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

# Check out latest version of bootstrap set in the tag above
cd "${BOOTSTRAP_DIR}"
git checkout "${BOOTSTRAP_TAG}"


# Exit the submodule and return to the package folder
cd ../

# Create package.js file for Meteor
cat << HEREDOC > ${PACKAGE_JS}
Package.describe({
  name: "kyleking:customizable-bootstrap-stylus-data",
  summary: "Raw bootstrap-stylus package",
  version: "${PUBLISH_VERSION}",
  git: "https://github.com/kyleking/customizable-bootstrap-stylus-data.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles('bootstrap-data.js', 'server');
  api.export(['BootstrapData']);
HEREDOC

STYLUS_FILES=`find $BOOTSTRAP_STYLUS_DIR -name "*.styl"`
JS_FILES=`find $BOOTSTRAP_JS_DIR -name "*.js" -a ! -path '*tests*'`
FONT_FILES="$BOOTSTRAP_DIR/fonts/*"

# add all js and styl files
echo "  api.add_files([" >> $PACKAGE_JS
for FILE in $STYLUS_FILES $JS_FILES
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
