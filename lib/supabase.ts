import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://lfqbngjljplmyfdanobq.supabase.co/rest/v1/";

const supabaseKey =
  "sb_publishable_GgYrH5mOgmboQQrU4I9LcA_30jFYmnU";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);