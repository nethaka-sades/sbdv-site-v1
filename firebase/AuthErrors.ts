/*
 *  
 *   Copyright 2025 Nethaka De Saram
 *  
 *  Licensed under the Apache License, Version 2.0 (the 'License');
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  
 *      http://www.apache.org/licenses/LICENSE-2.0
 *  
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *  
 *  
 *  
 *  
 *  Created on Sun Jan 19 2025
 *  
 */


export const authErrors: Record<string, string> = {
    // Authentication Errors
    "auth/email-already-exists": "This email address is already in use. Please try another one.",
    "auth/email-already-in-use": "This email address is already in use. Please try another one.",
    "auth/invalid-email": "The email address is invalid. Please check and try again.",
    "auth/invalid-password": "The password is too weak. It should be at least 6 characters long.",
    "auth/weak-password": "The password is too weak. It should be at least 6 characters long.",
    "auth/operation-not-allowed": "This operation is not allowed. Please contact support.",
    "auth/user-disabled": "This account has been disabled. Please contact support for assistance.",
    "auth/user-not-found": "No user found for the provided credentials. Please sign up or check your input.",
    "auth/wrong-password": "The password you entered is incorrect. Please try again.",
    "auth/too-many-requests": "Too many login attempts. Please wait a moment and try again.",
    "auth/network-request-failed": "Network error. Please check your connection and try again.",
    "auth/invalid-credential": "Invalid Email or Password. Please Try Again.",
    
    // Token Errors
    "auth/id-token-expired": "Your session has expired. Please log in again.",
    "auth/id-token-revoked": "Your session has been revoked. Please log in again.",
    "auth/invalid-id-token": "The ID token provided is invalid. Please log in again.",
    
    // User Management Errors
    "auth/claims-too-large": "The claims payload is too large. Please contact support.",
    "auth/uid-already-exists": "This user ID is already in use. Please contact support.",
    "auth/invalid-uid": "The user ID provided is invalid. Please contact support.",
    "auth/missing-uid": "A user ID is required. Please contact support.",
    "auth/phone-number-already-exists": "This phone number is already in use. Please try another one.",
    "auth/invalid-phone-number": "The phone number provided is invalid. Please check and try again.",
    
    // Email Errors
    "auth/invalid-email-verified": "The email verification status is invalid. Please contact support.",
    "auth/invalid-display-name": "The display name provided is invalid. Please use a valid name.",
    "auth/invalid-photo-url": "The photo URL provided is invalid. Please use a valid URL.",
    
    // Session Errors
    "auth/session-cookie-expired": "Your session has expired. Please log in again.",
    "auth/session-cookie-revoked": "Your session cookie has been revoked. Please log in again.",
    "auth/invalid-session-cookie-duration": "The session cookie duration is invalid. Please contact support.",
    
    // Dynamic Link Errors
    "auth/invalid-continue-uri": "The continue URL provided is invalid. Please check the link and try again.",
    "auth/missing-continue-uri": "The continue URL is missing. Please check the link and try again.",
    "auth/unauthorized-continue-uri": "The continue URL is not authorized. Please contact support.",
    
    // Internal Errors
    "auth/internal-error": "An internal server error occurred. Please try again later.",
    "auth/invalid-argument": "Invalid input detected. Please check your data and try again.",
    "auth/project-not-found": "No project found for the provided credentials. Please contact support.",
    "auth/configuration-not-found": "Configuration not found. Please contact support.",
    
    // Hashing Errors
    "auth/missing-hash-algorithm": "The hashing algorithm is missing. Please contact support.",
    "auth/invalid-hash-algorithm": "The hashing algorithm provided is invalid. Please contact support.",
    "auth/invalid-hash-block-size": "The hash block size provided is invalid. Please contact support.",
    "auth/invalid-hash-derived-key-length": "The hash derived key length provided is invalid. Please contact support.",
    "auth/invalid-hash-key": "The hash key provided is invalid. Please contact support.",
    "auth/invalid-hash-memory-cost": "The hash memory cost provided is invalid. Please contact support.",
    "auth/invalid-hash-parallelization": "The hash parallelization provided is invalid. Please contact support.",
    "auth/invalid-hash-rounds": "The hash rounds provided are invalid. Please contact support.",
    "auth/invalid-hash-salt-separator": "The hashing salt separator provided is invalid. Please contact support.",
    
    // Fallback
    fallback: "An unexpected error occurred. Please try again later.",
  };
  