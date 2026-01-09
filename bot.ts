import { Bot, InlineKeyboard, Context } from "grammy";

const BOT_TOKEN = "7777025779:AAF4RUoraCGS49aw_9XrtO03rvfdFSPLymE";
const CHANNEL_ID = -1003260726551;
// Your direct Telegram Mini App link
const MINI_APP_URL = "https://t.me/interphaseart_bot/Interphase"; 

const bot = new Bot(BOT_TOKEN);

bot.command("start", async (ctx: Context) => {
  const keyboard = new InlineKeyboard()
    .url("Открыть Interphase", MINI_APP_URL);

  await ctx.reply("Добро пожаловать в Interphase Mini App!", {
    reply_markup: keyboard,
  });
});

// For the channel integration, you might want to post a message with a button
bot.command("post", async (ctx: Context) => {
  // Only allow admin or specific users to post to channel
  try {
    const keyboard = new InlineKeyboard()
      .url("Запустить приложение", MINI_APP_URL);

    await bot.api.sendMessage(CHANNEL_ID, "🚀 *Interphase: Новая Цифровая Реальность*\n\nИсследуйте наши услуги полного цикла прямо в Telegram.", {
      parse_mode: "Markdown",
      reply_markup: keyboard
    });
    await ctx.reply("Сообщение опубликовано в канале!");
  } catch (error) {
    console.error(error);
    await ctx.reply("Ошибка публикации. Убедитесь, что бот является администратором канала.");
  }
});

console.log("Bot is running...");
bot.start();
