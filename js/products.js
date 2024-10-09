
var gNotebooks = [
    {
        catalogId: 82,
        title: "ספירלה 2 נושא שורות - 1יח",
        price: 9.9,
        image: "./imgs/notebooks/iq2sub.jpg",
        tags: ["rows", "2sub", "a4", "spiral"]
    },
    {
        catalogId: 1,
        title: "ספירלה 1 נושא שורות - 1יח",
        price: 4.9,
        image: "./imgs/notebooks/iq1sub.jpg",
        tags: ["rows", "1sub", "a4", "spiral"]
    },
    {
        catalogId: 2,
        title: "ספירלה 1 נושא משבצות",
        price: 4.9,
        image: "./imgs/notebooks/basik_math.jpg",
        tags: ["squares", "a4", "spiral"]
    },
    {
        catalogId: 3,
        title: "ספירלה 2 נושא משבצות - 1יח",
        price: 9.9,
        image: "/imgs/notebooks/iq2sub.jpg",
        tags: ["squares", "a4", "spiral"]
    },
    {
        catalogId: 4,
        title: "מארז 5 מחברת שורות - רגילה",
        price: 6.5,
        image: "/imgs/craft/19.jpg",
        tags: ["rows", "a5"]
    },
    {
        catalogId: 5,
        title: "מארז 5 מחברת שורות - 10 שורות",
        price: 7.5,
        image: "/imgs/craft/19.jpg",
        tags: ["rows", "a5", "10rows"]
    },
    {
        catalogId: 6,
        title: "מארז 5 מחברת שורות - 14 שורות",
        price: 7.5,
        image: "./imgs/craft/19.jpg",
        tags: ["rows", "a5", "10rows"]
    },
    {
        catalogId: 7,
        title: "מארז 5 מחברת משבצות",
        price: 7.5,
        image: "./imgs/craft/19.jpg",
        tags: ["squares", "a5"]
    },
    {
        catalogId: 8,
        title: "מחברת אנגלית A5 בודדת",
        price: 1.9,
        image: "./imgs/notebooks/english.jpg",
        tags: ["english", "a5", "rows"]
    },
    {
        catalogId: 9,
        title: "10 עטיפות למחברת A5",
        price: 5.0,
        image: "/imgs/notebooks/wrap.jpg",
        tags: ["english", "a5", "rows"]
    },
    {
        catalogId: 10,
        title: "מחברת חכמה - מספר 1",
        price: 3.5,
        image: "/imgs/notebooks/smart1.jpg",
        tags: ["a5", "rows"]
    },
    {
        catalogId: 11,
        title: "מחברת חכמה - מספר 3",
        price: 3.0,
        image: "/imgs/notebooks/smart3.jpg",
        tags: ["a5", "rows"]
    },
    {
        catalogId: 12,
        title: "מארז 8 דפדפת שורות",
        price: 17.9,
        image: "/imgs/craft/37.jpg",
        tags: ["rows", "a4"]
    },
    {
        catalogId: 13,
        title: "מארז 8 דפדפת משבצות",
        price: 16.9,
        image: "/imgs/notebooks/block-squares.jpg",
        tags: ["squares", "a4"]
    },
    {
        catalogId: 14,
        title: "מחברת 80 עמוד עם גומי",
        price: 9.9,
        image: "/imgs/notebooks/black80.jpg",
        tags: ["a5", "rows"]
    },
    {
        catalogId: 15,
        title: "פנקס קטן",
        price: 4.0,
        image: "/imgs/notebooks/small.jpg",
        tags: ["rows"]
    },
    {
        catalogId: 20,
        title: "ספירלה 3 נושאים - שורות - אחרון",
        price: 15.9,
        image: "/imgs/notebooks/campus3sub.jpg",
        tags: ["rows", "3sub", "a4", "spiral"]
    },
]

var gCraft = [
    {
        catalogId: 86,
        title: "מארז תיכוניסטים/יות",
        price: 54.90,
        description: "3 עטי פילוט 0.4  ||  8 דפדפות שורות  ||  מארז 4 מרקרים של סטבילו",
        image: "./imgs/craft/highschool.jpg",
    },
    {
        catalogId: 39,
        title: "מארז 10 מחקים של סטדלר",
        price: 8.0,
        image: "./imgs/craft/02.jpg",
    },
    {
        catalogId: 40,
        title: "מחדד מיכל סטדלר",
        price: 7.9,
        old_price: 10.7,
        image: "./imgs/craft/22.jpg",
    },
    {
        catalogId: 41,
        title: "פילוט 0.4 - מארז של 10",
        price: 71.0,
        old_price: 95.0,
        image: "/imgs/craft/pilot10.jpg",
    },
    {
        catalogId: 42,
        title: "קוברה 0.7 - מארז של 8",
        price: 9.9,
        old_price: 12.5,
        image: "/imgs/craft/cobra8.jpg",
    },
    {
        catalogId: 43,
        title: "עט פילוט 0.4 כחול 🔵",
        price: 7.9,
        image: "/imgs/craft/31.jpg",
    },
    {
        catalogId: 44,
        title: "עט פילוט 0.4 שחור ⚫",
        price: 7.9,
        image: "/imgs/craft/30.jpg",
    },
    {
        catalogId: 45,
        title: "עט פילוט 0.4 אדום 🔴",
        price: 7.9,
        image: "/imgs/craft/32.jpg",
    },
    {
        catalogId: 46,
        title: "עט פילוט 0.4 ירוק 🟢",
        price: 7.9,
        image: "/imgs/craft/33.jpg",
    },
    {
        catalogId: 47,
        title: "פילוט v5 כחול 🔵",
        price: 6.0,
        image: "/imgs/craft/34.jpg",
    },
    {
        catalogId: 48,
        title: "מספריים קטנים - ירוק / כחול",
        price: 3.0,
        image: "/imgs/craft/23.jpg",
    },
    {
        catalogId: 49,
        title: "מספריים קטנים - ורוד",
        price: 3.0,
        image: "/imgs/craft/scissorspink.jpg",
    },
    {
        catalogId: 50,
        title: "מספריים גדולים",
        price: 6.9,
        image: "/imgs/craft/scissors.jpg",
    },
    {
        catalogId: 51,
        title: "מארז מרקרים ספארקליינר",
        price: 5.5,
        image: "/imgs/craft/14.jpg",
    },
    {
        catalogId: 52,
        title: "מארז מרקרים סטאבילו",
        price: 12.5,
        image: "/imgs/craft/24.jpg",
    },
    {
        catalogId: 53,
        title: "מארז חודים 0.5",
        price: 5.9,
        image: "/imgs/craft/27.jpg",
    },
    {
        catalogId: 54,
        title: "עפרון מכאני 0.5",
        price: 3.9,
        old_price: 7,
        image: "/imgs/craft/29.jpg",
    },
    {
        catalogId: 55,
        title: "מארז עפרונות סטדלר (12יח)",
        price: 9.5,
        image: "/imgs/craft/12.jpg",
    },
    {
        catalogId: 56,
        title: "קלסר רגיל (נותרו 2)",
        price: 8.5,
        image: "/imgs/craft/classer.jpg",
    },
    {
        catalogId: 57,
        title: "תיקייה עם גומי - 1יח",
        price: 5.9,
        image: "/imgs/craft/folder.jpg",
    },
    {
        catalogId: 58,
        title: "12 חוצצים",
        price: 4.5,
        image: "/imgs/craft/dividers.jpg",
    },
    {
        catalogId: 59,
        title: "50 שמרדפים 45מיקרון",
        price: 7.9,
        image: "/imgs/craft/plastic45.jpg",
    },
    {
        catalogId: 60,
        title: "שדכן",
        price: 4.0,
        image: "/imgs/craft/stapler.jpg",
    },
    {
        catalogId: 61,
        title: "סיכות לשדכן",
        price: 1.0,
        image: "/imgs/craft/staples10.jpg",
    },
    {
        catalogId: 62,
        title: "סלוטייפ",
        price: 1.2,
        image: "/imgs/craft/tape.jpg",
    },
    {
        catalogId: 64,
        title: "נעצים ללוח",
        price: 2.8,
        image: "/imgs/craft/pushpins.jpg",
    },
    {
        catalogId: 65,
        title: "סרגל - 15סמ מתכת",
        price: 1.0,
        image: "/imgs/craft/28.jpg",
    },
    {
        catalogId: 66,
        title: "סרגל - 15סמ פלסטיק",
        price: 1.0,
        image: "/imgs/craft/plastic_ruller.jpg",
    },
    {
        catalogId: 67,
        title: "לוח מחיק דו-צדדי A4",
        price: 4.9,
        image: "/imgs/craft/board.jpg",
    },
    {
        catalogId: 68,
        title: "טושים מחיקים - 4 צבעים",
        price: 4.9,
        old_price: 7.0,
        image: "/imgs/craft/boardpen4.jpg",
    },
    {
        catalogId: 69,
        title: "טושים מחיקים - 8 צבעים",
        price: 7.9,
        old_price: 12.3,
        image: "/imgs/craft/boardpen8.jpg",
    },
    {
        catalogId: 70,
        title: "מחק ללוח",
        price: 3.0,
        image: "/imgs/craft/er.jpg",
    },
    {
        catalogId: 71,
        title: "דבק סטיק קטן",
        price: 2.0,
        image: "/imgs/craft/16.jpg",
    },
    {
        catalogId: 72,
        title: "דבק סטיק גדול",
        price: 3.5,
        image: "/imgs/craft/15.jpg",
    },
    {
        catalogId: 73,
        title: "עטיפות לחוברות A4",
        price: 4.5,
        image: "/imgs/craft/plastic.jpg",
    },
    {
        catalogId: 74,
        title: "מדבקות שם - 40 מדבקות",
        price: 3.0,
        image: "/imgs/craft/label.jpg",
    },
    {
        catalogId: 75,
        title: "טיפקס",
        price: 3.3,
        image: "/imgs/craft/tipex.jpg",
    },
    {
        catalogId: 83,
        title: "טוש מחיק expo שחור",
        price: 6.9,
        image: "/imgs/craft/expo-black.jpg",
    },
    {
        catalogId: 84,
        title: "טוש מחיק expo כחול",
        price: 6.9,
        image: "/imgs/craft/expo-blue.jpg",
    },
    {
        catalogId: 76,
        title: "מחשבון fx-82MS (אחרון במלאי)",
        price: 40.0,
        old_price: 49.0,
        image: "/imgs/craft/38.jpg",
    },
    {
        catalogId: 77,
        title: "מחשבון fx-991ES PLUS (אחרון במלאי)",
        price: 80.0,
        image: "/imgs/craft/39.jpg",
    },
    {
        catalogId: 78,
        title: "ראש דיו HP-652 מקורי - שחור",
        price: 75.0,
        image: "/imgs/craft/40.jpg",
    },
    {
        catalogId: 79,
        title: "ראש דיו HP-652 מקורי - צבעוני",
        price: 69.0,
        image: "/imgs/craft/41.jpg",
    },
    {
        catalogId: 81,
        title: "מארז 4 סוללות AA",
        price: 9.90,
        image: "/imgs/elec/02.webp",
    },
]
