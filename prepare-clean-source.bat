echo off
echo Getting Summary and TOCs...
node .\utils\getSUMMARY.js .\src
node .\utils\getTOC.js .\src


echo Getting valid links...
node .\utils\getValidLinks.js .\src

echo:
echo Cleaning HTML...
node .\utils\cleanHTML.js .\src

echo:
echo Removing Summary and TOCs...
node .\utils\removeTOC.js .\src.clean_html\

echo:
echo All done, .\src.clean is ready.
