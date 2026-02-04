export default function handler(req, res) {
  // استلام الاسم من الرابط
  const { name } = req.query;
  // إذا لم يكتب اسماً، نستخدم "رمضان كريم"
  const guestName = name ? name : "رمضان كريم";

  // إعدادات حسابك (أخذتها من صورك)
  const YOUR_CLOUD_NAME = "dk7n4atdm"; 
  const YOUR_IMAGE_NAME = "mycard"; 
  const BLOGGER_URL = "https://ramadhangift.blogspot.com/";

  // تحويل الاسم ليعمل في الروابط
  const encodedName = encodeURIComponent(guestName);

  // رابط الصورة الديناميكي
  const dynamicImage = `https://res.cloudinary.com/${YOUR_CLOUD_NAME}/image/upload/w_1200,h_630,c_fit/l_text:Arial_60_bold:${encodedName},g_center,co_white/${YOUR_IMAGE_NAME}.jpg`;

  const html = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="utf-8">
        <title>تهنئة من ${guestName}</title>
        <meta property="og:title" content="بطاقة تهنئة خاصة من ${guestName} 🌙">
        <meta property="og:description" content="اضغط هنا لكتابة اسمك وتصميم بطاقتك الرمضانية">
        <meta property="og:image" content="${dynamicImage}">
        <meta property="og:type" content="website">
        
        <!-- توجيه الزائر للمدونة -->
        <script>
            window.location.href = "${BLOGGER_URL}";
        </script>
      </head>
      <body>
        <h1 style="text-align:center; margin-top:50px;">جاري تحويلك...</h1>
      </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
