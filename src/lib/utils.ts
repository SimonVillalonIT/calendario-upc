import { UserWithRole } from '@/types/globals';
import { createClient } from './supabase/client';
import { redirect } from 'next/navigation';

export async function getUserRole() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (!profile) {
    console.error('Profile not found for user:', user.id);
    redirect('/error'); 
  }

  return { ...user, role: profile.role, name: profile.name } as UserWithRole;
}

export async function logOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/');
}