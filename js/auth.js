// Buat client Supabase
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Login pakai username + password
async function login(username, password) {
  const email = usernameToEmail(username);
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

// Logout
async function logout() {
  await sb.auth.signOut();
  window.location.href = 'login.html';
}

// Ambil session aktif
async function getSession() {
  const { data } = await sb.auth.getSession();
  return data.session;
}

// Wajib login — kalau belum, tendang ke login.html
async function requireAuth() {
  const session = await getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }
  return session;
}

// Wajib admin — kalau bukan admin, tendang ke dashboard
async function requireAdmin() {
  const session = await requireAuth();
  if (!session) return null;
  const role = session.user.app_metadata?.role;
  if (role !== 'admin') {
    alert('Akses ditolak. Hanya admin yang boleh membuka halaman ini.');
    window.location.href = 'dashboard.html';
    return null;
  }
  return session;
}

// Ambil role user yang login
async function getRole() {
  const session = await getSession();
  return session?.user?.app_metadata?.role || null;
}
