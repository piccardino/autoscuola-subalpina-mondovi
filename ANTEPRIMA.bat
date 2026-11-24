@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul || (echo Serve Python 3 per avviare l'anteprima locale. & pause & exit /b 1)
echo Apri http://127.0.0.1:8174 nel browser. Premi Ctrl+C per chiudere.
py -3 -m http.server 8174 --bind 127.0.0.1 --directory dist
