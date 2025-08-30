import { createClient } from './supabase/server';
import { redirect } from 'next/navigation';

export async function getUserRole() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    // Redirige al login si no hay un usuario autenticado
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (!profile) {
    // Si no se encuentra el perfil, redirige a una página de error o de creación de perfil
    console.error('Profile not found for user:', user.id);
    redirect('/error'); 
  }

  return { user, role: profile.role };
}