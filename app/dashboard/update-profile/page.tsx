{/*
    async function updateProfile({
    full_name,
    admin_year,
    admin_no,
    address,
    phone_no,
    whatsapp_no,
  }: {
    full_name: string | null;
    admin_year: string | null;
    admin_no: string | null;
    address: string | null;
    phone_no: string | null;
    whatsapp_no: string | null;
  }) {
    try {
      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: full_name,
        admin_year: admin_year,
        admin_no: admin_no,
        address: address,
        phone_no: phone_no,
        whatsapp_no: whatsapp_no,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    }
  }
    */}