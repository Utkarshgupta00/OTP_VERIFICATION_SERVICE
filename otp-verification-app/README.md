## Features

| Feature                                      | Description                                                                                                                                                           |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enter Email | The user is informed about the validation of the Email and if Email is valid User Navigates to the Verify OTP page.   |
| Generate OTP                         | Navigate to the "Generate OTP" section, Enter your email address, Click the "Generate OTP" button                                                                                                    |
| VerifyOTP                         | Navigate to the "Verify OTP" section, Enter the OTP received in your email, Click the "Verify OTP" button.                                                                                                    |
| User Input         | Enter the OTP received via email in the input field.                                                                                                               |
| Verification Result        |The user is informed about the success or failure of the OTP verification process.                                                                                                              |

 

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

| Prerequisite          | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| Node.js and npm       | Install Node.js and npm on your development machine.            |
| MongoDB database     | Set up a MongoDB database (local or cloud-hosted, e.g., MongoDB Atlas) for storing OTP data. |

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Utkarshgupta00/OTP_VERIFICATION_SERVICE/otp-verification-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd otp-verification-app
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the service:

   ```shell
   npm start
   ```




Note
State Management:

React hooks are utilized for efficient state management, ensuring a seamless user experience.
The state is updated based on API responses and user interactions.
Error Handling:

Robust error handling is implemented to gracefully manage issues such as invalid email addresses, failed OTP generation, and incorrect OTP verification.
Responsive Design:

The application is designed to provide a consistent and visually appealing experience across various devices.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install project dependencies.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm start`

Starts the app in production mode after a successful build.

## Project Structure

The frontend project follows a standard Next.js structure:

