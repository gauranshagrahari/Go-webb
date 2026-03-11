// ========== GLOBAL VISITOR COUNTER using CountAPI ==========
async function updateVisitorCounter() {
  const counterElement = document.getElementById('counterValue');
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch('https://api.countapi.xyz/hit/gowebb/visitors', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    counterElement.innerText = data.value;
    console.log('Visitor count updated:', data.value);
  } catch (error) {
    console.error('Counter error:', error);
    counterElement.innerText = '—';
  }
}// ========== LANGUAGE TRANSLATIONS ==========
const translations = {
  en: {
    motto: "बढ़ाओ धंधा ऑनलाइन",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Projects",
    navContact: "Contact Us",
    langToggleText: "हिंदी में देखें",
    heroTitle: "Digital Solutions for <span>Indian Businesses</span>",
    heroSubhead: "Premium web & app development services tailored for the Indian market. Trusted by 100+ businesses across India, proudly based in Gorakhpur.",
    heroBtn: "Start Your Project <i class='fas fa-arrow-right' style='margin-left: 10px;'></i>",
    aboutTitle: "We are the <span style='color: var(--accent);'>GoWebb</span> Family",
    aboutDesc: "Building digital excellence with Indian values and global standards from Gorakhpur.",
    aboutStory: "Founded by <strong>Anurag Agrahari</strong> from Gorakhpur, GoWebb is a proud Indian family-run technology service dedicated to building high‑quality digital products. We blend modern design with robust engineering – every website and app we ship is fast, SEO‑optimized, and tailored to Indian client goals. Our team treats each project like our own business, ensuring transparent communication and on‑time delivery.",
    advantagesTitle: "Advantages of Having a Website",
    advantagesSubhead: "Why your business needs an online presence in today's digital world",
    adv1Title: "24/7 Global Presence",
    adv1Desc: "Your business never sleeps. A website works round the clock, reaching customers across India and beyond, even while you're closed.",
    adv2Title: "Increased Credibility",
    adv2Desc: "92% of Indian consumers trust businesses with professional websites. Build trust and stand out from competitors who aren't online.",
    adv3Title: "Targeted Marketing",
    adv3Desc: "Reach your ideal customers in Gorakhpur and beyond with SEO and digital marketing strategies that drive qualified leads.",
    adv4Title: "Cost-Effective",
    adv4Desc: "Compared to traditional advertising, a website offers unlimited reach at a fraction of the cost. Perfect for Indian small businesses.",
    adv5Title: "Customer Insights",
    adv5Desc: "Understand your audience better with analytics. See what products interest your customers and how they find your business.",
    adv6Title: "Mobile-First Reach",
    adv6Desc: "With 700+ million Indian mobile users, a mobile-friendly website ensures you're accessible to customers wherever they are.",
    servicesTitle: "Our Expertise",
    servicesSubhead: "Swipe or scroll to explore our services →",
    scrollHintText: "Scroll horizontally",
    service1Title: "Website Development",
    service1Desc: "Custom, responsive websites with Hindi/English support, UPI integration, and local payment gateways.",
    service2Title: "App Development",
    service2Desc: "iOS & Android apps with Indian language support, regional payment options, and local UX patterns.",
    service3Title: "E‑commerce",
    service3Desc: "Secure online stores with UPI, Razorpay, Paytm integration, and COD management.",
    service4Title: "Landing Pages",
    service4Desc: "High-converting pages optimized for Indian audiences and mobile-first browsing.",
    service5Title: "Maintenance",
    service5Desc: "24/7 support, security updates, and performance optimization for Indian hosting environments.",
    service6Title: "Local Business Solutions",
    service6Desc: "Specialized solutions for Indian local businesses, kirana stores, and regional enterprises.",
    projectsTitle: "Our Project Previews",
    projectsSubhead: "Swipe or scroll to see our work →",
    projectsScrollHint: "Scroll horizontally",
    project1Name: "Restaurant Website",
    project2Name: "Library Website",
    project3Name: "Girls Hostel Website",
    project4Name: "Iron Valley Gym",
    livePreview: "Live preview →",
    testimonialsTitle: "What Our Indian Clients Say",
    testimonialsSubhead: "Trusted by businesses across India, especially from Gorakhpur",
    testimonial1: '"GoWebb transformed our restaurant\'s online presence. Online orders increased by 60% in just 2 months!"',
    testimonial2: '"The school portal they built for us is fantastic. Parents love the real-time updates and attendance tracking."',
    testimonial3: '"Finally a tech partner who understands the Indian market. UPI integration was seamless!"',
    testimonial4: '"The real estate portal handles thousands of listings daily. Support team is always available."',
    client1: "Priya Sharma",
    client2: "Rajesh Kumar",
    client3: "Anita Singh",
    client4: "Vikram Singh",
    paymentTitle: "Pay for Your Project",
    paymentDesc: "Secure, fast, and encrypted payment for website development services",
    paymentBtn: "Pay Now <i class='fas fa-arrow-right'></i>",
    pricingTitle: "Simple Pricing in ₹",
    pricingSubhead: "Choose the plan that fits your budget",
    staticPlanTitle: "Static Plan",
    staticPlanDesc: "Perfect for small businesses & startups",
    staticFeature1: "5 Pages Website",
    staticFeature2: "Responsive Design",
    staticFeature3: "Contact Form",
    staticFeature4: "Basic SEO",
    staticKnowMore: "Know More <i class='fas fa-arrow-right' style='margin-left: 8px;'></i>",
    dynamicPlanTitle: "Dynamic Plan",
    dynamicPlanDesc: "Ideal for growing businesses",
    dynamicFeature1: "Unlimited Pages",
    dynamicFeature2: "Admin Dashboard",
    dynamicFeature3: "Database Integration",
    dynamicFeature4: "Advanced SEO",
    dynamicFeature5: "Payment Gateway",
    dynamicKnowMore: "Know More <i class='fas fa-arrow-right' style='margin-left: 8px;'></i>",
    faqTitle: "Frequently Asked Questions",
    faqSubhead: "Everything Indian businesses need to know",
    faq1Q: "Do you support UPI and Indian payment gateways?",
    faq1A: "Yes! We integrate all major Indian payment gateways including Razorpay, Paytm, PhonePe, Google Pay, and direct UPI.",
    faq2Q: "Can you build websites in Hindi or other Indian languages?",
    faq2A: "Absolutely. We support Hindi, Tamil, Telugu, Bengali, Marathi, and other major Indian languages for both websites and apps.",
    faq3Q: "Are you based in Gorakhpur? Can we meet in person?",
    faq3A: "Yes, we're proudly based in Gorakhpur at 640 Krishna Nagar, Basharatpur. We'd love to meet you in person to discuss your project over chai!",
    faq4Q: "Do you offer EMI or payment plans?",
    faq4A: "Yes, we offer flexible payment plans for Indian businesses. 50% upfront, 25% on milestone completion, and 25% on delivery.",
    faq5Q: "Is there ongoing support after launch?",
    faq5A: "Yes, we provide 3 months free support. Extended maintenance packages are available at affordable rates for Indian clients.",
    contactTitle: "Let's Build Your Digital Presence",
    contactSubhead: "We respond within 24 hours, 7 days a week | Gorakhpur based",
    sendEmailBtn: "Send Email <i class='fas fa-envelope' style='margin-left: 10px;'></i>",
    mapTitle: "Our Location",
    mapAddress: "26°46'28.8\"N 83°22'25.8\"E, Basharatpur, Gorakhpur",
    mapDetailTitle: "Exact Location",
    mapDetailAddress: "26°46'28.8\"N 83°22'25.8\"E<br>Basharatpur, Gorakhpur",
    mapHoursTitle: "Hours",
    mapHours: "Mon-Sat: 10am - 7pm<br>Sunday: Closed",
    mapFooter: "Click anywhere for directions",
    footerDesc: "Building digital excellence with Indian values since 2020. Trusted by 100+ Indian businesses from our base in Gorakhpur.",
    quickLinksTitle: "Quick Links",
    footerHome: "Home",
    footerAbout: "About",
    footerServices: "Services",
    footerProjects: "Projects",
    footerContact: "Contact",
    servicesTitleFooter: "Services",
    footerService1: "Web Development",
    footerService2: "App Development",
    footerService3: "E-commerce",
    footerService4: "Maintenance",
    footerService5: "Local Business Solutions",
    officeTitle: "Gorakhpur Office",
    officeAddress: "26°46'28.8\"N 83°22'25.8\"E, Basharatpur",
    copyright: "© 2025 GoWebb. All rights reserved. Made with ❤️ in Gorakhpur, India"
  },  hi: {
    motto: "बढ़ाओ धंधा ऑनलाइन",
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navServices: "सेवाएं",
    navProjects: "प्रोजेक्ट्स",
    navContact: "संपर्क करें",
    langToggleText: "View in English",
    heroTitle: "<span>भारतीय व्यवसायों</span> के लिए डिजिटल समाधान",
    heroSubhead: "भारतीय बाजार के अनुरूप प्रीमियम वेब और ऐप विकास सेवाएं। गोरखपुर में स्थित, पूरे भारत में 100+ व्यवसायों द्वारा विश्वसनीय।",
    heroBtn: "अपना प्रोजेक्ट शुरू करें <i class='fas fa-arrow-right' style='margin-left: 10px;'></i>",
    aboutTitle: "हम <span style='color: var(--accent);'>GoWebb</span> परिवार हैं",
    aboutDesc: "गोरखपुर से भारतीय मूल्यों और वैश्विक मानकों के साथ डिजिटल उत्कृष्टता का निर्माण।",
    aboutStory: "<strong>अनुराग अग्रहरि</strong> द्वारा गोरखपुर से स्थापित, GoWebb एक गर्वित भारतीय परिवार-संचालित प्रौद्योगिकी सेवा है जो उच्च गुणवत्ता वाले डिजिटल उत्पाद बनाने के लिए समर्पित है। हम आधुनिक डिजाइन को मजबूत इंजीनियरिंग के साथ मिश्रित करते हैं - हमारे द्वारा भेजी जाने वाली हर वेबसाइट और ऐप तेज, SEO-अनुकूलित और भारतीय ग्राहक लक्ष्यों के अनुरूप होती है। हमारी टीम हर प्रोजेक्ट को अपना व्यवसाय समझती है, जिससे पारदर्शी संचार और समय पर डिलीवरी सुनिश्चित होती है।",
    advantagesTitle: "वेबसाइट होने के फायदे",
    advantagesSubhead: "आज के डिजिटल विश्व में आपके व्यवसाय को ऑनलाइन उपस्थिति की आवश्यकता क्यों है",
    adv1Title: "24/7 वैश्विक उपस्थिति",
    adv1Desc: "आपका व्यवसाय कभी नहीं सोता। एक वेबसाइट चौबीसों घंटे काम करती है, बंद होने पर भी भारत और उसके बाहर ग्राहकों तक पहुंचती है।",
    adv2Title: "बढ़ी हुई विश्वसनीयता",
    adv2Desc: "92% भारतीय उपभोक्ता पेशेवर वेबसाइटों वाले व्यवसायों पर भरोसा करते हैं। विश्वास बनाएं और ऑनलाइन नहीं होने वाले प्रतिस्पर्धियों से अलग दिखें।",
    adv3Title: "लक्षित विपणन",
    adv3Desc: "SEO और डिजिटल मार्केटिंग रणनीतियों के साथ गोरखपुर और उसके आसपास अपने आदर्श ग्राहकों तक पहुंचें जो योग्य लीड्स उत्पन्न करती हैं।",
    adv4Title: "लागत प्रभावी",
    adv4Desc: "पारंपरिक विज्ञापन की तुलना में, एक वेबसाइट कम लागत पर असीमित पहुंच प्रदान करती है। भारतीय छोटे व्यवसायों के लिए एकदम सही।",
    adv5Title: "ग्राहक अंतर्दृष्टि",
    adv5Desc: "एनालिटिक्स के साथ अपने दर्शकों को बेहतर समझें। देखें कि आपके ग्राहकों की किन उत्पादों में रुचि है और वे आपका व्यवसाय कैसे ढूंढते हैं।",
    adv6Title: "मोबाइल-प्रथम पहुंच",
    adv6Desc: "700+ मिलियन भारतीय मोबाइल उपयोगकर्ताओं के साथ, एक मोबाइल-अनुकूल वेबसाइट सुनिश्चित करती है कि आप ग्राहकों के लिए सुलभ हैं चाहे वे कहीं भी हों।",
    servicesTitle: "हमारी विशेषज्ञता",
    servicesSubhead: "हमारी सेवाओं को देखने के लिए स्वाइप या स्क्रॉल करें →",
    scrollHintText: "क्षैतिज स्क्रॉल करें",
    service1Title: "वेबसाइट विकास",
    service1Desc: "हिंदी/अंग्रेजी समर्थन, UPI एकीकरण और स्थानीय भुगतान गेटवे के साथ कस्टम, उत्तरदायी वेबसाइटें।",
    service2Title: "ऐप विकास",
    service2Desc: "भारतीय भाषा समर्थन, क्षेत्रीय भुगतान विकल्प और स्थानीय UX पैटर्न के साथ iOS और Android ऐप्स।",
    service3Title: "ई-कॉमर्स",
    service3Desc: "UPI, Razorpay, Paytm एकीकरण और COD प्रबंधन के साथ सुरक्षित ऑनलाइन स्टोर।",
    service4Title: "लैंडिंग पेज",
    service4Desc: "भारतीय दर्शकों और मोबाइल-प्रथम ब्राउज़िंग के लिए अनुकूलित उच्च-रूपांतरण वाले पेज।",
    service5Title: "रखरखाव",
    service5Desc: "24/7 समर्थन, सुरक्षा अपडेट और भारतीय होस्टिंग वातावरण के लिए प्रदर्शन अनुकूलन।",
    service6Title: "स्थानीय व्यवसाय समाधान",
    service6Desc: "भारतीय स्थानीय व्यवसायों, किराना स्टोर और क्षेत्रीय उद्यमों के लिए विशेष समाधान।",
    projectsTitle: "हमारे प्रोजेक्ट पूर्वावलोकन",
    projectsSubhead: "हमारा काम देखने के लिए स्वाइप या स्क्रॉल करें →",
    projectsScrollHint: "क्षैतिज स्क्रॉल करें",
    project1Name: "रेस्टोरेंट वेबसाइट",
    project2Name: "लाइब्रेरी वेबसाइट",
    project3Name: "गर्ल्स हॉस्टल वेबसाइट",
    project4Name: "आयरन वैली जिम",
    livePreview: "लाइव पूर्वावलोकन →",
    testimonialsTitle: "हमारे भारतीय ग्राहक क्या कहते हैं",
    testimonialsSubhead: "पूरे भारत में व्यवसायों द्वारा विश्वसनीय, विशेष रूप से गोरखपुर से",
    testimonial1: '"GoWebb ने हमारे रेस्टोरेंट की ऑनलाइन उपस्थिति बदल दी। ऑनलाइन ऑर्डर में सिर्फ 2 महीनों में 60% की वृद्धि हुई!"',
    testimonial2: '"उन्होंने हमारे लिए जो स्कूल पोर्टल बनाया वह शानदार है। अभिभावकों को रीयल-टाइम अपडेट और उपस्थिति ट्रैकिंग पसंद है।"',
    testimonial3: '"आखिरकार एक तकनीकी साथी जो भारतीय बाजार को समझता है। UPI एकीकरण निर्बाध था!"',
    testimonial4: '"रियल एस्टेट पोर्टल प्रतिदिन हजारों लिस्टिंग संभालता है। सपोर्ट टीम हमेशा उपलब्ध है।"',
    client1: "प्रिया शर्मा",
    client2: "राजेश कुमार",
    client3: "अनीता सिंह",
    client4: "विक्रम सिंह",
    paymentTitle: "अपने प्रोजेक्ट के लिए भुगतान करें",
    paymentDesc: "वेबसाइट विकास सेवाओं के लिए सुरक्षित, तेज और एन्क्रिप्टेड भुगतान",
    paymentBtn: "अभी भुगतान करें <i class='fas fa-arrow-right'></i>",
    pricingTitle: "सरल मूल्य निर्धारण ₹ में",
    pricingSubhead: "अपने बजट के अनुकूल योजना चुनें",
    staticPlanTitle: "स्थैतिक योजना",
    staticPlanDesc: "छोटे व्यवसायों और स्टार्टअप के लिए एकदम सही",
    staticFeature1: "5 पेज वेबसाइट",
    staticFeature2: "उत्तरदायी डिजाइन",
    staticFeature3: "संपर्क फ़ॉर्म",
    staticFeature4: "बुनियादी SEO",
    staticKnowMore: "अधिक जानें <i class='fas fa-arrow-right' style='margin-left: 8px;'></i>",
    dynamicPlanTitle: "गतिशील योजना",
    dynamicPlanDesc: "बढ़ते व्यवसायों के लिए आदर्श",
    dynamicFeature1: "असीमित पेज",
    dynamicFeature2: "व्यवस्थापक डैशबोर्ड",
    dynamicFeature3: "डेटाबेस एकीकरण",
    dynamicFeature4: "उन्नत SEO",
    dynamicFeature5: "भुगतान गेटवे",
    dynamicKnowMore: "अधिक जानें <i class='fas fa-arrow-right' style='margin-left: 8px;'></i>",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSubhead: "भारतीय व्यवसायों को जो कुछ जानना चाहिए",
    faq1Q: "क्या आप UPI और भारतीय भुगतान गेटवे का समर्थन करते हैं?",
    faq1A: "हाँ! हम Razorpay, Paytm, PhonePe, Google Pay और डायरेक्ट UPI सहित सभी प्रमुख भारतीय भुगतान गेटवे को एकीकृत करते हैं।",
    faq2Q: "क्या आप हिंदी या अन्य भारतीय भाषाओं में वेबसाइट बना सकते हैं?",
    faq2A: "बिल्कुल। हम वेबसाइट और ऐप दोनों के लिए हिंदी, तमिल, तेलुगु, बंगाली, मराठी और अन्य प्रमुख भारतीय भाषाओं का समर्थन करते हैं।",
    faq3Q: "क्या आप गोरखपुर में हैं? क्या हम व्यक्तिगत रूप से मिल सकते हैं?",
    faq3A: "हाँ, हम गर्व से बशारतपुर, गोरखपुर में स्थित हैं। हम आपसे व्यक्तिगत रूप से मिलकर चाय के साथ आपके प्रोजेक्ट पर चर्चा करना पसंद करेंगे!",
    faq4Q: "क्या आप EMI या भुगतान योजना प्रदान करते हैं?",
    faq4A: "हाँ, हम भारतीय व्यवसायों के लिए लचीली भुगतान योजनाएं प्रदान करते हैं। 50% अग्रिम, 25% मील के पत्थर पूरा होने पर, और 25% डिलीवरी पर।",
    faq5Q: "लॉन्च के बाद क्या चल रहा समर्थन है?",
    faq5A: "हाँ, हम 3 महीने का मुफ्त समर्थन प्रदान करते हैं। विस्तारित रखरखाव पैकेज भारतीय ग्राहकों के लिए किफायती दरों पर उपलब्ध हैं।",
    contactTitle: "अपनी डिजिटल उपस्थिति बनाएं",
    contactSubhead: "हम 24 घंटे के भीतर जवाब देते हैं, सप्ताह के 7 दिन | गोरखपुर में स्थित",
    sendEmailBtn: "ईमेल भेजें <i class='fas fa-envelope' style='margin-left: 10px;'></i>",
    mapTitle: "हमारा स्थान",
    mapAddress: "26°46'28.8\"N 83°22'25.8\"E, बशारतपुर, गोरखपुर",
    mapDetailTitle: "सटीक स्थान",
    mapDetailAddress: "26°46'28.8\"N 83°22'25.8\"E<br>बशारतपुर, गोरखपुर",
    mapHoursTitle: "समय",
    mapHours: "सोम-शनि: सुबह 10 - शाम 7<br>रविवार: बंद",
    mapFooter: "दिशा-निर्देश के लिए कहीं भी क्लिक करें",
    footerDesc: "2020 से भारतीय मूल्यों के साथ डिजिटल उत्कृष्टता का निर्माण। गोरखपुर में हमारे आधार से 100+ भारतीय व्यवसायों द्वारा विश्वसनीय।",
    quickLinksTitle: "त्वरित लिंक",
    footerHome: "होम",
    footerAbout: "हमारे बारे में",
    footerServices: "सेवाएं",
    footerProjects: "प्रोजेक्ट्स",
    footerContact: "संपर्क",
    servicesTitleFooter: "सेवाएं",
    footerService1: "वेब विकास",
    footerService2: "ऐप विकास",
    footerService3: "ई-कॉमर्स",
    footerService4: "रखरखाव",
    footerService5: "स्थानीय व्यवसाय समाधान",
    officeTitle: "गोरखपुर कार्यालय",
    officeAddress: "26°46'28.8\"N 83°22'25.8\"E, बशारतपुर",
    copyright: "© 2025 GoWebb। सर्वाधिकार सुरक्षित। गोरखपुर, भारत में ❤️ से निर्मित"
  }
};

let currentLang = 'en';function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  updateContent(currentLang);
  
  // Add animation feedback
  const btn = document.getElementById('langToggle');
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    btn.style.transform = 'scale(1)';
  }, 200);
}

function updateContent(lang) {
  const t = translations[lang];
  
  // Update all elements with IDs
  document.getElementById('mottoHeader').innerText = t.motto;
  document.getElementById('navHome').innerText = t.navHome;
  document.getElementById('navAbout').innerText = t.navAbout;
  document.getElementById('navServices').innerText = t.navServices;
  document.getElementById('navProjects').innerText = t.navProjects;
  document.getElementById('navContact').innerText = t.navContact;
  document.getElementById('langToggleText').innerText = t.langToggleText;
  document.getElementById('heroTitle').innerHTML = t.heroTitle;
  document.getElementById('heroSubhead').innerText = t.heroSubhead;
  document.getElementById('heroBtn').innerHTML = t.heroBtn;
  document.getElementById('aboutTitle').innerHTML = t.aboutTitle;
  document.getElementById('aboutDesc').innerText = t.aboutDesc;
  document.getElementById('aboutStory').innerHTML = t.aboutStory;
  document.getElementById('advantagesTitle').innerText = t.advantagesTitle;
  document.getElementById('advantagesSubhead').innerText = t.advantagesSubhead;
  document.getElementById('adv1Title').innerText = t.adv1Title;
  document.getElementById('adv1Desc').innerText = t.adv1Desc;
  document.getElementById('adv2Title').innerText = t.adv2Title;
  document.getElementById('adv2Desc').innerText = t.adv2Desc;
  document.getElementById('adv3Title').innerText = t.adv3Title;
  document.getElementById('adv3Desc').innerText = t.adv3Desc;
  document.getElementById('adv4Title').innerText = t.adv4Title;
  document.getElementById('adv4Desc').innerText = t.adv4Desc;
  document.getElementById('adv5Title').innerText = t.adv5Title;
  document.getElementById('adv5Desc').innerText = t.adv5Desc;
  document.getElementById('adv6Title').innerText = t.adv6Title;
  document.getElementById('adv6Desc').innerText = t.adv6Desc;
  document.getElementById('servicesTitle').innerText = t.servicesTitle;
  document.getElementById('servicesSubhead').innerText = t.servicesSubhead;
  document.getElementById('scrollHintText').innerText = t.scrollHintText;
  document.getElementById('service1Title').innerText = t.service1Title;
  document.getElementById('service1Desc').innerText = t.service1Desc;
  document.getElementById('service2Title').innerText = t.service2Title;
  document.getElementById('service2Desc').innerText = t.service2Desc;
  document.getElementById('service3Title').innerText = t.service3Title;
  document.getElementById('service3Desc').innerText = t.service3Desc;
  document.getElementById('service4Title').innerText = t.service4Title;
  document.getElementById('service4Desc').innerText = t.service4Desc;
  document.getElementById('service5Title').innerText = t.service5Title;
  document.getElementById('service5Desc').innerText = t.service5Desc;
  document.getElementById('service6Title').innerText = t.service6Title;
  document.getElementById('service6Desc').innerText = t.service6Desc;
  document.getElementById('projectsTitle').innerText = t.projectsTitle;
  document.getElementById('projectsSubhead').innerText = t.projectsSubhead;
  document.getElementById('projectsScrollHint').innerText = t.projectsScrollHint;
  document.getElementById('project1Name').innerText = t.project1Name;
  document.getElementById('project2Name').innerText = t.project2Name;
  document.getElementById('project3Name').innerText = t.project3Name;
  document.getElementById('project4Name').innerText = t.project4Name;
  document.getElementById('livePreview').innerText = t.livePreview;
  document.getElementById('livePreview2').innerText = t.livePreview;
  document.getElementById('livePreview3').innerText = t.livePreview;
  document.getElementById('livePreview4').innerText = t.livePreview;
  document.getElementById('testimonialsTitle').innerText = t.testimonialsTitle;
  document.getElementById('testimonialsSubhead').innerText = t.testimonialsSubhead;
  document.getElementById('testimonial1').innerText = t.testimonial1;
  document.getElementById('testimonial2').innerText = t.testimonial2;
  document.getElementById('testimonial3').innerText = t.testimonial3;
  document.getElementById('testimonial4').innerText = t.testimonial4;
  document.getElementById('client1').innerText = t.client1;
  document.getElementById('client2').innerText = t.client2;
  document.getElementById('client3').innerText = t.client3;
  document.getElementById('client4').innerText = t.client4;
  document.getElementById('paymentTitle').innerText = t.paymentTitle;
  document.getElementById('paymentDesc').innerText = t.paymentDesc;
  document.getElementById('paymentBtn').innerHTML = t.paymentBtn;
  document.getElementById('pricingTitle').innerText = t.pricingTitle;
  document.getElementById('pricingSubhead').innerText = t.pricingSubhead;
  document.getElementById('staticPlanTitle').innerText = t.staticPlanTitle;
  document.getElementById('staticPlanDesc').innerText = t.staticPlanDesc;
  document.getElementById('staticFeature1').innerText = t.staticFeature1;
  document.getElementById('staticFeature2').innerText = t.staticFeature2;
  document.getElementById('staticFeature3').innerText = t.staticFeature3;
  document.getElementById('staticFeature4').innerText = t.staticFeature4;
  document.getElementById('staticKnowMore').innerHTML = t.staticKnowMore;
  document.getElementById('dynamicPlanTitle').innerText = t.dynamicPlanTitle;
  document.getElementById('dynamicPlanDesc').innerText = t.dynamicPlanDesc;
  document.getElementById('dynamicFeature1').innerText = t.dynamicFeature1;
  document.getElementById('dynamicFeature2').innerText = t.dynamicFeature2;
  document.getElementById('dynamicFeature3').innerText = t.dynamicFeature3;
  document.getElementById('dynamicFeature4').innerText = t.dynamicFeature4;
  document.getElementById('dynamicFeature5').innerText = t.dynamicFeature5;
  document.getElementById('dynamicKnowMore').innerHTML = t.dynamicKnowMore;
  document.getElementById('faqTitle').innerText = t.faqTitle;
  document.getElementById('faqSubhead').innerText = t.faqSubhead;
  document.getElementById('faq1Q').innerText = t.faq1Q;
  document.getElementById('faq1A').innerText = t.faq1A;
  document.getElementById('faq2Q').innerText = t.faq2Q;
  document.getElementById('faq2A').innerText = t.faq2A;
  document.getElementById('faq3Q').innerText = t.faq3Q;
  document.getElementById('faq3A').innerText = t.faq3A;
  document.getElementById('faq4Q').innerText = t.faq4Q;
  document.getElementById('faq4A').innerText = t.faq4A;
  document.getElementById('faq5Q').innerText = t.faq5Q;
  document.getElementById('faq5A').innerText = t.faq5A;
  document.getElementById('contactTitle').innerText = t.contactTitle;
  document.getElementById('contactSubhead').innerText = t.contactSubhead;
  document.getElementById('sendEmailBtn').innerHTML = t.sendEmailBtn;
  document.getElementById('mapTitle').innerText = t.mapTitle;
  document.getElementById('mapAddress').innerText = t.mapAddress;
  document.getElementById('mapDetailTitle').innerText = t.mapDetailTitle;
  document.getElementById('mapDetailAddress').innerHTML = t.mapDetailAddress;
  document.getElementById('mapHoursTitle').innerText = t.mapHoursTitle;
  document.getElementById('mapHours').innerHTML = t.mapHours;
  document.getElementById('mapFooter').innerHTML = t.mapFooter;
  document.getElementById('footerDesc').innerText = t.footerDesc;
  document.getElementById('quickLinksTitle').innerText = t.quickLinksTitle;
  document.getElementById('footerHome').innerText = t.footerHome;
  document.getElementById('footerAbout').innerText = t.footerAbout;
  document.getElementById('footerServices').innerText = t.footerServices;
  document.getElementById('footerProjects').innerText = t.footerProjects;
  document.getElementById('footerContact').innerText = t.footerContact;
  document.getElementById('servicesTitleFooter').innerText = t.servicesTitleFooter;
  document.getElementById('footerService1').innerText = t.footerService1;
  document.getElementById('footerService2').innerText = t.footerService2;
  document.getElementById('footerService3').innerText = t.footerService3;
  document.getElementById('footerService4').innerText = t.footerService4;
  document.getElementById('footerService5').innerText = t.footerService5;
  document.getElementById('officeTitle').innerText = t.officeTitle;
  document.getElementById('officeAddress').innerText = t.officeAddress;
  document.getElementById('copyright').innerHTML = t.copyright;
  
  // Update WhatsApp button text
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.innerHTML = lang === 'en' ? 
      'WhatsApp <i class="fab fa-whatsapp" style="margin-left: 10px;"></i>' : 
      'व्हाट्सएप <i class="fab fa-whatsapp" style="margin-left: 10px;"></i>';
  }
}

// Event listener for language toggle
document.getElementById('langToggle').addEventListener('click', toggleLanguage);// Scroll reveal and other functionality
document.addEventListener('DOMContentLoaded', function() {
  function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  }
  window.addEventListener('scroll', reveal);
  reveal();

  // FAQ Accordion
  var faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      var item = this.parentElement;
      item.classList.toggle('active');
    });
  });

  // Smooth scroll for buttons
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'white';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      }
    });
  }

  // Email Form
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const project = document.getElementById('project').value;
      const message = document.getElementById('message').value;
      const subject = encodeURIComponent('New Project Inquiry from ' + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject Type: ${project}\n\nMessage:\n${message}`);
      window.location.href = `mailto:gowebbindia@gmail.com?subject=${subject}&body=${body}`;
      successMessage.classList.add('show');
      contactForm.reset();
      setTimeout(() => successMessage.classList.remove('show'), 5000);
    });
  }

  // WhatsApp Button
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
      const name = document.getElementById('name').value || 'Not provided';
      const email = document.getElementById('email').value || 'Not provided';
      const project = document.getElementById('project').value || 'Not provided';
      const message = document.getElementById('message').value || 'Not provided';
      const whatsappMessage = `*New Project Inquiry from GoWebb Website - Gorakhpur*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Project Type:* ${project}%0A*Message:* ${message}`;
      window.open(`https://wa.me/919369344744?text=${whatsappMessage}`, '_blank');
    });
  }

  // Initialize global visitor counter
  updateVisitorCounter();
});// ========== ENHANCED KNOW MORE PAGES ==========
function showPlanDetails(planType) {
  let planDetails = '';
  if (planType === 'static') {
    planDetails = `
      <html>
      <head>
        <title>GoWebb - Static Plan Details</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #2D2F7E 0%, #1a1b4e 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .card {
            max-width: 900px;
            width: 100%;
            background: white;
            border-radius: 40px;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(0,0,0,0.3);
            animation: fadeInUp 0.6s ease;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .header {
            background: linear-gradient(135deg, #FF9933, #138808);
            padding: 40px;
            text-align: center;
            color: white;
          }
          .header h1 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .header .price-tag {
            font-size: 3rem;
            font-weight: 800;
            background: rgba(255,255,255,0.2);
            display: inline-block;
            padding: 10px 40px;
            border-radius: 60px;
            margin-top: 15px;
          }
          .content {
            padding: 50px;
          }
          .section-title {
            color: #2D2F7E;
            font-size: 1.8rem;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
          }
          .section-title i {
            color: #FF9933;
            font-size: 2rem;
          }
          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 40px;
          }
          .feature-item {
            background: #FFF4E6;
            padding: 20px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            transition: 0.3s;
          }
          .feature-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(255,153,51,0.2);
          }
          .feature-item i {
            font-size: 2rem;
            color: #138808;
            min-width: 40px;
          }
          .feature-item p {
            font-size: 1.1rem;
            font-weight: 500;
            color: #2D2F7E;
          }
          .perfect-for {
            background: #2D2F7E;
            color: white;
            padding: 30px;
            border-radius: 30px;
            margin: 40px 0;
            text-align: center;
          }
          .perfect-for h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
            color: #FF9933;
          }
          .perfect-for p {
            font-size: 1.2rem;
            line-height: 1.6;
          }
          .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-top: 40px;
          }
          .btn {
            padding: 16px 40px;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: 0.3s;
            border: none;
            cursor: pointer;
            font-size: 1.1rem;
            display: inline-flex;
            align-items: center;
            gap: 10px;
          }
          .btn-primary {
            background: #FF9933;
            color: #2D2F7E;
            box-shadow: 0 10px 20px rgba(255,153,51,0.3);
          }
          .btn-primary:hover {
            background: #138808;
            color: white;
            transform: translateY(-3px);
          }
          .btn-outline {
            border: 2px solid #2D2F7E;
            color: #2D2F7E;
            background: transparent;
          }
          .btn-outline:hover {
            background: #2D2F7E;
            color: white;
          }
          .close-btn {
            text-align: center;
            margin-top: 30px;
          }
          .close-btn button {
            background: none;
            border: none;
            color: #666;
            font-size: 1rem;
            cursor: pointer;
            text-decoration: underline;
          }
          @media (max-width: 768px) {
            .features-grid { grid-template-columns: 1fr; }
            .header h1 { font-size: 2rem; }
            .content { padding: 30px; }
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>Static Plan</h1>
            <div class="price-tag">₹2,999</div>
            <p style="margin-top: 15px; font-size: 1.2rem;">Complete Website Package</p>
          </div>
          <div class="content">
            <div class="section-title">
              <i class="fas fa-crown"></i>
              <span>What's Included</span>
            </div>
            <div class="features-grid">
              <div class="feature-item"><i class="fas fa-file-alt"></i><p>5 Pages Professional Website</p></div>
              <div class="feature-item"><i class="fas fa-mobile-alt"></i><p>Fully Responsive Design</p></div>
              <div class="feature-item"><i class="fas fa-envelope"></i><p>Contact Form with Email</p></div>
              <div class="feature-item"><i class="fas fa-chart-line"></i><p>Basic SEO Setup</p></div>
              <div class="feature-item"><i class="fas fa-share-alt"></i><p>Social Media Integration</p></div>
              <div class="feature-item"><i class="fas fa-map-marked-alt"></i><p>Google Maps Integration</p></div>
              <div class="feature-item"><i class="fas fa-globe"></i><p>1 Year Domain Registration</p></div>
              <div class="feature-item"><i class="fas fa-server"></i><p>1 Year Hosting</p></div>
              <div class="feature-item"><i class="fas fa-headset"></i><p>3 Months Free Support</p></div>
            </div>
            <div class="perfect-for">
              <h3>✨ Perfect For</h3>
              <p>Small businesses, startups, local shops, restaurants, and professionals just starting their online journey.</p>
            </div>
            <div class="cta-buttons">
              <a href="#" onclick="window.opener.location.href='#contact'; window.close();" class="btn btn-primary"><i class="fas fa-phone-alt"></i> Contact Us</a>
              <a href="#" onclick="window.close();" class="btn btn-outline"><i class="fas fa-times"></i> Close</a>
            </div>
            <div class="close-btn">
              <button onclick="window.close()">Close this window</button>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  } else {    planDetails = `
      <html>
      <head>
        <title>GoWebb - Dynamic Plan Details</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #2D2F7E 0%, #1a1b4e 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .card {
            max-width: 900px;
            width: 100%;
            background: white;
            border-radius: 40px;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(0,0,0,0.3);
            animation: fadeInUp 0.6s ease;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .header {
            background: linear-gradient(135deg, #FF9933, #138808);
            padding: 40px;
            text-align: center;
            color: white;
          }
          .header h1 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .header .price-tag {
            font-size: 3rem;
            font-weight: 800;
            background: rgba(255,255,255,0.2);
            display: inline-block;
            padding: 10px 40px;
            border-radius: 60px;
            margin-top: 15px;
          }
          .content {
            padding: 50px;
          }
          .section-title {
            color: #2D2F7E;
            font-size: 1.8rem;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
          }
          .section-title i {
            color: #FF9933;
            font-size: 2rem;
          }
          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 40px;
          }
          .feature-item {
            background: #FFF4E6;
            padding: 20px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            transition: 0.3s;
          }
          .feature-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(255,153,51,0.2);
          }
          .feature-item i {
            font-size: 2rem;
            color: #138808;
            min-width: 40px;
          }
          .feature-item p {
            font-size: 1.1rem;
            font-weight: 500;
            color: #2D2F7E;
          }
          .perfect-for {
            background: #2D2F7E;
            color: white;
            padding: 30px;
            border-radius: 30px;
            margin: 40px 0;
            text-align: center;
          }
          .perfect-for h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
            color: #FF9933;
          }
          .perfect-for p {
            font-size: 1.2rem;
            line-height: 1.6;
          }
          .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-top: 40px;
          }
          .btn {
            padding: 16px 40px;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: 0.3s;
            border: none;
            cursor: pointer;
            font-size: 1.1rem;
            display: inline-flex;
            align-items: center;
            gap: 10px;
          }
          .btn-primary {
            background: #FF9933;
            color: #2D2F7E;
            box-shadow: 0 10px 20px rgba(255,153,51,0.3);
          }
          .btn-primary:hover {
            background: #138808;
            color: white;
            transform: translateY(-3px);
          }
          .btn-outline {
            border: 2px solid #2D2F7E;
            color: #2D2F7E;
            background: transparent;
          }
          .btn-outline:hover {
            background: #2D2F7E;
            color: white;
          }
          .close-btn {
            text-align: center;
            margin-top: 30px;
          }
          .close-btn button {
            background: none;
            border: none;
            color: #666;
            font-size: 1rem;
            cursor: pointer;
            text-decoration: underline;
          }
          @media (max-width: 768px) {
            .features-grid { grid-template-columns: 1fr; }
            .header h1 { font-size: 2rem; }
            .content { padding: 30px; }
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>Dynamic Plan</h1>
            <div class="price-tag">₹4,999</div>
            <p style="margin-top: 15px; font-size: 1.2rem;">Advanced Website Package</p>
          </div>
          <div class="content">
            <div class="section-title">
              <i class="fas fa-rocket"></i>
              <span>What's Included</span>
            </div>
            <div class="features-grid">
              <div class="feature-item"><i class="fas fa-infinity"></i><p>Unlimited Pages</p></div>
              <div class="feature-item"><i class="fas fa-tachometer-alt"></i><p>Custom Admin Dashboard</p></div>
              <div class="feature-item"><i class="fas fa-database"></i><p>Database Integration</p></div>
              <div class="feature-item"><i class="fas fa-credit-card"></i><p>Payment Gateway Integration</p></div>
              <div class="feature-item"><i class="fas fa-chart-pie"></i><p>Advanced SEO Optimization</p></div>
              <div class="feature-item"><i class="fas fa-newspaper"></i><p>Blog/News Section</p></div>
              <div class="feature-item"><i class="fas fa-user-lock"></i><p>User Registration/Login</p></div>
              <div class="feature-item"><i class="fas fa-mail-bulk"></i><p>Email Marketing Integration</p></div>
              <div class="feature-item"><i class="fas fa-chart-bar"></i><p>Analytics Dashboard</p></div>
              <div class="feature-item"><i class="fas fa-globe"></i><p>1 Year Domain + Hosting</p></div>
              <div class="feature-item"><i class="fas fa-headset"></i><p>6 Months Free Support</p></div>
            </div>
            <div class="perfect-for">
              <h3>✨ Perfect For</h3>
              <p>Growing businesses, e-commerce stores, educational institutions, and businesses needing database functionality.</p>
            </div>
            <div class="cta-buttons">
              <a href="#" onclick="window.opener.location.href='#contact'; window.close();" class="btn btn-primary"><i class="fas fa-phone-alt"></i> Contact Us</a>
              <a href="#" onclick="window.close();" class="btn btn-outline"><i class="fas fa-times"></i> Close</a>
            </div>
            <div class="close-btn">
              <button onclick="window.close()">Close this window</button>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }
  const newWindow = window.open('', '_blank', 'width=900,height=700');
  newWindow.document.write(planDetails);
    }
