import { pgTable, uuid, integer, text, timestamp } from "drizzle-orm/pg-core";
export const news = pgTable("news", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  sources: text("sources").array(),
});
