import { Bot, InlineKeyboard } from "grammy";

const BOT_TOKEN = "7777025779:AAF4RUoraCGS49aw_9XrtO03rvfdFSPLymE";
const CHANNEL_ID = -1003260726551;
// Replace this with your actual deployed URL when ready
const MINI_APP_URL = "https://your-deployed-miniapp-url.com"; 

const bot = new Bot(BOT_TOKEN);

bot.command("start", async (ctx) => {
  const keyboard = new InlineKeyboard()
    .webApp("Open Interphase", MINI_APP_URL);

  await ctx.reply("Welcome to Interphase Mini App!", {
    reply_markup: keyboard,
  });
});

// For the channel integration, you might want to post a message with a button
bot.command("post", async (ctx) => {
  // Only allow admin or specific users to post to channel
  try {
    const keyboard = new InlineKeyboard()
      .webApp("Launch App", MINI_APP_URL);

    await bot.api.sendMessage(CHANNEL_ID, "🚀 *Interphase: New Digital Reality*\n\nExplore our full-cycle services directly in Telegram.", {
      parse_mode: "Markdown",
      reply_markup: keyboard
    });
    await ctx.reply("Message posted to channel!");
  } catch (error) {
    console.error(error);
    await ctx.reply("Failed to post message. Make sure the bot is an admin in the channel.");
  }
});

console.log("Bot is running...");
bot.start();
