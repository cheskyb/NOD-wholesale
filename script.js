import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://yxmkghtjausafrdjyijp.supabase.co',
  'YOUR_SUPABASE_ANON_KEY'
);

async function loginWithMagicLink(email) {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: 'https://nod-wholesale-pl2r-git-main-cheskybs-projects.vercel.app/page2.html',
    },
  });

  if (error) {
    alert('Login error: ' + error.message);
  } else {
    document.getElementById('message').style.display = 'block';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!email) {
      alert('Please enter your email.');
      return;
    }
    loginWithMagicLink(email);
  });
});
