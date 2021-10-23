const ENV = process.env.NODE_ENV === "development" ? "dev" : "prod";

const config = {
  ENV: ENV,
  WEB_DOMAIN: ENV === "dev" ? "http://localhost:3000" : "https://kayoun.com",
  FACEBOOK_URL: "https://www.facebook.com/Ka-Youn-Yoo-Composer-103491528169024",
  INSTAGRAM_URL: "https://www.instagram.com/kayoun_yukaris",
  YOUTUBE_URL: "https://www.youtube.com/channel/UCj3OZleY0PqZUU6hoPcv9bA",
  SOUNDCLOUD_URL: "https://soundcloud.com/ka-youn-yoo",
  CONTACT_FORM_URL: "https://formspree.io/f/xayazdjd",
  EMAIL: "kbshana3338@gmail.com",
};

export default config;