@echo off
echo ========================================
echo    CropKart Full Stack Setup Script
echo ========================================
echo.

echo Step 1: Setting up Backend...
cd backend
echo Installing backend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Backend installation failed!
    pause
    exit /b 1
)

echo.
echo Step 2: Setting up Frontend...
cd ..
echo Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Frontend installation failed!
    pause
    exit /b 1
)

echo.
echo Step 3: Creating environment files...
cd backend
if not exist .env (
    copy env.example .env
    echo Created .env file from template
) else (
    echo .env file already exists
)

echo.
echo ========================================
echo    Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Configure your .env file in the backend folder
echo 2. Make sure MongoDB is running
echo 3. Start the backend: cd backend && npm run dev
echo 4. Start the frontend: npm run dev
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:5173
echo.
echo For detailed setup instructions, see README-BACKEND.md
echo.
pause
