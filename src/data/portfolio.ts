import { BookOpen, Cpu } from "lucide-react";
import { Experience, Project, SkillCategory, Certification, Language } from "@/types";

// --- EXPERIENCES ---
export const getExperiences = (lang: Language): Experience[] => {
  if (lang === 'ja') {
    return [
      {
        company: "Laconic (タイ企業)",
        role: "中級フロントエンド開発者",
        period: "2024 - 現在",
        description: "Next.js、TypeScript、ReactNativeを使用してコア製品を再構築。ページの読み込み時間を40%短縮しました。",
      },
      {
        company: "Cyber Missions Myanmar (日系企業)",
        role: "プログラマー (インターン)",
        period: "2024 - 2024",
        description: "FlutterとDockerを使用してチャットアプリを開発しました。",
      },
      {
        company: "Digit House (ミャンマー企業)",
        role: "ジュニア開発者",
        period: "2022 - 2022",
        description: "HTML、CSS、JSを使用したWebアプリ開発に協力。多数のWebテンプレートを作成しました。",
      },
    ];
  }

  if (lang === 'my') {
    return [
      {
        company: "Laconic (ထိုင်းကုမ္ပဏီ)",
        role: "Mid Level Frontend Developer",
        period: "2024 - လက်ရှိ",
        description: "Next.js, TypeScript နှင့် ReactNative တို့ကိုအသုံးပြု၍ ကုမ္ပဏီ၏အဓိကထုတ်ကုန်များကို ပြန်လည်တည်ဆောက်ခဲ့သည်။ ဝဘ်ဆိုက်အမြန်နှုန်းကို ၄၀% တိုးတက်စေခဲ့သည်။",
      },
      {
        company: "Cyber Missions Myanmar (ဂျပန်ကုမ္ပဏီ)",
        role: "Programmer (Intern)",
        period: "2024 - 2024",
        description: "Flutter နှင့် Docker ကိုအသုံးပြု၍ Chatting Application တစ်ခုကို တီထွင်ဖန်တီးခဲ့သည်။",
      },
      {
        company: "Digit House (မြန်မာကုမ္ပဏီ)",
        role: "Junior Developer",
        period: "2022 - 2022",
        description: "HTML, CSS နှင့် JS တို့ကိုအသုံးပြု၍ ဝဘ်ဆိုက်ရေးဆွဲခြင်းများတွင် ပူးပေါင်းလုပ်ဆောင်ခဲ့သည်။",
      },
    ];
  }

  return [
    {
      company: "Laconic (Thai Company)",
      role: "Mid Level Frontend Developer",
      period: "2024 - Present",
      description: "Rebuilding the core products using Next.js, TypeScript and ReactNative. Improved load times by 40%.",
    },
    {
      company: "Cyber Missions Myanmar (Japan Company)",
      role: "Programmer (Intern)",
      period: "2024 - 2024",
      description: "Developed chatting app by using Flutter and Docker.",
    },
    {
      company: "Digit House (Myanmar Company)",
      role: "Junior Developer",
      period: "2022 - 2022",
      description: "Collaborated on web app development using HTML, CSS and JS. Created too many web templates.",
    },
  ];
};

// --- PROJECTS ---
export const getProjects = (lang: Language): Project[] => {
  const isJa = lang === 'ja';
  const isMy = lang === 'my';

  return [
    {
      title: "Payni",
      description: isJa 
        ? "PayNiは、法定通貨（THB、USDなど）と暗号資産の両方を24時間365日安全に保管、管理、取引できる金融プラットフォームです。デジタルウォレットとして機能し、資産の売買を促進します。さらに、決済ゲートウェイAPIを提供し、企業が自社サイトに決済機能を統合できるようにします。"
        : isMy 
        ? "PayNi သည် Fiat (THB, USD) နှင့် Crypto ငွေကြေးများကို ၂၄ နာရီပတ်လုံး လုံခြုံစွာ သိမ်းဆည်း၊ စီမံခန့်ခွဲနိုင်သော ဘဏ္ဍာရေး ပလက်ဖောင်းတစ်ခုဖြစ်သည်။ လုပ်ငန်းများအတွက် Payment Gateway API ကိုလည်း ထောက်ပံ့ပေးထားသည်။"
        : "PayNi provides a financial platform allowing users to securely store, manage, and transact both Fiat (like THB, USD) and Crypto funds globally, 24/7. It functions as a digital wallet and facilitates buying/selling of assets. Additionally, PayNi offers a payment gateway API.",
      tags: ["Next.js", "Websocket"],
      role: isJa ? "中級フロントエンド開発者" : "Mid Level Frontend Developer",
      year: "2024",
      link: "https://payni.io/",
    },
    {
      title: "Jobonic",
      description: isJa
        ? "Jobonicは、熟練したフリーランサー（サービス提供者）とサービスを求める個人や企業（サービス依頼者）をつなぐダイナミックなプラットフォームです。才能と機会のギャップを埋め、幅広いフリーランスサービスのための使いやすいマーケットプレイスを提供し、効率的なコラボレーションを促進します。"
        : isMy
        ? "Jobonic သည် ကျွမ်းကျင်သော Freelancer များနှင့် ဝန်ဆောင်မှုလိုအပ်သော လုပ်ငန်းများကို ချိတ်ဆက်ပေးသော ပလက်ဖောင်းဖြစ်သည်။ ၎င်းသည် အလုပ်အကိုင်အခွင့်အလမ်းများကို ပိုမိုလွယ်ကူစေရန် ရည်ရွယ်သည်။"
        : "Jobonic is a dynamic platform designed to connect skilled freelancers (Service Offers) with individuals and businesses seeking services (Service Requests). It aims to bridge the gap between talent and opportunity, providing a user-friendly marketplace.",
      tags: ["Next.js", "Typescript", "Supabase"],
      role: isJa ? "中級フロントエンド開発者" : "Mid Level Frontend Developer",
      year: "2025",
      link: "https://jobonic.io/",
    },
    {
      title: "Laconic Website",
      description: isJa
        ? "Laconic - エンタープライズERP、ERPaaSソリューションは15年以上にわたって導入されており、タイの製造業に従事する大規模な中小企業の地域運営を成功裏にサポートし、幅広い専門産業クラスターをカバーしています。"
        : isMy
        ? "Laconic သည် ထိုင်းနိုင်ငံရှိ ကုန်ထုတ်လုပ်ငန်းများအတွက် ERP နှင့် ERPaaS ဖြေရှင်းချက်များကို ၁၅ နှစ်ကျော်ကြာ ဝန်ဆောင်မှုပေးလျက်ရှိသော ကုမ္ပဏီဝဘ်ဆိုက်ဖြစ်သည်။"
        : "Laconic - Enterprise ERP, ERPaaS solution has been implemented for more than 15 years, successfully supporting the regional operations of large-scale small and medium-sized enterprises engaged in manufacturing in Thailand.",
      tags: ["Next.js", "Typescript", "Payload CMS"],
      role: isJa ? "中級フロントエンド開発者" : "Mid Level Frontend Developer",
      year: "2025",
      link: "https://laconic.co.th/",
    },
    {
      title: "Food Recipe Website",
      description: isJa
        ? "この直感的な料理レシピアプリは、ユーザーが新しい料理を発見するためのシームレスな方法を提供します。牛肉、シーフード、ベジタリアンなどのカテゴリで検索できます。各レシピには詳細な材料リスト、明確な調理手順、埋め込みYouTube動画が含まれています。"
        : isMy
        ? "အသုံးပြုရလွယ်ကူသော ဟင်းချက်နည်း အက်ပ်တစ်ခုဖြစ်သည်။ အမဲသား၊ ပင်လယ်စာ သို့မဟုတ် သက်သတ်လွတ် စသည့် အမျိုးအစားအလိုက် ရှာဖွေနိုင်ပြီး YouTube ဗီဒီယိုများနှင့်တကွ အသေးစိတ် ချက်ပြုတ်နည်းများကို ကြည့်ရှုနိုင်သည်။"
        : "This intuitive food recipe application provides users with a seamless way to discover new dishes. Users can search for specific meals or browse by categories. Each recipe entry is comprehensive, offering detailed ingredient lists and embedded YouTube videos.",
      tags: ["React.js"],
      role: isJa ? "ソロ開発者" : "Solo Developer",
      year: "2024",
      link: "https://food-recipe-app-omega.vercel.app/",
    },
  ];
};

// --- SKILLS ---
export const getSkills = (lang: Language): SkillCategory[] => {
  const cat1 = lang === 'ja' ? "フロントエンド" : "Frontend";
  const cat2 = lang === 'ja' ? "バックエンド" : "Backend";
  const cat3 = lang === 'ja' ? "モバイル" : "Mobile";

  return [
    {
      category: cat1,
      items: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      category: cat2,
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
        { name: "WebSocket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
      ],
    },
    {
      category: cat3,
      items: [
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
      ],
    },
  ];
};

// --- CERTIFICATIONS ---
export const getCertifications = (lang: Language): Certification[] => {
  if (lang === 'ja') {
    return [
      {
        name: "JLPT N4",
        fullName: "日本語能力試験 N4",
        issuer: "国際交流基金",
        icon: BookOpen,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "group-hover:border-red-500",
      },
      {
        name: "ITPEC FE",
        fullName: "基本情報技術者試験 (FE)",
        issuer: "ITPEC (情報処理技術者試験)",
        icon: Cpu,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500",
      },
    ];
  }

  return [
    {
      name: "JLPT N4",
      fullName: "Japanese Language Proficiency Test",
      issuer: "The Japan Foundation",
      icon: BookOpen,
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "group-hover:border-red-500",
    },
    {
      name: "ITPEC FE",
      fullName: "Fundamental Information Technology Engineer",
      issuer: "ITPEC (Information Technology Professionals Examination Council)",
      icon: Cpu,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500",
    },
  ];
};