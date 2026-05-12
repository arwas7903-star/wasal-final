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
    descriptionEn: "Safe and comfortable transportation services",
    options: [
      {
        id: 101,
        nameAr: "سيارة كبيرة",
        nameEn: "Large Car",
        descriptionAr: "سيارة واسعة ومناسبة للكراسي المتحركة والعائلات مع مساحة إضافية للراحة",
        descriptionEn: "Large accessible car",
        priceBase: 30
      },
      {
        id: 102,
        nameAr: "سيارة متوسطة",
        nameEn: "Medium Car",
        descriptionAr: "سيارة مريحة للتنقل اليومي داخل المدينة بمساحة مناسبة وراحة عالية",
        descriptionEn: "Comfortable medium car",
        priceBase: 25
      },
      {
        id: 103,
        nameAr: "سيارة صغيرة",
        nameEn: "Small Car",
        descriptionAr: "سيارة سريعة وعملية للتنقلات القصيرة داخل المدينة",
        descriptionEn: "Fast small car",
        priceBase: 20
      }
    ]
  },

  {
    id: 2,
    icon: "🧍",
    nameAr: "الدعم الشخصي",
    nameEn: "Personal Support",
    descriptionAr: "مساعدة شخصية متخصصة في المستشفيات والمدارس والمنازل والأماكن العامة",
    descriptionEn: "Professional personal assistance",
    options: [
      {
        id: 201,
        nameAr: "دعم في الأماكن العامة",
        nameEn: "Public Places Support",
        descriptionAr: "مساعد شخصي لمرافقتك في التسوق والأماكن العامة وتسهيل تنقلك",
        descriptionEn: "Personal assistant in public places",
        priceBase: 35
      },
      {
        id: 202,
        nameAr: "دعم في المنزل",
        nameEn: "Home Support",
        descriptionAr: "مساعد شخصي مدرب لتقديم الدعم والمساعدة داخل المنزل بكل راحة وأمان",
        descriptionEn: "Home personal support",
        priceBase: 50
      },
      {
        id: 203,
        nameAr: "دعم في المدرسة",
        nameEn: "School Support",
        descriptionAr: "مساعد شخصي مدرب لمرافقة الطالب داخل المدرسة وتقديم الدعم التعليمي والتنظيمي",
        descriptionEn: "School support assistant",
        priceBase: 55
      },
      {
        id: 204,
        nameAr: "دعم في المستشفى",
        nameEn: "Hospital Support",
        descriptionAr: "مساعد شخصي للمرافقة داخل المستشفى وتسهيل الإجراءات والتنقل بين الأقسام",
        descriptionEn: "Hospital assistance",
        priceBase: 60
      }
    ]
  },

  {
    id: 3,
    icon: "☕",
    nameAr: "الطلب السريع",
    nameEn: "Quick Orders",
    descriptionAr: "طلب سريع من المقاهي والمطاعم وخدمات متنوعة توصل إلى بابك",
    descriptionEn: "Fast delivery services",
    options: [
      {
        id: 301,
        nameAr: "خدمات سريعة",
        nameEn: "Quick Services",
        descriptionAr: "خدمات متنوعة مثل الصيدلية والبقالة والطلبات الخاصة مع توصيل سريع",
        descriptionEn: "Fast service requests",
        priceBase: 20
      },
      {
        id: 302,
        nameAr: "طلب من مطعم",
        nameEn: "Restaurant Order",
        descriptionAr: "اطلب وجبتك المفضلة من المطاعم المتاحة مع توصيل سريع وآمن",
        descriptionEn: "Restaurant delivery",
        priceBase: 25
      },
      {
        id: 303,
        nameAr: "طلب من مقهى",
        nameEn: "Cafe Order",
        descriptionAr: "اطلب مشروباتك ومخبوزاتك من أفضل المقاهي القريبة بكل سهولة",
        descriptionEn: "Cafe delivery",
        priceBase: 18
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
        descriptionAr: "خدمات صيانة شاملة للسباكة والكهرباء وأعمال النجارة البسيطة داخل المنزل",
        descriptionEn: "Home maintenance services",
        priceBase: 70
      },
      {
        id: 402,
        nameAr: "صيانة أجهزة",
        nameEn: "Device Maintenance",
        descriptionAr: "صيانة وإصلاح الأجهزة المنزلية والإلكترونيات والكراسي المتحركة باحترافية عالية",
        descriptionEn: "Device repair services",
        priceBase: 80
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