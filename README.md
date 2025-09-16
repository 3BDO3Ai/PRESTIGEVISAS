# فزعة - متجر إلكتروني عربي

موقع تجارة إلكترونية حديث باللغة العربية مبني باستخدام Next.js و TypeScript و TailwindCSS.

## الميزات

- 🌐 دعم كامل للغة العربية مع تخطيط RTL
- ⚡ Next.js 15 مع App Router
- 🎨 TailwindCSS للتصميم
- 📱 تصميم متجاوب
- 🔤 خط Cairo من Google Fonts
- 📦 TypeScript للأمان البرمجي

## البدء

أولاً، قم بتشغيل خادم التطوير:

```bash
npm run dev
# أو
yarn dev
# أو
pnpm dev
```

افتح [http://localhost:3000](http://localhost:3000) في متصفحك لرؤية النتيجة.

## البنية

```
src/
├── app/
│   ├── layout.tsx      # تخطيط أساسي مع دعم RTL
│   ├── page.tsx        # الصفحة الرئيسية
│   └── globals.css     # الأنماط العامة
├── components/         # مكونات قابلة لإعادة الاستخدام
└── styles/            # ملفات الأنماط الإضافية

public/
└── assets/            # الصور والملفات الثابتة
```

## التقنيات المستخدمة

- [Next.js](https://nextjs.org/) - إطار عمل React
- [TypeScript](https://www.typescriptlang.org/) - لغة برمجة مكتوبة
- [TailwindCSS](https://tailwindcss.com/) - إطار عمل CSS
- [Google Fonts](https://fonts.google.com/) - خطوط الويب

## نشر على Vercel

للنشر السريع على Vercel:

1. سجل دخولك إلى https://vercel.com واجعل المشروع جديدًا من مستودعك (GitHub/GitLab/Bitbucket).
2. Vercel يتعرف تلقائيًا على تطبيق Next.js. إعدادات البناء الافتراضية تعمل: Build Command = `npm run build`, Output Directory = (auto).
3. تأكد من استخدام Node 18 على لوحة إعدادات المشروع أو في `package.json` (تم تعيين `engines.node` إلى `18.x`).
4. أضف أي متغيرات بيئة عبر لوحة Vercel (Settings → Environment Variables). إذا كنت تستخدم مفاتيح، أضف ملف مثال `.env.example` (اختياري).

بعد الربط، اضغط Deploy وسيقوم Vercel ببناء ونشر موقعك تلقائيًا.