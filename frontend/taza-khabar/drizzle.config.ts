import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './utlis/db/schema/news.js',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL || 
      `postgresql://postgres:${process.env.SUPABASE_DB_PASSWORD}@db.${process.env.NEXT_PUBLIC_SUPABASE_URL?.replace('https://', '').replace('.supabase.co', '')}.supabase.co:5432/postgres`,
  },
});
