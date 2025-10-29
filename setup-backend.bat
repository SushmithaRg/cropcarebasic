@echo off
echo Setting up CropKart Backend...

cd backend

echo Installing backend dependencies...
npm install

echo.
echo Backend setup complete!
echo.
echo Next steps:
echo 1. Copy env.example to .env and configure your environment variables
echo 2. Make sure MongoDB is running on your system
echo 3. Run: npm run dev
echo.
pause
