# Frontend Setup for OTP Service

This React.js frontend for the OTP (One-Time Password) service is built with Reactjs, React Router, and Tailwind CSS. Below are instructions to get started with the frontend.

## Functionality
#### Generate OTP

Navigate to the "Generate OTP" section.
Enter your email address.
Click the "Generate OTP" button.

Workflow
User Input:
Enter a valid email address in the designated input field.

### OTP Generation:

Upon clicking "Generate OTP," the frontend sends a request to the /api/otp/generate endpoint.
The backend generates an OTP and sends it to the provided email address using a predefined mail template.
User Notification:

A notification is displayed to inform the user that the OTP has been generated and sent to their email.
Navigation:

The user is automatically redirected to the "Verify OTP" section.

#### VerifyOTP .

Navigate to the "Verify OTP" section.
Enter the OTP received in your email.
Click the "Verify OTP" button.

Workflow
User Input:
Enter the OTP received via email in the input field.

## OTP Verification:
The frontend sends a request to the /api/otp/verify endpoint with the entered OTP.
The backend validates the received OTP.

Verification Result:
If the OTP is valid, a success message is displayed.
If the OTP is invalid, an error message is displayed.
User Notification:

# The user is informed about the success or failure of the OTP verification process.

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

