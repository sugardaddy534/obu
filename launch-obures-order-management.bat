@echo off
echo Starting ObuRes Order Management Application...
echo.
echo This application requires Java 11 or higher to be installed.
echo.
echo Checking Java installation...

java -version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Java is not installed or not in your PATH.
    echo Please install Java 11 or higher from https://adoptium.net/
    echo.
    pause
    exit /b 1
)

echo Java is installed. Starting application...
echo.
echo The application will create a shortcut on your desktop.
echo.

REM Create a shortcut on the desktop
echo Creating desktop shortcut...
powershell "$WshShell = New-Object -ComObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut([Environment]::GetFolderPath('Desktop') + '\ObuRes Order Management.lnk'); $Shortcut.TargetPath = '%~dp0obures-order-management.jar'; $Shortcut.IconLocation = '%~dp0favicon.ico'; $Shortcut.Save()"

echo.
echo Starting ObuRes Order Management...
echo.
echo Please wait while the application loads...
echo.

start javaw -jar obures-order-management.jar

echo.
echo If the application doesn't start, please make sure you have Java 11 or higher installed.
echo.
pause

