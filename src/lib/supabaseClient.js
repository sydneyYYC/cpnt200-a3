import { createClient } from '@supabase/supabase-js';
import {SUPABASE_SECRET_URL, SUPABASE_ANON_KEY} from '$env/static/private';

export const supabase = createClient(SUPABASE_SECRET_URL, SUPABASE_ANON_KEY)