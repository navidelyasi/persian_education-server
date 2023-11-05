const exercises = [
  {
    id: 1,
    level: "1",
    unit: "1",
    number: 1,
    title: "کارت های آموزشی لغات درس اول",
    type: "cards-study",
  },
  {
    id: 2,
    level: "1",
    unit: "1",
    number: 2,
    title: "پاسخ دادن به کارت های آموزشی لغات",
    type: "cards-answer",
  },
  {
    id: 3,
    level: "1",
    unit: "1",
    number: 3,
    title: "سوال های آغاز کننده درس اول",
    type: "multi-choice",
  },
  {
    id: 4,
    level: "1",
    unit: "1",
    number: 4,
    title: "جملات را تکمیل کنید",
    type: "drag-drop-text",
  },
  {
    id: 5,
    level: "1",
    unit: "1",
    number: 5,
    title: "در مورد تاریخ شهر ها",
    type: "filling-text",
  },
  {
    id: 6,
    level: "1",
    unit: "1",
    number: 6,
    title: "گوش گنید و تکرار گنید",
    type: "listening",
  },
  {
    id: 7,
    level: "3",
    unit: "1",
    number: 1,
    title: "گوش گنید و تکرار گنید",
    type: "listening",
  },
];

const questions = [
  { exid: 1, title: "bag", body: "کیف" },
  { exid: 1, title: "book", body: "کتاب" },
  { exid: 1, title: "chair", body: "صندلی" },
  { exid: 1, title: "desk", body: "میز" },
  { exid: 1, title: "door", body: "در" },
  { exid: 1, title: "eraser", body: "پاک کن" },
  { exid: 1, title: "fire", body: "آتش" },
  { exid: 1, title: "marker", body: "ماژیک" },
  { exid: 1, title: "notebook", body: "دفتر" },
  { exid: 1, title: "paper", body: "کاغذ" },
  { exid: 1, title: "pencil", body: "مداد" },
  { exid: 2, title: "bag", body: "کیف" },
  { exid: 2, title: "book", body: "کتاب" },
  { exid: 2, title: "chair", body: "صندلی" },
  { exid: 2, title: "desk", body: "میز" },
  { exid: 2, title: "door", body: "در" },
  { exid: 2, title: "eraser", body: "پاک کن" },
  { exid: 2, title: "fire", body: "آتش" },
  { exid: 2, title: "marker", body: "ماژیک" },
  { exid: 2, title: "notebook", body: "دفتر" },
  { exid: 2, title: "paper", body: "کاغذ" },
  { exid: 2, title: "pencil", body: "مداد" },
  { exid: 3, title: "در حال خواندن .... هستم.", body: "کتاب@کیف@@0" },
  { exid: 3, title: "روشن کردن . . .", body: "آتش@میز@@0" },
  { exid: 3, title: "نوشتن تکالیف در", body: "مداد@دفتر@@1" },
  { exid: 4, title: "دیشب به خانه ما", body: "آمدی" },
  { exid: 4, title: "در حال حاضر در خانه ما", body: "هستی" },
  { exid: 4, title: "فردا به خانه ما خواهی", body: "آمد" },
  { exid: 4, title: "در دنیای", body: "این روزهای ما" },
  { exid: 4, title: "برای ماندن در این کلاس", body: "باید تلاش کنید" },
  {
    exid: 4,
    title: "جمعی از دانش آموزان کلاس",
    body: "برای بازی به حیاط رفتند",
  },
  {
    exid: 5,
    title: "بخش اول شهر ها",
    body: "شهرهای @کابل@ و دوشنبه \nدر @خارج@ از این کشور واقع شده‌اند\nدر چند @دهه@ کنونی نیز\n فارسی‌زبان بسیاری به @کشورهای@ مختلفی\n در سراسر @جهان@ مهاجرت کرده\n و زبان فارسی @را@ در این کشورها\n گسترانده‌اند",
  },
  {
    exid: 5,
    title: "بخش دوم شهر ها و پراکندگی",
    body: "بر پایهٔ نتایج سرشماری سال ۱۳۷۵ \nمرکز @آمار@ ایران دربارهٔ ترکیب\n و چیدمان @قومی@ و تباری مردم ایران،\n جمعیت و @آمار@ فارسی‌زبان‌ها\n نزدیک ۷۳ @تا@ ۷۵ درصد\n جمعیت ایران است",
  },
  {
    exid: 6,
    title: "رنگین کمان",
    body: "قرمز نارنجی زرد و سبز\nآبی نیلی و بنفش\n\nرنگین کمون چند رنگه\nهفت رنکه\nهفت رنکه\nقرمز نارنجی زرد و سبز\nآبی نیلی و بنفش\nقرمز نارنجی زرد و سبز\nآبی نیلی و بنفش@@song@@Rainbow",
  },
  {
    exid: 6,
    title: "اعضای بدن",
    body: "سر ،‌شونه ، زانو پا\nزانو پا\nچشم و گوشو دهن و دماغ\nدست دماغ و دهن\nموها و ابروها \nذهن و دندونا@@song@@Shoulders",
  },
  {
    exid: 7,
    title: "موزیک حبیبی از سوگند",
    body: "حبیبی کام تو ایران اینجا همه اورجینالان\nبرنامه اینجا بیست چهاری براست\nپارتی کنای اصلیش همینان\nحبیبی کام تو @ایران@ جا که هست بگو دوستاتم بیان@@song@@Habibi",
  },
];

module.exports = { exercises, questions };

/*   
************************************************************
******                     used trick               ********
************************************************************
    1type: "cards-study",
        name1 -> title
        name2 -> body

    2type: "cards-answer",
        name1 -> title
        name2 -> body

    3type: "multi-choice",
        title
        body = choices + correct
        
        1- fist i have to split body by @@ 
        index 0 is choices
        index 1 is correct
        2- then i have to split index 0 by @ 

    4type: "drag-drop-text",
        name1 -> title
        name2 -> body

    5type: "filling-text",
        title
        body

    6type: "listening",
        title
        body + song

        i have to split body by @@song@@
        index 0 is body
        index 1 is song

    6type: "music",
        title
        body + song

        i have to split body by @@song@@
        index 0 is body
        index 1 is song

*/
