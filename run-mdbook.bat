echo off
echo Running mdbook english...
.\mdbook.exe clean .\
.\mdbook.exe build .\

echo:
echo Running mdbook pt-br...
.\mdbook.exe clean .\pt_BR\
.\mdbook.exe build .\pt_BR\

echo:
echo All done!
