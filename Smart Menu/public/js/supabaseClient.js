import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://ciaxpriqwfwhdmmxassx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpYXhwcmlxd2Z3aGRtbXhhc3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMjU5MTcsImV4cCI6MjA4NzYwMTkxN30.sANcLOEVjgdzIFFqCoxXs8WS_emOzW2XeYwVmdzIolM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  // تحسين أداء الـ WebSockets ليتناسب مع سرعة الكاشير والمطبخ
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});