echo off
echo Restoring clean HTML...
node .\utils\restoreHTML.js .\pt_BR\src.clean_html\

echo:
echo Getting valid links and remaping...
node .\utils\getValidLinks.js .\pt_BR\src.clean_html.restored_html
node .\utils\getMappedLinks.js .\src.clean_html\ .\pt_BR\src.clean_html.restored_html
node .\utils\remapLinks.js .\pt_BR\src.clean_html.restored_html

echo:
echo Resorting text...
node .\utils\resortText.js .\pt_BR\src.clean_html.restored_html\

echo:
echo Getting Summary and TOCs...
node .\utils\getSUMMARY.js .\pt_BR\src.clean_html.restored_html.sorted\
node .\utils\getTOC.js .\pt_BR\src.clean_html.restored_html.sorted\

echo:
echo All done, replace .\pt_BR\src with new data in .\pt_BR\src.clean_html.restored_html.sorted\...
