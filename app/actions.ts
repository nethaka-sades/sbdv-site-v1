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
 *  Created on Sat Feb 08 2025
 *  This file use original nextjs-supabase boilerplate repo code
 */

"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const full_name = formData.get("display_name")?.toString();
  const admin_no = formData.get("admin_no")?.toString();
  const admin_year = formData.get("admin_year")?.toString();
  const address = formData.get("address")?.toString();
  const phone_no = formData.get("phone_no")?.toString();
  const whatsapp_no = formData.get("whatsapp_no")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (data.user) {  // Check if signup was successful
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([{ id: data.user.id, full_name: full_name, admin_year: admin_year, admin_no: admin_no, address: address, phone_no: phone_no, whatsapp_no: whatsapp_no, verified: false }]);

    if (profileError) {
      console.error(profileError.code + ' Error creating profile: ', profileError);
      await supabase.auth.signOut()
      const { error: deleteError } = await supabase.auth.admin.deleteUser(data.user.id);

      if (deleteError) {
        console.error("Error deleting user:", deleteError);
      }
      return encodedRedirect("error", "/sign-up", profileError.message);
    } else {
      console.log('Profile created successfully!');
    }

    const { error: MarksError } = await supabase
      .from('marks')
      .insert([{ id: data.user.id, first_term: "", second_term: "", third_term: "" }]);

    if (MarksError) {
      console.error(MarksError.code + ' Error creating marks profile: ', MarksError);
      await supabase.auth.signOut()
      const { error: deleteError } = await supabase.auth.admin.deleteUser(data.user.id);

      if (deleteError) {
        console.error("Error deleting user:", deleteError);
      }
      return encodedRedirect("error", "/sign-up", MarksError.message);
    } else {
      console.log('Marks Profile created successfully!');
    }
  } else if (error) {
    console.error('Sign-up error:', error);
  }

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/dashboard",
      "Success!",
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/dashboard");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/dashboard/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/dashboard/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const getProfileAction = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: O_data, error: O_error, status: O_status } = await supabase
    .from("profiles")
    .select(`full_name, admin_year, admin_no, address, phone_no, whatsapp_no`)
    .eq("id", user?.id)
    .single();

  if (O_error && O_status !== 406) {
    console.log(O_error);
  }

  return O_data;
}


export const updateProfileAction = async (formData: FormData) => {
  const supabase = await createClient();

  const full_name_n = formData.get("display_name") as string;
  const address_n = formData.get("address") as string;
  const phone_no_n = formData.get("phone_no") as string;
  const whatsapp_no_n = formData.get("whatsapp_no") as string;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: O_data, error: O_error, status: O_status } = await supabase
    .from("profiles")
    .select(`full_name, admin_year, admin_no, address, phone_no, whatsapp_no`)
    .eq("id", user?.id)
    .single();

  if (O_error && O_status !== 406) {
    encodedRedirect(
      "error",
      "/dashboard/update-profile",
      "Profile Data update failed",
    );
  }

  const { error } = await supabase.from("profiles").update({
    full_name: full_name_n || O_data?.full_name,
    admin_year: O_data?.admin_year,
    admin_no: O_data?.admin_no,
    address: address_n || O_data?.address,
    phone_no: phone_no_n || O_data?.phone_no,
    whatsapp_no: whatsapp_no_n || O_data?.whatsapp_no,
    updated_at: new Date().toISOString(),
  }).eq("id", user?.id);

  if (error) {
    encodedRedirect(
      "error",
      "/dashboard/update-profile",
      "Profile Data update failed",
    );
  }

  encodedRedirect("success", "/dashboard/update-profile", "Profile updated");
};

export const check_verification_status = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data, error, status } = await supabase
    .from("profiles")
    .select(`verified`)
    .eq("id", user?.id)
    .single();

  if (error && status !== 406) {
    console.log(error);
  }

  if(data?.verified == true){
    return true;
  } else {
    return false;
  }

  return false;
}

export const request_deletion = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { error } = await supabase
    .from('profiles')
    .update({
      deletion_req: true,
      deletion_req_date: new Date().toISOString()
    })
    .eq('id', user?.id);

  console.log(error);

  if (error) {
    return encodedRedirect("error", "/dashboard/delete-request", "Deletion Request Failed");
  } else {
    return encodedRedirect("success", "/dashboard/delete-request", "");
  }
}

export const cancel_request_deletion = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { error } = await supabase
    .from('profiles')
    .update({
      deletion_req: false,
      deletion_req_date: null
    })
    .eq('id', user?.id);

  console.log(error);

  if (error) {
    return encodedRedirect("error", "/dashboard/delete-request", "Deletion Request Cancellation Failed");
  } else {
    return encodedRedirect("success", "/dashboard/delete-request", "");
  }
}