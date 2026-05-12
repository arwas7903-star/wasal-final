window.API = (function () {
  const disabilities = [
    {
      id: 1,
      type: "visual",
      nameAr: "دعم بصري",
      nameEn: "Visual Support",
      descriptionAr: "أدوات تساعد على قراءة المحتوى بوضوح مثل الصوت وتكبير النصوص.",
      descriptionEn: "Tools that help read content clearly, such as voice and text zoom.",
      features: [
        { icon: "🔊", nameAr: "قارئ صوتي", nameEn: "Voice Reader" },
        { icon: "🔍", nameAr: "تكبير النصوص", nameEn: "Text Zoom" },
        { icon: "🟢", nameAr: "ألوان مريحة", nameEn: "Comfort Colors" },
      ],
    },
    {
      id: 2,
      type: "hearing",
      nameAr: "دعم سمعي",
      nameEn: "Hearing Support",
      descriptionAr: "تنبيهات ضوئية وتفاعل بصري واضح أثناء استخدام الموقع.",
      descriptionEn: "Light alerts and clear visual interaction while using the website.",
      features: [
        { icon: "💡", nameAr: "تنبيهات ضوئية", nameEn: "Light Alerts" },
        { icon: "👁️", nameAr: "إشارات بصرية", nameEn: "Visual Cues" },
      ],
    },
    {
      id: 3,
      type: "motor",
      nameAr: "دعم حركي",
      nameEn: "Motor Support",
      descriptionAr: "واجهة بسيطة وأزرار واضحة لتسهيل الوصول للخدمات.",
      descriptionEn: "Simple interface and clear buttons to access services easily.",
      features: [
        { icon: "🖱️", nameAr: "أزرار واضحة", nameEn: "Clear Buttons" },
        { icon: "📱", nameAr: "تصميم سهل", nameEn: "Easy Design" },
      ],
    },
  ];

const services = [
  {
    id: 1,
    icon: "🚗",
    nameAr: "التنقل",
    nameEn: "Transportation",
    descriptionAr: "نقل آمن ومريح لذوي الهمم بسيارات مجهزة خصيصاً",
    descriptionEn: "Safe and comfortable transportation",
    options: [
      {
        id: 101,
        nameAr: "سيارة كبيرة",
        nameEn: "Large Car",
        descriptionAr: "سيارة واسعة مناسبة للكراسي المتحركة والعائلات مع مساحة إضافية.",
        descriptionEn: "Large accessible car.",
        priceBase: 30,
        fields: ["من موقعك الحالي", "إلى الوجهة", "الوقت"]
      },
      {
        id: 102,
        nameAr: "سيارة متوسطة",
        nameEn: "Medium Car",
        descriptionAr: "سيارة مريحة للتنقل اليومي داخل المدينة.",
        descriptionEn: "Comfortable daily transport.",
        priceBase: 25,
        fields: ["من موقعك الحالي", "إلى الوجهة", "الوقت"]
      },
      {
        id: 103,
        nameAr: "سيارة صغيرة",
        nameEn: "Small Car",
        descriptionAr: "سيارة عملية وسريعة للتنقلات القصيرة.",
        descriptionEn: "Fast short-distance transport.",
        priceBase: 20,
        fields: ["من موقعك الحالي", "إلى الوجهة", "الوقت"]
      },
      {
        id: 104,
        nameAr: "سيارة مخصصة",
        nameEn: "Accessible Car",
        descriptionAr: "سيارة مجهزة لتقديم راحة أكبر أثناء التنقل.",
        descriptionEn: "Accessible equipped car.",
        priceBase: 40,
        fields: ["من موقعك الحالي", "إلى الوجهة", "الوقت"]
      }
    ]
  },

  {
    id: 2,
    icon: "🤝",
    nameAr: "الدعم الشخصي",
    nameEn: "Personal Support",
    descriptionAr: "مساعدة شخصية متخصصة في المستشفيات والمدارس والمنازل والأماكن العامة",
    descriptionEn: "Specialized personal support",
    options: [
      {
        id: 201,
        nameAr: "دعم في الأماكن العامة",
        nameEn: "Public Places Support",
        descriptionAr: "مساعد شخصي لمرافقتك في الأماكن العامة والتسوق.",
        descriptionEn: "Assistant for public places.",
        priceBase: 35,
        fields: ["الموقع", "نوع المساعدة", "الوقت"]
      },
      {
        id: 202,
        nameAr: "دعم في المنزل",
        nameEn: "Home Support",
        descriptionAr: "مساعد شخصي مدرب لتقديم الدعم والمساعدة في المنزل.",
        descriptionEn: "Home assistant support.",
        priceBase: 50,
        fields: ["عنوان المنزل", "نوع الدعم", "الوقت"]
      },
      {
        id: 203,
        nameAr: "دعم في المدرسة",
        nameEn: "School Support",
        descriptionAr: "مساعد شخصي مدرب لمرافقة الطالب في المدرسة ودعمه تعليمياً.",
        descriptionEn: "School support assistant.",
        priceBase: 55,
        fields: ["اسم المدرسة", "تفاصيل المرافقة", "الوقت"]
      },
      {
        id: 204,
        nameAr: "دعم في المستشفى",
        nameEn: "Hospital Support",
        descriptionAr: "مساعد شخصي مدرب للمرافقة في المستشفى وتسهيل الإجراءات.",
        descriptionEn: "Hospital assistant support.",
        priceBase: 60,
        fields: ["اسم المستشفى", "نوع الحالة", "الوقت"]
      },
      {
        id: 205,
        nameAr: "الدعم الشخصي",
        nameEn: "Personal Support",
        descriptionAr: "دعم شخصي حسب احتياجك وموقع تواجدك.",
        descriptionEn: "Personal support by request.",
        priceBase: 45,
        fields: ["نوع الطلب", "موقع التواجد", "الوقت"]
      }
    ]
  },

  {
    id: 3,
    icon: "☕",
    nameAr: "الطلب السريع",
    nameEn: "Quick Order",
    descriptionAr: "طلب سريع من المقاهي والمطاعم وخدمات متنوعة توصل إلى بابك",
    descriptionEn: "Fast delivery requests",
    options: [
      {
        id: 301,
        nameAr: "خدمات سريعة",
        nameEn: "Quick Services",
        descriptionAr: "خدمات سريعة متنوعة مثل الصيدلية والبقالة والطلبات الخاصة.",
        descriptionEn: "Pharmacy, grocery, and special requests.",
        priceBase: 20,
        fields: ["موقع الاستلام", "موقع التسليم", "الوقت"]
      },
      {
        id: 302,
        nameAr: "طلب من مطعم",
        nameEn: "Restaurant Order",
        descriptionAr: "طلب وجبتك المفضلة من المطاعم المتاحة مع توصيل سريع.",
        descriptionEn: "Restaurant food delivery.",
        priceBase: 25,
        fields: ["اسم المطعم", "موقع التوصيل", "الوقت"]
      },
      {
        id: 303,
        nameAr: "طلب من مقهى",
        nameEn: "Cafe Order",
        descriptionAr: "طلب مشروباتك وطعامك من أفضل المقاهي القريبة.",
        descriptionEn: "Cafe drinks and food delivery.",
        priceBase: 18,
        fields: ["اسم المقهى", "عنوان التوصيل", "الوقت"]
      }
    ]
  },

  {
    id: 4,
    icon: "🛠️",
    nameAr: "الصيانة",
    nameEn: "Maintenance",
    descriptionAr: "خدمات صيانة الأجهزة والمنزل مع تحديد الوقت والتاريخ المناسبين",
    descriptionEn: "Home and device maintenance",
    options: [
      {
        id: 401,
        nameAr: "صيانة منزلية",
        nameEn: "Home Maintenance",
        descriptionAr: "صيانة منزلية شاملة للسباكة والكهرباء وأعمال النجارة البسيطة.",
        descriptionEn: "Plumbing, electricity, and simple carpentry.",
        priceBase: 70,
        fields: ["نوع الخدمة", "موقع المنزل", "الوقت"],
        imageOptional: true
      },
      {
        id: 402,
        nameAr: "صيانة أجهزة",
        nameEn: "Device Maintenance",
        descriptionAr: "صيانة وإصلاح الأجهزة المنزلية والإلكترونيات والكراسي المتحركة.",
        descriptionEn: "Device and wheelchair maintenance.",
        priceBase: 80,
        fields: ["نوع الجهاز", "وصف المشكلة", "الوقت"],
        imageOptional: true
      }
    ]
  }
];
  function getUser() {
    return JSON.parse(localStorage.getItem("wasal_user") || "null");
  }

  function setUser(user) {
    localStorage.setItem("wasal_user", JSON.stringify(user));
    localStorage.setItem(Config.KEYS.TOKEN, "demo-token");
  }

  function getOrdersStore() {
    return JSON.parse(localStorage.getItem("wasal_orders") || "[]");
  }

  function setOrdersStore(orders) {
    localStorage.setItem("wasal_orders", JSON.stringify(orders));
  }

  function findServiceByOption(optionId) {
    for (const category of services) {
      const option = category.options.find((o) => o.id === Number(optionId));
      if (option) return { category, option };
    }
    return null;
  }

  function wait(data) {
    return new Promise((resolve) => setTimeout(() => resolve(data), 150));
  }

  return {
    getMe: () => wait(getUser()),

    login: (body) => {
      const user = { id: 1, name: body.email.split("@")[0], email: body.email, phone: "" };
      setUser(user);
      return wait({ token: "demo-token", user });
    },

    register: (body) => {
      const user = { id: 1, name: body.name, email: body.email, phone: body.phone };
      setUser(user);
      return wait({ token: "demo-token", user });
    },

    getDisabilities: () => wait(disabilities),
    getDisability: (id) => wait(disabilities.find((d) => d.id === Number(id))),
    getServices: () => wait(services),
    getService: (id) => wait(services.find((s) => s.id === Number(id))),

    createOrder: (body) => {
      const found = findServiceByOption(body.serviceOptionId);
      const orders = getOrdersStore();
      const basePrice = found ? Number(found.option.priceBase) : 0;
      const additionalFee = body.additionalFee ? Number(body.additionalFee) : 0;

      const order = {
        id: Date.now(),
        serviceOptionId: body.serviceOptionId,
        serviceOption: found ? found.option : null,
        serviceCategory: found ? found.category : null,
        locationFrom: body.locationFrom,
        locationTo: body.locationTo,
        scheduledDate: body.scheduledDate,
        scheduledTime: body.scheduledTime,
        notes: body.notes,
        basePrice,
        additionalFee,
        totalPrice: basePrice + additionalFee,
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      orders.unshift(order);
      setOrdersStore(orders);
      return wait(order);
    },

    confirmOrder: (id) => {
      const orders = getOrdersStore();
      const order = orders.find((o) => o.id === Number(id));
      if (order) order.status = "confirmed";
      setOrdersStore(orders);
      return wait(order);
    },

    cancelOrder: (id) => {
      const orders = getOrdersStore();
      const order = orders.find((o) => o.id === Number(id));
      if (order) order.status = "cancelled";
      setOrdersStore(orders);
      return wait(order);
    },

    getOrders: () => wait(getOrdersStore()),

    getOrdersSummary: () => {
      const orders = getOrdersStore();
      return wait({
        total: orders.length,
        pending: orders.filter((o) => o.status === "pending").length,
        confirmed: orders.filter((o) => o.status === "confirmed").length,
        cancelled: orders.filter((o) => o.status === "cancelled").length,
        completed: orders.filter((o) => o.status === "completed").length,
        totalSpent: orders.reduce((sum, o) => sum + Number(o.totalPrice || 0), 0),
      });
    },

    getOrder: (id) => wait(getOrdersStore().find((o) => o.id === Number(id))),
  };
})();
