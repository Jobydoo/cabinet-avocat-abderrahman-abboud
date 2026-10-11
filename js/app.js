/**
 * مكتب الأستاذ عبد الرحمان عبود - محامٍ بهيئة الرباط
 * منطق التطبيق التفاعلي والمساعد القانوني الذكي
 */

// Moroccan Legal Knowledge Base for Me. Abboud's AI Assistant
const LEGAL_KNOWLEDGE = {
  family: {
    title: "قانون الأسرة والأحوال الشخصية (مدونة الأسرة)",
    keywords: ["طلاق", "شقاق", "نفقة", "حضانة", "زواج", "إرث", "تركة", "رجوع", "تطليق"],
    summary: "تخضع قضايا الأسرة لمقتضيات مدونة الأسرة المغربية، وتختص بها أقسام قضاء الأسرة بالمحاكم الابتدائية.",
    requirements: [
      "عقد الزواج الأصلي أو نسخة رسمية منه",
      "عقود ولادة الأطفال (إن وجدوا) ورسم الحالة المدنية",
      "وثائق إثبات الدخل (شهادة الأجر، كشوفات بنكية) لتحديد مستحقات النفقة والسكن",
      "أي وثائق أو إثباتات تدعم ادعاءات الشقاق أو الضرر"
    ],
    timeline: "تستغرق مسطرة طلاق الشقاق في المتوسط ما بين شهرين إلى 6 أشهر كحد أقصى وفق القانون، وتتضمن جلسة صلح إجبارية.",
    nextStep: "حجز موعد استشارة مع الأستاذ عبد الرحمان عبود لإعداد مقال الدعوى وتحديد المستحقات القانونية بدقة."
  },
  work: {
    title: "قانون الشغل والنزاعات الاجتماعية (مدونة الشغل)",
    keywords: ["فصل", "طرد", "تعسفي", "شغل", "عمل", "أجر", "مفتشية", "استقالة", "تعويض"],
    summary: "يحمي القانون رقم 65.99 (مدونة الشغل) الأجراء في حالة الفصل التعسفي ويخولهم الحصول على تعويضات متعددة.",
    requirements: [
      "عقد العمل إن وجد أو ما يثبت علاقة العمل (شهادات الأجر، بطاقة العمل)",
      "كشوفات الحساب البنكي أو إيصالات تحويل الراتب",
      "رسالة الإشعار بالفصل أو محضر عدم الرغبة في التشغيل",
      "محضر عدم الصلح من مفتشية الشغل (إذا تم اللجوء إليها)"
    ],
    timeline: "تشمل مستحقات الفصل التعسفي: التعويض عن الفصل، التعويض عن مهلة الإخطار، والتعويض عن الضرر (1.5 شهر عن كل سنة في حدود 36 شهراً). ترفع الدعوى داخل أجل 90 يوماً من تاريخ الفصل.",
    nextStep: "الاتصال العاجل بمكتب الأستاذ عبود قبل انقضاء أجل التقادم (90 يوماً) لرفع دعوى التعويض أمام المحكمة الاجتماعية."
  },
  accident: {
    title: "حوادث السير والتعويضات (ظهير 1984)",
    keywords: ["حادثة", "سير", "تأمين", "تعويض", "عجز", "كسر", "جروح", "سيارة", "دراجة"],
    summary: "يحدد ظهير 2 أكتوبر 1984 نظام التعويض الإجباري عن الأضرار البدنية الناتجة عن حوادث السير بموجب جداول ورؤوس أموال محددة.",
    requirements: [
      "محضر الشرطة أو الدرك الملكي (PV) الخاص بحادثة السير",
      "الشهادات الطبية الأولية والمحددة لمدة العجز المؤقت (ITT)",
      "تقرير الخبرة الطبية المحددة لنسبة العجز الدائم (IPP)",
      "شهادة الدخل السنوي أو الأجر للمصاب وقت الحادثة"
    ],
    timeline: "تتم متابعة الملف ودياً مع شركة التأمين أولاً، وفي حالة عدم كفاية العرض أو رفضه، ترفع دعوى التعويض أمام المحكمة الابتدائية بالرباط.",
    nextStep: "تقديم محضر الحادثة للأستاذ عبد الرحمان عبود لإيداع مقال تعيين خبير طبي ومطالبة التأمين بأعلى تعويض مستحق."
  },
  realestate: {
    title: "القانون العقاري والتحفيظ (قانون 14.07)",
    keywords: ["عقار", "أرض", "تحفيظ", "محافظة", "كراء", "إفراغ", "ملكية", "شراء", "شفعة", "محفظ"],
    summary: "تخضع النزاعات العقارية للقانون 14.07 المغير لظهير التحفيظ العقاري ومقتضيات مدونة الحقوق العينية (قانون 39.08).",
    requirements: [
      "شهادة الملكية العقارية حديثة من المحافظة العقارية",
      "عقد الشراء أو رسم الملكية أو عقد الكراء المصحح الإمضاء",
      "الإنذارات القانونية المبلغة عبر المفوض القضائي (لقضايا الإفراغ أو الأداء)",
      "التصميم الهندسي أو وثائق التعمير المعتمدة"
    ],
    timeline: "تتطلب قضايا العقار دراسة دقيقة للرسوم والوثائق التاريخية وشهادات المحافظة لتجنب إبطال العقود أو سقوط الحقوق بالتقادم.",
    nextStep: "عرض وثائق العقار على الأستاذ عبد الرحمان عبود لدراسة سند الملكية وإيداع المقال أو التعرض في الآجال القانونية."
  },
  criminal: {
    title: "القانون الجنائي والمساطر الزجرية",
    keywords: ["جناية", "جنحة", "حراسة", "نظرية", "شرطة", "اعتقال", "شكاية", "وكيل", "ملك", "نصب", "خيانة", "أمانة"],
    summary: "يكفل قانون المسطرة الجنائية المغربي حق الدفاع وحضور المحامي أثناء الحراسة النظرية والتحقيق الإعدادي وأمام هيئة الحكم.",
    requirements: [
      "رقم الشكاية أو محضر الضابطة القضائية (إن وجد)",
      "المحكمة المختصة (ابتدائية، استئنافية) وهوية الدائرة الأمنية",
      "أدلة البراءة أو وثائق إثبات النصب/خيانة الأمانة/السرقة",
      "شهود أو تسجيلات أو مراسلات رسمية"
    ],
    timeline: "تتطلب الإجراءات الجنائية تدخلاً فورياً وسريعاً لحماية حقوق الموقوف أو الضحية وتقديم ملتمسات الإفراج المؤقت أو السراح بكفالة.",
    nextStep: "اتصال هاتفي مباشر وعاجل بمكتب الأستاذ عبود على الرقم 0661704554 لضمان المرافعة الفورية أمام النيابة العامة وقاضي التحقيق."
  },
  business: {
    title: "قانون الأعمال والشركات والمنازعات التجارية",
    keywords: ["شركة", "تجارة", "سجل", "تجاري", "كمبيالة", "شيك", "ديون", "إفلاس", "صعوبات", "مقاولات"],
    summary: "تختص المحاكم التجارية بالرباط وسائر المدن بالمنازعات بين التجار، ودعاوى الشركات التجارية، وتحصيل الديون.",
    requirements: [
      "السجل التجاري النموذجي (Modèle J) والقانون الأساسي للشركة",
      "الفواتير وسندات التسليم (Bons de livraison) الموقعة والمختومة",
      "الكمبيالات أو السندات لأمر أو إشعار البنك برفض صرف الشيك",
      "المراسلات والإنذارات الموجهة للطرف المدين"
    ],
    timeline: "يمكن اللجوء لمسطرة الأمر بالأداء السريعة لاستصدار أمر قضائي بأداء الدين في ظرف وجيز، يليه الحجز التنفيذي أو التحفظي.",
    nextStep: "تزويد الأستاذ عبد الرحمان عبود بنسخ الفواتير والكمبيالات لمباشرة مسطرة الأمر بالأداء الفوري والحجز على الحسابات."
  }
};

// Calculations Matrix for Fees & Durations in Moroccan Courts
const CALC_DATA = {
  consultation: {
    title: "استشارة قانونية ودراسة وثائق الملف",
    feeText: "أتعاب محددة بالتراضي (تخصم من القضية عند التوكيل)",
    duration: "جلسة واحدة فورية (حضورية أو عن بعد)",
    details: "تشمل دراسة كافة العقود والوثائق، تشخيص الموقف القانوني بدقة، واقتراح أنسب استراتيجية قضائية أو تفاوضية لحفظ حقوقكم."
  },
  family_divorce: {
    title: "دعوى التطليق للشقاق / قضايا الأسرة",
    feeText: "أتعاب جزافية واضحة وميسرة بالاتفاق",
    duration: "من شهرين إلى 5 أشهر",
    details: "تتضمن إعداد مقال الدعوى، حضور جلسات الصلح والمرافعة، ومتابعة تنفيذ الحكم الصادر بالنفقة والمستحقات."
  },
  accident_claim: {
    title: "دعوى التعويض عن حادثة سير (ظهير 1984)",
    feeText: "أتعاب بنسبة مئوية من التعويض المحكوم به بعد التحصيل",
    duration: "من 4 إلى 9 أشهر",
    details: "استخلاص محضر الشرطة، إيداع مقال تعيين خبير طبي محلف، المرافعة في تحديد المسؤوليات، وتنفيذ الحكم ضد شركة التأمين."
  },
  labor_dispute: {
    title: "دعوى الفصل التعسفي من العمل ومستحقات الأجراء",
    feeText: "أتعاب جزافية أو بنسبة محددة من مبالغ التعويض",
    duration: "من 3 إلى 7 أشهر",
    details: "إعداد مقال التعويض عن الضرر ومهلة الإخطار ومكافأة الأقدمية، والترافع أمام الغرفة الاجتماعية بالمحكمة الابتدائية."
  },
  realestate_eviction: {
    title: "قضايا العقار والإفراغ ونزاعات الملكية",
    feeText: "أتعاب تقدر حسب طبيعة العقار وقيمة النزاع",
    duration: "من 4 إلى 10 أشهر",
    details: "توجيه الإنذار العقاري عبر مفوض قضائي، إيداع مقال الإفراغ أو استرجاع الحيازة، ومتابعة إجراءات التنفيذ الجبري."
  },
  business_debt: {
    title: "تحصيل الديون التجارية ومساطر الأمر بالأداء",
    feeText: "أتعاب جزافية + نسبة تحصيل عند الاسترجاع الفعلي",
    duration: "من أسبوعين إلى 3 أشهر (مسطرة سريعة)",
    details: "استصدار أمر بالأداء من رئيس المحكمة التجارية بالرباط مع الحجز التحفظي على الحسابات البنكية والعقارات لضمان الوفاء."
  },
  penal_defense: {
    title: "الدفاع الجنائي (جنح وجنايات والمؤازرة أمام التحقيق)",
    feeText: "أتعاب تقدر حسب خطورة القضية وعدد الجلسات",
    duration: "تعتمد على مراحل التحقيق والمحاكمة",
    details: "المؤازرة الفورية أثناء الحراسة النظرية والتحقيق الإعدادي، تقديم مذكرات الدفاع وطلبات السراح المؤقت، والمرافعة أمام غرفة الجنايات."
  }
};

// Practice Areas Detailed Data for Modals
const PRACTICE_DETAILS = {
  business: {
    title: "قانون الأعمال والشركات (Droit des Affaires)",
    desc: "مواكبة شاملة للمقاولات والشركات الناشئة والمجموعات الاستثمارية في كافة مراحل النشاط التجاري.",
    items: [
      "تأسيس الشركات وصياغة القوانين الأساسية واتفاقيات الشركاء",
      "النزاعات التجارية بين الشركات والشركاء أمام المحاكم التجارية",
      "صياغة وتدقيق العقود التجارية وعقود التوزيع والامتياز",
      "مساطر الوقاية من صعوبات المقاولة والتسوية والتصفية القضائية",
      "تحصيل الديون واسترجاع مستحقات الشركات بفعالية وسرعة"
    ],
    codeRef: "مدونة التجارة المغربية (قانون رقم 15.95) وقانون الشركات التجارية (قانون 17.95 و5.96)"
  },
  penal: {
    title: "القانون الجنائي والمساطر الزجرية (Droit Pénal)",
    desc: "دفاع مستميت ومؤازرة قانونية حازمة في مختلف القضايا الجنائية والجنحية لحماية الحرية والحقوق الفردية.",
    items: [
      "حضور جلسات الاستماع أثناء الحراسة النظرية لدى الشرطة والدرك",
      "المؤازرة أمام قاضي التحقيق في التحقيق الإعدادي والتفصيلي",
      "الترافع أمام غرف الجنح والجنايات بمحاكم الاستئناف والنقض",
      "تقديم الشكايات المباشرة والادعاء بالحق المدني لجبر أضرار الضحايا",
      "جرائم الأعمال، النصب، خيانة الأمانة، والجرائم المالية"
    ],
    codeRef: "مجموعة القانون الجنائي المغربي وقانون المسطرة الجنائية (قانون رقم 22.01)"
  },
  family: {
    title: "قانون الأسرة والأحوال الشخصية (Droit de la Famille)",
    desc: "معالجة قضايا الأسرة بحكمة وسرية وإنسانية عالية لضمان استقرار الحقوق وحماية مصلحة الأطفال.",
    items: [
      "دعاوى التطليق للشقاق والطلاق الاتفاقي",
      "تحديد مبالغ النفقة، السكن، وتوسعة الأعياد والمناسبات",
      "إسقاط أو إثبات الحضانة وصلة الرحم والنيابة الشرعية",
      "قسمة التركات والمواريث وتصفية التركات وتحديد الأنصبة",
      "ثبوت الزوجية وتذييل الأحكام الأجنبية بالصيغة التنفيذية"
    ],
    codeRef: "مدونة الأسرة المغربية (قانون رقم 70.03)"
  },
  realestate: {
    title: "القانون العقاري والتحفيظ العقاري (Droit Immobilier)",
    desc: "حماية الملكية العقارية والاستثمارات السكنية والتجارية في مواجهة النزاعات والتعرضات.",
    items: [
      "دعاوى التحفيظ العقاري والبت في التعرضات أمام المحاكم",
      "نزاعات الكراء السكني والمهني والتجاري (قانون 67.12 وقانون 49.16)",
      "قضايا إفراغ المحلات للتماطل أو الاحتياج أو الهدم وإعادة البناء",
      "الشفعة، القسمة القضائية للعقارات المشاعة، وإبطال الرسوم المزورة",
      "دعاوى الضمان العشري والعيوب الخفية في البناء والعقارات"
    ],
    codeRef: "قانون التحفيظ العقاري 14.07 ومدونة الحقوق العينية (قانون رقم 39.08)"
  },
  administrative: {
    title: "القانون الإداري والمنازعات العمومية (Droit Administratif)",
    desc: "الترافع أمام المحاكم الإدارية بالرباط ضد الشطط في استعمال السلطة ونزاعات الصفقات والتعويض.",
    items: [
      "دعاوى الإلغاء ضد القرارات الإدارية المتسمة بالشطط في استعمال السلطة",
      "دعاوى التعويض عن الأضرار المادية والبدنية الناتجة عن مرافق الدولة والجماعات",
      "نزاعات نزع الملكية لأجل المنفعة العامة وتحديد التعويض العادل",
      "منازعات الصفقات العمومية والامتيازات الإدارية",
      "قضايا الوضعية الفردية للموظفين والمستخدمين العموميين"
    ],
    codeRef: "القانون رقم 41.90 المحدث للمحاكم الإدارية والقانون رقم 80.03 لمحاكم الاستئناف الإدارية"
  },
  insurance: {
    title: "قانون التأمين والتعويض عن حوادث السير (Droit des Assurances)",
    desc: "استخلاص أعلى التعويضات المستحقة لضحايا حوادث السير والحوادث المادية والبدنية.",
    items: [
      "التعويض عن حوادث السير بموجب ظهير 2 أكتوبر 1984",
      "تعيين الخبراء الأطباء لتقييم نسب العجز المؤقت والدائم بدقة",
      "المطالبة بالتعويض عن الضرر المعنوي ومصاريف العلاج والأدوية",
      "منازعات عقود التأمين على الحياة، والحرائق، والمسؤولية المدنية",
      "التفاوض الودي الحازم مع كبريات شركات التأمين بالمغرب"
    ],
    codeRef: "مدونة التأمينات (قانون رقم 17.99) وظهير 2 أكتوبر 1984"
  },
  social: {
    title: "قانون الشغل والنزاعات الاجتماعية (Droit Social)",
    desc: "الدفاع عن حقوق العمال والأجراء ومواكبة أرباب العمل لضمان الامتثال لمدونة الشغل.",
    items: [
      "دعاوى الفصل التعسفي والمطالبة بكافة التعويضات القانونية",
      "حوادث الشغل والأمراض المهنية ومتابعة إيرادات الصندوق الوطني",
      "صياغة ومراجعة عقود العمل والنظام الداخلي للمؤسسات",
      "استرجاع الأجور غير المؤداة، الساعات الإضافية، والعطل السنوية",
      "المؤازرة في مساطر الصلح أمام مفتشيات الشغل بالمملكة"
    ],
    codeRef: "مدونة الشغل المغربية (قانون رقم 65.99) وقانون حوادث الشغل (18.12)"
  },
  banking: {
    title: "القانون البنكي والمالي (Droit Bancaire)",
    desc: "معالجة المنازعات الناشئة بين المؤسسات البنكية وزبنائها من أفراد ومقاولات.",
    items: [
      "نزاعات القروض البنكية ونسب الفوائد القانونية والاتفاقية",
      "رفع اليد عن الرهون الرسمية والضمانات البنكية بعد الوفاء",
      "مساطر الحجز التنفيذي والتحفظي على الأرصدة البنكية",
      "المسؤولية البنكية في صرف الشيكات والمعاملات الائتمانية",
      "إعادة جدولة الديون المصرفية والتفاوض مع البنوك المغربية"
    ],
    codeRef: "القانون رقم 103.12 المتعلق بمؤسسات الائتمان والهيئات المعتبرة في حكمها"
  },
  maritime: {
    title: "القانون البحري والشحن (Droit Maritime)",
    desc: "معالجة نزاعات الملاحة والتجارة البحرية والشحن بموانئ المملكة.",
    items: [
      "نزاعات عقود النقل البحري للبضائع وتلف الشحنات",
      "مساطر الحجز التحفظي والتنفيذي على السفن في الموانئ المغربية",
      "المسؤولية المدنية للناقل البحري وأندية الحماية والتعويض (P&I)",
      "قضايا التأمين البحري وحوادث التصادم والإنقاذ",
      "نزاعات عقود عمل رجال البحر والبحارة"
    ],
    codeRef: "مدونة التجارة البحرية المغربية (ظهير 1919 المعدل) والاتفاقيات الدولية المصادق عليها"
  },
  civil: {
    title: "القانون المدني والعقود (Droit Civil)",
    desc: "العمود الفقري للنظام القانوني المغربي، وتنظيم الالتزامات والحقوق الشخصية.",
    items: [
      "صياغة ومراجعة كافة أصناف العقود والاتفاقيات المدنية",
      "دعاوى المسؤولية التقصيرية والعقدية والمطالبة بالتعويض عن الأضرار",
      "تحصيل الديون المدنية والاعتراف بالدين وسندات الوفاء",
      "إبطال وفسخ العقود للإخلال بالالتزامات أو عيوب الرضا (الغلط، التدليس)",
      "نزاعات الجوار وحق الارتفاق والحيازة"
    ],
    codeRef: "ظهير الالتزامات والعقود المغربي (DOC) الصادر بتاريخ 12 غشت 1913"
  },
  fiscal: {
    title: "القانون الضريبي والجباية (Droit Fiscal)",
    desc: "الدفاع عن الملزمين بالضريبة في مواجهة الإشعار للغير الحائز والتحقيقات الضريبية.",
    items: [
      "المنازعة في الفروض الضريبية ومراجعات إدارة الضرائب",
      "الطعن أمام اللجان المحلية واللجنة الوطنية للنظر في الطعون الضريبية",
      "رفع الدعاوى الجبائية أمام المحاكم الإدارية واسترجاع المبالغ المستخلصة خطأ",
      "رفع اليد عن مساطر الإشعار للغير الحائز (ATD) وحجز الحسابات",
      "الاستشارة في التخطيط والتحسين الضريبي القانوني للمقاولات"
    ],
    codeRef: "المدونة العامة للضرائب (CGI) وقانون تحصيل الديون العمومية (قانون 15.97)"
  },
  press: {
    title: "قانون الصحافة والنشر والجرائم الرقمية (Droit de la Presse)",
    desc: "حماية الحقوق والحريات والسمعة الإلكترونية والترافع في قضايا التعبير والإعلام.",
    items: [
      "قضايا القذف، السب، والتشهير عبر المنصات الرقمية ومواقع التواصل",
      "الجرائم الإلكترونية والمس بالحياة الخاصة والبيانات الشخصية",
      "الدفاع عن الصحفيين والمؤسسات الإعلامية وصناع المحتوى",
      "مساطر ممارسة حق الرد والتصحيح القانوني",
      "الامتثال لقوانين حماية المعطيات ذات الطابع الشخصي (CNDP)"
    ],
    codeRef: "قانون الصحافة والنشر (قانون رقم 88.13) وقانون حماية المعطيات الشخصية (09.08)"
  }
};

// Initialize Application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initHeroActions();
  initPracticeFilters();
  initAiAssistant();
  initCalculator();
  initBookingForm();
  initFaqAccordion();
  initTestimonials();
  initContactActions();
});

/* ==========================================================================
   Theme Management
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('abboud_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('abboud_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle-btn i');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fas fa-sun';
    icon.parentElement.setAttribute('title', 'التبديل إلى الوضع النهاري الكلاسيكي');
  } else {
    icon.className = 'fas fa-moon';
    icon.parentElement.setAttribute('title', 'التبديل إلى الوضع الليلي الملكي');
  }
}

/* ==========================================================================
   Navbar & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-menu-drawer a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      const isOpen = mobileDrawer.classList.contains('active');
      mobileToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
}

/* ==========================================================================
   Hero Actions
   ========================================================================== */
function initHeroActions() {
  // Smooth scroll helper for anchor buttons
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ==========================================================================
   Practice Areas Filter & Details Modal
   ========================================================================== */
function initPracticeFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.practice-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Action Buttons on cards to view details
  document.querySelectorAll('.btn-card-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const practiceKey = btn.getAttribute('data-practice');
      openPracticeModal(practiceKey);
    });
  });

  // Direct Book Consultation button from practice card
  document.querySelectorAll('.btn-card-book').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const practiceKey = btn.getAttribute('data-practice');
      selectPracticeInBookingForm(practiceKey);
    });
  });
}

function openPracticeModal(key) {
  const data = PRACTICE_DETAILS[key];
  if (!data) return;

  const modalContainer = document.getElementById('generic-modal-content');
  const modalOverlay = document.getElementById('generic-modal');

  modalContainer.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="badge-gold" style="margin-bottom: 0.75rem;"><i class="fas fa-balance-scale"></i> تخصص قانوني معتمد</span>
      <h3 style="font-size: 1.6rem; color: var(--text-main); margin-bottom: 0.5rem; line-height: 1.3;">${data.title}</h3>
      <p style="color: var(--text-body); font-size: 0.98rem; line-height: 1.7;">${data.desc}</p>
    </div>

    <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; color: var(--gold-400); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
        <i class="fas fa-check-circle"></i> أبرز الخدمات والمساطر المشمولة:
      </h4>
      <ul style="padding-right: 1.2rem; color: var(--text-body); font-size: 0.92rem; line-height: 1.8;">
        ${data.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem; margin-bottom: 1.5rem;">
      <small style="color: var(--text-muted); display: block;">
        <strong>المرجع القانوني الأساسي:</strong> ${data.codeRef}
      </small>
    </div>

    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      <button class="btn btn-primary" onclick="selectPracticeInBookingForm('${key}'); closeGenericModal();" style="flex: 1;">
        <i class="fas fa-calendar-check"></i> طلب استشارة في هذا المجال
      </button>
      <a href="https://api.whatsapp.com/send?phone=212661704554&text=${encodeURIComponent('السلام عليكم الأستاذ عبد الرحمان عبود، أود استشارة بخصوص: ' + data.title)}" target="_blank" class="btn btn-whatsapp">
        <i class="fab fa-whatsapp"></i> واتساب فوري
      </a>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function closeGenericModal() {
  document.getElementById('generic-modal').classList.remove('active');
}

function selectPracticeInBookingForm(key) {
  const select = document.getElementById('case-specialty-select');
  if (select) {
    select.value = key;
  }
  const bookingSec = document.getElementById('booking');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ==========================================================================
   AI Legal Assistant (المساعد القانوني التفاعلي)
   ========================================================================== */
function initAiAssistant() {
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-user-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const topicChips = document.querySelectorAll('.topic-chip');

  topicChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      handleUserQuery(query);
    });
  });

  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', () => {
      const text = chatInput.value.trim();
      if (text) {
        handleUserQuery(text);
        chatInput.value = '';
      }
    });

    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const text = chatInput.value.trim();
        if (text) {
          handleUserQuery(text);
          chatInput.value = '';
        }
      }
    });
  }
}

function handleUserQuery(query) {
  const chatMessages = document.getElementById('chat-messages');
  if (!chatMessages) return;

  // Add User Message Bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.textContent = query;
  chatMessages.appendChild(userBubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Show typing or process
  setTimeout(() => {
    const analysis = analyzeLegalQuery(query);
    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble bot';

    const waText = encodeURIComponent(`السلام عليكم الأستاذ عبد الرحمان عبود، أرغب في استشارة قانونية:\nالموضوع: ${query}\nالتخصص: ${analysis.title}`);

    botBubble.innerHTML = `
      <span class="bot-name"><i class="fas fa-robot"></i> المساعد القانوني التفاعلي لمكتب الأستاذ عبود</span>
      <p><strong>تشخيص الموقف القانوني:</strong> ${analysis.summary}</p>
      <div class="legal-card-reply">
        <strong style="color: var(--gold-400); font-size: 0.85rem;"><i class="fas fa-file-alt"></i> الوثائق المطلوبة لتحضير الملف:</strong>
        <ul>
          ${analysis.requirements.map(r => `<li>${r}</li>`).join('')}
        </ul>
        <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 0.4rem;">
          <i class="fas fa-clock"></i> <strong>الآجال والإجراءات:</strong> ${analysis.timeline}
        </p>
        <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <a href="https://api.whatsapp.com/send?phone=212661704554&text=${waText}" target="_blank" class="btn-dispatch-wa">
            <i class="fab fa-whatsapp"></i> تحويل هذه الاستشارة للأستاذ عبود عبر واتساب
          </a>
          <button class="btn btn-secondary" onclick="document.getElementById('booking').scrollIntoView({behavior:'smooth'});" style="padding: 0.45rem 0.85rem; font-size: 0.8rem;">
            <i class="fas fa-calendar-plus"></i> حجز موعد رسمي
          </button>
        </div>
      </div>
    `;

    chatMessages.appendChild(botBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 400);
}

function analyzeLegalQuery(query) {
  const lower = query.toLowerCase();

  for (const [key, data] of Object.entries(LEGAL_KNOWLEDGE)) {
    for (const kw of data.keywords) {
      if (lower.includes(kw)) {
        return data;
      }
    }
  }

  // Fallback generic guidance
  return {
    title: "استشارة قانونية عامة بالمكتب",
    summary: "يتولى مكتب الأستاذ عبد الرحمان عبود دراسة وضعيتكم القانونية وإرشادكم حول أنسب السبل القضائية أو الودية لحماية مصالحكم.",
    requirements: [
      "كافة العقود والاتفاقيات المتعلقة بالموضوع",
      "المراسلات أو الإنذارات المتبادلة بين الأطراف",
      "نسخة من بطاقة التعريف الوطنية وهوية الأطراف المعنية"
    ],
    timeline: "يتم تحديد الإجراءات والآجال القضائية بدقة فور دراسة وثائق ومستندات الملف في جلسة الاستشارة الأولى.",
    nextStep: "التواصل المباشر مع الأستاذ عبد الرحمان عبود لتحديد موعد بالمكتب بالرباط."
  };
}

/* ==========================================================================
   Fees & Timeframe Calculator
   ========================================================================== */
function initCalculator() {
  const calcSelect = document.getElementById('calc-category-select');
  const calcStage = document.getElementById('calc-stage-select');

  if (calcSelect) {
    calcSelect.addEventListener('change', updateCalculatorResult);
  }
  if (calcStage) {
    calcStage.addEventListener('change', updateCalculatorResult);
  }
}

function updateCalculatorResult() {
  const select = document.getElementById('calc-category-select');
  const key = select.value;
  const data = CALC_DATA[key];
  if (!data) return;

  const titleEl = document.getElementById('calc-result-title');
  const feeEl = document.getElementById('calc-result-fee');
  const durationEl = document.getElementById('calc-result-duration');
  const detailsEl = document.getElementById('calc-result-details');

  if (titleEl) titleEl.textContent = data.title;
  if (feeEl) feeEl.textContent = data.feeText;
  if (durationEl) durationEl.innerHTML = `<i class="fas fa-hourglass-half" style="color: var(--gold-400);"></i> المدة التقريبية: ${data.duration}`;
  if (detailsEl) detailsEl.textContent = data.details;
}

/* ==========================================================================
   Consultation Booking System
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById('consultation-booking-form');
  const radioBoxes = document.querySelectorAll('.consult-radio-box');

  radioBoxes.forEach(box => {
    box.addEventListener('click', () => {
      radioBoxes.forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');
      const radio = box.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  if (form) {
    // Set minimum date to today
    const dateInput = document.getElementById('consult-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleBookingSubmission(form);
    });
  }
}

function handleBookingSubmission(form) {
  const fullName = form.querySelector('#consult-name').value.trim();
  const phone = form.querySelector('#consult-phone').value.trim();
  const specialty = form.querySelector('#case-specialty-select').value;
  const specialtyText = form.querySelector('#case-specialty-select option:checked').text;
  const date = form.querySelector('#consult-date').value;
  const time = form.querySelector('#consult-time').value;
  const consultType = form.querySelector('input[name="consult_type"]:checked').value;
  const notes = form.querySelector('#consult-notes').value.trim();

  if (!fullName || !phone) {
    alert("يرجى ملء الاسم الكامل ورقم الهاتف بشكل صحيح.");
    return;
  }

  // Generate Reference Number
  const refNumber = 'ABB-' + Math.floor(100000 + Math.random() * 900000);
  const typeText = consultType === 'office' ? 'استشارة حضورية بمكتب الرباط' : 'استشارة عن بعد (هاتفياً / فيديو)';

  // Open Confirmation Modal
  const modalContainer = document.getElementById('generic-modal-content');
  const modalOverlay = document.getElementById('generic-modal');

  const waMessage = encodeURIComponent(
    `السلام عليكم الأستاذ عبد الرحمان عبود،\n` +
    `أود تأكيد حجز موعد استشارة قانونية:\n` +
    `• رقم الحجز: ${refNumber}\n` +
    `• الاسم: ${fullName}\n` +
    `• الهاتف: ${phone}\n` +
    `• نوع الاستشارة: ${typeText}\n` +
    `• التخصص: ${specialtyText}\n` +
    `• التاريخ والوقت: ${date} في تمام ${time}\n` +
    `• موضوع الاستشارة: ${notes || 'استشارة حول ملف'}`
  );

  modalContainer.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(198, 156, 94, 0.15); border: 2px solid var(--gold-400); color: var(--gold-400); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem auto;">
        <i class="fas fa-check"></i>
      </div>
      <h3 style="font-size: 1.6rem; color: var(--text-main); margin-bottom: 0.5rem;">تم تسجيل طلب الاستشارة بنجاح</h3>
      <p style="color: var(--text-body); font-size: 0.95rem;">
        شكراً لك سيد(ة) <strong>${fullName}</strong>. رقم ملفكم المرجعي: <span style="color: var(--gold-400); font-family: var(--font-latin); font-weight: 800;">${refNumber}</span>
      </p>
    </div>

    <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; font-size: 0.9rem;">
        <div><span style="color: var(--text-muted);">نوع الموعد:</span> <br><strong>${typeText}</strong></div>
        <div><span style="color: var(--text-muted);">التاريخ والوقت:</span> <br><strong>${date} (${time})</strong></div>
        <div><span style="color: var(--text-muted);">المجال القانوني:</span> <br><strong>${specialtyText}</strong></div>
        <div><span style="color: var(--text-muted);">الهاتف المسجل:</span> <br><strong style="direction: ltr; display: inline-block;">${phone}</strong></div>
      </div>
    </div>

    <div style="background: rgba(37, 211, 102, 0.08); border: 1px solid rgba(37, 211, 102, 0.3); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem; text-align: center;">
      <p style="font-size: 0.88rem; color: #cbd5e1; margin-bottom: 0.75rem;">
        لتأكيد موعدكم فوراً وضمان حجز التوقيت المناسب في أجندة الأستاذ عبود، يرجى إرسال تفاصيل الحجز عبر واتساب:
      </p>
      <a href="https://api.whatsapp.com/send?phone=212661704554&text=${waMessage}" target="_blank" class="btn btn-whatsapp" style="width: 100%;">
        <i class="fab fa-whatsapp"></i> إرسال وتأكيد الحجز فوراً عبر واتساب
      </a>
    </div>

    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      <button class="btn btn-secondary" onclick="downloadICalEvent('${fullName}', '${date}', '${time}', '${specialtyText}');" style="flex: 1;">
        <i class="fas fa-calendar-plus"></i> إضافة إلى تقويم هاتفي (iCal)
      </button>
      <button class="btn btn-primary" onclick="closeGenericModal();" style="flex: 1;">
        <i class="fas fa-check"></i> حسناً، تم
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
  form.reset();
}

function downloadICalEvent(name, dateStr, timeStr, subject) {
  const startDateTime = new Date(`${dateStr}T${timeStr}:00`);
  const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hour duration

  const formatICalDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Cabinet Maitre Abderrahman Abboud//Morocco Law//AR
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:استشارة قانونية: مكتب الأستاذ عبد الرحمان عبود (${subject})
DESCRIPTION:موعد استشارة قانونية للأستاذ عبد الرحمان عبود - محام بهيئة الرباط.\\nالمكان: 11 شارع المجد، شقة 2، الطابق 2، يعقوب المنصور، الرباط.\\nالهاتف: 0661704554
LOCATION:11 Avenue El MAJD, Appt 2, 2ème étage, C Y.M, Rabat
DTSTART:${formatICalDate(startDateTime)}
DTEND:${formatICalDate(endDateTime)}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `consultation-maitre-abboud-${dateStr}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ==========================================================================
   FAQ Accordion & Search
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  const searchInput = document.getElementById('faq-search-input');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const questionText = item.querySelector('.faq-question-btn').textContent.toLowerCase();
        const answerText = item.querySelector('.faq-answer-pane').textContent.toLowerCase();

        if (questionText.includes(term) || answerText.includes(term)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
}

/* ==========================================================================
   Testimonials & Feedback
   ========================================================================== */
function initTestimonials() {
  const addReviewBtn = document.getElementById('btn-add-review');
  if (addReviewBtn) {
    addReviewBtn.addEventListener('click', openAddReviewModal);
  }
}

function openAddReviewModal() {
  const modalContainer = document.getElementById('generic-modal-content');
  const modalOverlay = document.getElementById('generic-modal');

  modalContainer.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-size: 1.5rem; color: var(--text-main); margin-bottom: 0.5rem;">إضافة رأي أو تقييم لخدمات المكتب</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem;">نعتز بثقتكم ونرحب بآرائكم لتطوير جودة المواكبة القانونية.</p>
    </div>

    <form id="new-review-form">
      <div class="form-group">
        <label>الاسم أو الصفة <span class="req">*</span></label>
        <input type="text" id="review-user-name" class="form-control" required placeholder="مثال: يوسف م. / مسير شركة بالرباط">
      </div>
      <div class="form-group">
        <label>نوع القضية أو الاستشارة <span class="req">*</span></label>
        <input type="text" id="review-case-type" class="form-control" required placeholder="مثال: نزاع عقاري / قضية شغل / تأسيس شركة">
      </div>
      <div class="form-group">
        <label>التقييم بالنجوم</label>
        <select id="review-stars-val" class="form-control">
          <option value="5">⭐⭐⭐⭐⭐ ممتاز جداً (5/5)</option>
          <option value="4">⭐⭐⭐⭐ جيد جداً (4/5)</option>
          <option value="3">⭐⭐⭐ متوسط (3/5)</option>
        </select>
      </div>
      <div class="form-group">
        <label>شهادتكم أو ملاحظتكم <span class="req">*</span></label>
        <textarea id="review-comment" class="form-control" rows="3" required placeholder="اكتب رأيك حول تعامل الأستاذ عبود وسرعة الترافع..."></textarea>
      </div>

      <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
        <button type="submit" class="btn btn-primary" style="flex: 1;">
          <i class="fas fa-paper-plane"></i> نشر التقييم
        </button>
        <button type="button" class="btn btn-secondary" onclick="closeGenericModal();">
          إلغاء
        </button>
      </div>
    </form>
  `;

  modalOverlay.classList.add('active');

  const form = document.getElementById('new-review-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('review-user-name').value.trim();
    const caseType = document.getElementById('review-case-type').value.trim();
    const comment = document.getElementById('review-comment').value.trim();

    alert(`شكراً لك سيد(ة) ${name}! تم إرسال تقييمكم بنجاح وسينشر بعد المراجعة.`);
    closeGenericModal();
  });
}

/* ==========================================================================
   Contact Helpers & vCard
   ========================================================================== */
function initContactActions() {
  const copyBtn = document.getElementById('btn-copy-address');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const address = "11 شارع المجد، شقة رقم 2، الطابق الثاني، يعقوب المنصور، الرباط";
      navigator.clipboard.writeText(address).then(() => {
        copyBtn.innerHTML = '<i class="fas fa-check"></i> تم نسخ العنوان!';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fas fa-copy"></i> نسخ العنوان كاملاً';
        }, 2500);
      });
    });
  }

  const vcardBtn = document.getElementById('btn-download-vcard');
  if (vcardBtn) {
    vcardBtn.addEventListener('click', downloadLawyerVCard);
  }
}

function downloadLawyerVCard() {
  const vcard = 
`BEGIN:VCARD
VERSION:3.0
N:عبود;عبد الرحمان;;الأستاذ;
FN:الأستاذ عبد الرحمان عبود (محام بهيئة الرباط)
ORG:مكتب الأستاذ عبد الرحمان عبود للمحاماة والاستشارات القانونية
TITLE:محامٍ بهيئة الرباط - مقبول لدى محاكم الاستئناف
TEL;TYPE=WORK,VOICE:+212661704554
TEL;TYPE=CELL,WHATSAPP:+212661704554
ADR;TYPE=WORK:;;N 11 Avenue El MAJD, Appt 2, 2eme etage;Rabat;Rabat-Sale-Kenitra;;Morocco
NOTE:محام بهيئة الرباط - استشارات قانونية، قضايا الأعمال، الجنائي، الأسرة، العقار، التأمين.
URL:https://www.annuairedesavocats.ma/fr/avocats
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'maitre-abderrahman-abboud.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
