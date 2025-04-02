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
  const dob = formData.get("dob")?.toString();
  const c_class = formData.get("c_class")?.toString();
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

  const { data, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (authError) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Error Creating a Profile. Please try again",
    );
  } else {
    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ id: data.user.id, full_name: full_name, admin_year: admin_year, admin_no: admin_no, dob: dob, c_class: c_class, address: address, phone_no: phone_no, whatsapp_no: whatsapp_no, verified: false, user_email: email }]);

      if (profileError) {
        await supabase.auth.signOut()
        return encodedRedirect(
          "error",
          "/sign-up",
          "Error Creating a Profile. Please try again",
        );
      } else {
        const { error: MarksError } = await supabase
          .from('marks')
          .insert([{ id: data.user.id, first_term: "", second_term: "", third_term: "" }]);

        if (MarksError) {
          await supabase.auth.signOut()
          return encodedRedirect(
            "error",
            "/sign-up",
            "Error Creating a Profile. Please try again",
          );
        } else {
          return encodedRedirect(
            "success",
            "/dashboard",
            "Success!",
          );
        }
      }
    }
  }
}

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", "Error Occured. Please Try Again");
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
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      encodedRedirect("success", "/", "");
    } else {
      return redirect("/");
    }
  } catch {
    encodedRedirect("success", "/", "");
  }
};

export const updateProfileAction = async (formData: FormData) => {
  const supabase = await createClient();

  const full_name_n = formData.get("display_name") as string;
  const address_n = formData.get("address") as string;
  const phone_no_n = formData.get("phone_no") as string;
  const whatsapp_no_n = formData.get("whatsapp_no") as string;
  const admin_year_n = formData.get("admin_year") as string;
  const admin_no_n = formData.get("admin_no") as string;
  const dob_n = formData.get("dob") as string;
  const c_class_n = formData.get("c_class") as string;

  // should implement this
  var dob_f = new Date(dob_n);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  } else {
    const { data: O_data, error: O_error, status: O_status } = await supabase
      .from("profiles")
      .select(`full_name, admin_year, admin_no, dob, c_class, address, phone_no, whatsapp_no`)
      .eq("id", user?.id)
      .single();

    if (O_error && O_status !== 406) {
      encodedRedirect(
        "error",
        "/dashboard/update-profile",
        "Profile Data update failed",
      );
    } else {
      const { error } = await supabase.from("profiles").update({
        full_name: full_name_n || O_data?.full_name,
        admin_year: admin_year_n || O_data?.admin_year,
        admin_no: admin_no_n || O_data?.admin_no,
        dob: dob_f || O_data?.dob,
        c_class: c_class_n || O_data?.c_class,
        address: address_n || O_data?.address,
        phone_no: phone_no_n || O_data?.phone_no,
        whatsapp_no: whatsapp_no_n || O_data?.whatsapp_no,
        verified: false,
        updated_at: new Date().toISOString(),
      }).eq("id", user?.id);

      if (error) {
        encodedRedirect(
          "error",
          "/dashboard/update-profile",
          "Profile Data update failed",
        );
      } else {
        encodedRedirect("success", "/dashboard/update-profile", "Profile updated");
      }
    }
  }
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
    return "error";
  }

  if (data?.verified == true) {
    return true;
  } else {
    return false;
  }
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

  if (error) {
    return encodedRedirect("error", "/dashboard/delete-request", "Deletion Request Failed");
  } else {
    return encodedRedirect("success", "/dashboard/delete-request", "Deletion Request Send");
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
    return encodedRedirect("success", "/dashboard", "Deletion Request Cancelled");
  }
}