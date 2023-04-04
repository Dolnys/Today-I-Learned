import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oexaniqfpygdedzgetru.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9leGFuaXFmcHlnZGVkemdldHJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NDY3MDQsImV4cCI6MTk5NjAyMjcwNH0.dOjpXbBauDxixI4ktm9NWwERABbd9qE4wu0RVEbZ_cc ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
