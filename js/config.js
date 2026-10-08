// Konfigurasi Supabase
const SUPABASE_URL = 'https://aoeppxvyhvstqxtyzqs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZXBweHZ5aHZzc3RxeHR5enFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzOTY3ODAsImV4cCI6MjEwNjk3Mjc4MH0.LH26nIBE0AmWpX7OPvzdCdM69olpp0xz2F4nje24vHw';

// Ubah username jadi email (Supabase butuh email di belakang layar)
function usernameToEmail(username) {
  const u = String(username || '').trim().toLowerCase();
  if (u.includes('@')) return u;
  return u + '@yayasan.local';
}
