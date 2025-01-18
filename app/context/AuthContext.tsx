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

"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebase_app from "@/firebase/config";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import LoadingScreen from "@/components/LoadingScreen";
import { authErrors } from "@/firebase/AuthErrors";

// Initialize Firebase auth instance
const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

interface UserObj {
  uid: string;
  email: string | null;
  displayName: string | null;
  adminYear?: string | null;
  adminNo?: string | null;
  address?: string | null;
  phoneNo?: string | null;
  role?: string; // Optional: Add specific roles like "admin" or "student"
  verified?: boolean | null;
}

interface AuthContextType {
  user: UserObj | null;
  setUser: React.Dispatch<React.SetStateAction<UserObj | null>>;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<{ success: boolean; error?: string }>;
  register: (
    email: string,
    password: string,
    displayName: string,
    adminYear: string,
    adminNo: string,
    address: string,
    phoneNo: string
  ) => Promise<{ success: boolean; error?: string }>;
  fetchUserData: (
    uid: string
  ) => Promise<{ success: boolean; userData?: UserObj | null }>;
  deleteAccount: () => Promise<{ success: boolean; error?: string }>;
  updateData: (
    uid: string,
    updates: Partial<UserObj>
  ) => Promise<{ success: boolean; error?: string }>;
}

// Create the authentication context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Custom hook to access the authentication context
//export const useAuthContext = ():AuthContextType => useContext(AuthContext);
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({
  children,
}: AuthContextProviderProps): JSX.Element {
  // Set up state to track the authenticated user and loading status
  const [user, setUser] = useState<UserObj | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to the authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userData = await fetchUserData(firebaseUser.uid);
        if (userData.success && userData.userData) {
          setUser({
            ...userData.userData,
            uid: firebaseUser.uid,
            email: firebaseUser.email,
          });
        } else {
          console.error("error fetching user data");
        }
      } else {
        // User is signed out
        setUser(null);
      }
      // Set loading to false once authentication state is determined
      setLoading(false);
    });

    // Unsubscribe from the authentication state changes when the component is unmounted
    return () => unsubscribe();
  }, []);

  //register function
  const register = async (
    email: string,
    password: string,
    displayName: string,
    adminYear: string,
    adminNo: string,
    address: string,
    phoneNo: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = {
        email: userCred.user.email,
        displayName: displayName || "",
        adminYear: adminYear,
        adminNo: adminNo,
        address: address,
        phoneNo: phoneNo,
        role: "student",
        verified: false,
        createdAt: new Date(),
      };
      await setDoc(doc(db, "users", userCred.user.uid), userData, {
        merge: true, // Merge the new data with existing document data
      });

      setUser({ uid: userCred.user.uid, ...userData });
      auth.updateCurrentUser(userCred.user);
      return { success: true };
    } catch (e: any) {
      console.log(e);
      const message = authErrors[e.code] || authErrors["fallback"];
      return { success: false, error: message };
    }
  };

  //login function
  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const userData = await fetchUserData(userCred.user.uid);
      if (userData.success && userData.userData) {
        setUser({
          ...userData.userData,
          uid: userCred.user.uid,
          email: userCred.user.email,
        });
      } else {
        return { success: false, error: "Error Fetching User Data"};
      }
      auth.updateCurrentUser(userCred.user);
      return { success: true };
    } catch (e: any) {
      const message = authErrors[e.code] || authErrors["fallback"];
      return { success: false, error: message };
    }
  };

  // Logout Function
  const logout = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      const result = await signOut(auth);
      setUser(null); // Clear the user state on logout
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e };
    }
  };

  const fetchUserData = async (
    uid: string
  ): Promise<{ success: boolean; userData?: UserObj | null }> => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        return { success: true, userData: userDoc.data() as UserObj };
      } else {
        console.error("No user data found");
        return { success: false };
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return { success: false };
    }
  };

  // Delete Account Function
  const deleteAccount = async (): Promise<{
    success: boolean;
    error?: string;
  }> => {
    try {
      if (user) {
        const firebaseUser = auth.currentUser;
        if (firebaseUser) {
          await deleteUser(firebaseUser);
          await setDoc(doc(db, "users", firebaseUser.uid), {}, { merge: true }); // Optionally delete Firestore data
          setUser(null);
          return { success: true };
        }
      }
      return { success: false, error: "No authenticated user to delete." };
    } catch (e: any) {
      console.error(e);
      return { success: false, error: e.message };
    }
  };

  // Update User data
  const updateData = async (
    uid: string,
    updates: Partial<UserObj>
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      await updateDoc(doc(db, "users", uid), updates);
      setUser((prev) => (prev ? { ...prev, ...updates } : null));
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  };

  // Provide the authentication context to child components
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        register,
        fetchUserData,
        deleteAccount,
        updateData,
      }}
    >
      {loading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
}
