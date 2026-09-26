// Ganti dengan kredensial project Supabase Anda
const supabaseUrl = "https://xbngldmybppbwpsoprcp.supabase.co";
const supabaseAnonKey = "sb_publishable_FNa0c5SJN078G9SDAeutVQ_4Ak6GQeu";

window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
