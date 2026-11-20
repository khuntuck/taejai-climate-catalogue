import { Category } from '@/types/catalogue';

export const UI_LABELS = {
  en: {
    siteTitle: 'TAEJAI CLIMATE RESILIENCE 2026–27',
    heroBadge: 'POSTCARD FROM THE FUTURE',
    heroTitle: 'SUPER EL NIÑO 2026–27',
    heroSubtitle: 'CLIMATE RESILIENCE CATALOGUE',
    heroTagline:
      "Explore how Super El Niño could impact Thailand's people, communities, agriculture, public health and economy — and support frontline projects building resilience.",
    pillars: {
      heat: 'EXTREME HEAT',
      drought: 'DROUGHT',
      pm25: 'PM2.5',
    },
    filterAll: 'All (6)',
    comingSoonBadge: 'Coming Soon',
    comingSoonText: 'Curating high-impact projects for this theme — Launching soon.',
    readMore: 'Read more →',
    donate: 'Donate',
    modalOverview: 'Project Overview',
    modalElNino: 'Super El Niño Relevance',
    modalDonate: 'Donate on Taejai.com',
    modalClose: 'Close',
    footerNote: 'A collaborative initiative for Thailand’s climate resilience.',
  },
  th: {
    siteTitle: 'TAEJAI CLIMATE RESILIENCE 2026–27',
    heroBadge: 'POSTCARD FROM THE FUTURE',
    heroTitle: 'SUPER EL NIÑO 2026–27',
    heroSubtitle: 'แค็ตตาล็อกโครงการสร้างภูมิคุ้มกันรับมือวิกฤตสภาพภูมิอากาศ',
    heroTagline:
      'ร่วมสำรวจผลกระทบของซูเปอร์เอลนีโญต่อผู้คน ชุมชน เกษตรกรรม สาธารณสุข และเศรษฐกิจไทย พร้อมร่วมสนับสนุนโครงการแนวหน้าที่กำลังลงมือสร้างภูมิคุ้มกันเพื่ออนาคต',
    pillars: {
      heat: 'ความร้อนสุดขั้ว',
      drought: 'ภัยแล้ง',
      pm25: 'ฝุ่นควัน PM2.5',
    },
    filterAll: 'ทั้งหมด (6)',
    comingSoonBadge: 'เร็วๆ นี้ (Coming Soon)',
    comingSoonText: 'อยู่ระหว่างคัดเลือกโครงการคุณภาพในประเด็นนี้ — เปิดระดมทุนเร็วๆ นี้',
    readMore: 'อ่านเพิ่มเติม →',
    donate: 'บริจาค',
    modalOverview: 'รายละเอียดโครงการ',
    modalElNino: 'ความเชื่อมโยงกับ Super El Niño',
    modalDonate: 'บริจาคโครงการนี้บน Taejai.com',
    modalClose: 'ปิดหน้าต่าง',
    footerNote: 'ความร่วมมือเพื่อสร้างภูมิคุ้มกันรับมือวิกฤตการเปลี่ยนแปลงสภาพภูมิอากาศของประเทศไทย',
  },
};

export const CATALOGUE_CATEGORIES: Category[] = [
  {
    id: 'extreme-heat',
    number: '01',
    shortLabel: { en: '01 Heat & Health', th: '01 ความร้อนและสุขภาพ' },
    title: {
      en: '01 Extreme Heat & Public Health',
      th: '01 ความร้อนสุดขั้วและสาธารณสุข',
    },
    description: {
      en: 'Protect outdoor workers, older people, children, and medically vulnerable populations from heat stress, heatstroke, and climate-sensitive health risks.',
      th: 'ปกป้องแรงงานกลางแจ้ง ผู้สูงอายุ เด็ก และกลุ่มเปราะบางทางการแพทย์จากภาวะเครียดจากความร้อน โรคลมแดด และความเสี่ยงทางสุขภาพที่ไวต่อสภาพภูมิอากาศ',
    },
    status: 'coming_soon',
    projects: [],
  },
  {
    id: 'water-security',
    number: '02',
    shortLabel: { en: '02 Water & Drought', th: '02 ความมั่นคงทางน้ำ' },
    title: {
      en: '02 Water Security & Drought Resilience',
      th: '02 ความมั่นคงทางน้ำและการรับมือภัยแล้ง',
    },
    description: {
      en: 'Improve access to safe water, community water management, and preparedness for prolonged dry periods.',
      th: 'ยกระดับการเข้าถึงน้ำสะอาด การบริหารจัดการน้ำโดยชุมชน และการเตรียมความพร้อมเพื่อรับมือช่วงฤดูแล้งที่ยาวนาน',
    },
    status: 'active',
    projects: [
      {
        id: 'clean-water-for-kids',
        title: {
          en: 'Clean Water for Kids — Safe Drinking Water for Remote Schools',
          th: 'Clean Water for Kids — น้ำดื่มสะอาดเพื่อโรงเรียนในพื้นที่ห่างไกล',
        },
        organization: {
          en: 'Foundation for Child Development',
          th: 'มูลนิธิเพื่อการพัฒนาเด็ก (มพด.)',
        },
        location: {
          en: 'Mae Hong Son',
          th: 'จ.แม่ฮ่องสอน',
        },
        shortDescription: {
          en: 'Provides safe drinking water to ~1,500 children, teachers, and community members across 10 remote schools in Mae Hong Son via water filtration systems and storage tanks.',
          th: 'จัดหาน้ำดื่มสะอาดให้เด็ก ครู และคนในชุมชนกว่า 1,500 คน ใน 10 โรงเรียนห่างไกล จ.แม่ฮ่องสอน ผ่านการติดตั้งระบบกรองน้ำและถังเก็บน้ำสำรอง',
        },
        fullDescription: {
          en: 'This project aims to provide safe drinking water to approximately 1,500 children, teachers, and community members across ten remote schools in Mae Hong Son. By installing water filtration systems and storage tanks, it addresses inadequate access to clean water in mountainous communities that depend heavily on seasonal rainfall and local water sources.',
          th: 'โครงการนี้มุ่งมั่นจัดหาน้ำดื่มที่สะอาดและปลอดภัยให้แก่เด็กนักเรียน ครู และสมาชิกในชุมชนประมาณ 1,500 คน ครอบคลุมโรงเรียนในพื้นที่ห่างไกล 10 แห่งในจังหวัดแม่ฮ่องสอน ด้วยการติดตั้งระบบกรองน้ำและถังเก็บน้ำ เพื่อแก้ไขปัญหาการขาดแคลนน้ำสะอาดในชุมชนบนพื้นที่สูงที่ต้องพึ่งพาน้ำฝนตามฤดูกาลและแหล่งน้ำธรรมชาติเป็นหลัก',
        },
        elNinoRelevance: {
          en: "Prolonged dry periods could reduce water availability in remote communities, increasing the risk of water insecurity and unsafe drinking water. Improving water storage and treatment capacity helps schools and surrounding communities maintain access to safe drinking water during periods of drought. The project's contribution to drought resilience depends on the reliability of its water sources and the adequacy of storage capacity.",
          th: 'ช่วงฤดูแล้งที่ยาวนานขึ้นอาจทำให้ปริมาณน้ำในพื้นที่ห่างไกลลดลง เพิ่มความเสี่ยงต่อภาวะขาดแคลนน้ำและน้ำดื่มที่ไม่ปลอดภัย การเพิ่มความจุในการกักเก็บและระบบบำบัดน้ำช่วยให้โรงเรียนและชุมชนโดยรอบยังคงเข้าถึงน้ำดื่มสะอาดได้ในช่วงภัยแล้ง ทั้งนี้ ประสิทธิภาพในการรับมือภัยแล้งขึ้นอยู่กับความเสถียรของแหล่งน้ำต้นทุนและความเพียงพอของระบบกักเก็บ',
        },
        // แทนที่ด้วยรูปจริงใน /public/images/projects/clean-water-kids.jpg
        imageUrl: '/images/projects/clean-water-kids.jpg',
        // แทนที่ด้วยลิงก์โครงการจริงบน taejai.com
        taejaiUrl: 'https://taejai.com/th/project/chd-cleanwater-forkids',
      },
    ],
  },
  {
    id: 'wildfire-prevention',
    number: '03',
    shortLabel: { en: '03 Wildfire & Air', th: '03 ไฟป่าและอากาศสะอาด' },
    title: {
      en: '03 Wildfire Prevention & Clean Air',
      th: '03 การป้องกันไฟป่าและอากาศสะอาด',
    },
    description: {
      en: 'Reduce burning risks, strengthen community fire management, and protect people from PM2.5 exposure.',
      th: 'ลดความเสี่ยงจากการเผา เสริมความเข้มแข็งการจัดการไฟป่าโดยชุมชน และปกป้องประชาชนจากฝุ่นควัน PM2.5',
    },
    status: 'active',
    projects: [
      {
        id: 'forest-guardians',
        title: {
          en: 'Forest Guardians',
          th: 'Forest Guardians — เครือข่ายชุมชนพิทักษ์ป่าต้นน้ำ',
        },
        organization: {
          en: 'ChangeFusion',
          th: 'ChangeFusion (สถาบันเชนจ์ฟิวชั่น)',
        },
        location: {
          en: 'Chiang Mai, Nan, Saraburi',
          th: 'เชียงใหม่, น่าน, สระบุรี',
        },
        shortDescription: {
          en: 'Supports communities near upstream forests to monitor, protect, and restore ecosystems using a Payment for Ecosystem Services (PES) approach while reducing burning.',
          th: 'สนับสนุนชุมชนรอบป่าต้นน้ำในการเฝ้าระวัง ปกป้อง และฟื้นฟูระบบนิเวศด้วยกลไกตอบแทนคุณระบบนิเวศ (PES) พร้อมพัฒนาอาชีพที่ลดการพึ่งพาการเผา',
        },
        fullDescription: {
          en: 'Forest Guardians supports communities living near upstream forests to monitor, protect, and restore ecosystems that benefit downstream populations. It uses a Payment for Ecosystem Services approach, rewarding community stewardship while monitoring fire damage, forest cover, vegetation health, and biodiversity. The project also addresses land-use conflicts and develops sustainable livelihoods that reduce dependence on activities associated with burning.',
          th: 'Forest Guardians สนับสนุนชุมชนที่อาศัยอยู่ใกล้ป่าต้นน้ำในการเฝ้าระวัง ปกป้อง และฟื้นฟูระบบนิเวศที่ส่งผลดีต่อผู้คนปลายน้ำ โดยใช้แนวทาง Payment for Ecosystem Services (PES) เพื่อสร้างแรงจูงใจให้ชุมชนดูแลป่า ควบคู่กับการติดตามความเสียหายจากไฟป่า พื้นที่สีเขียว สุขภาพพืชพรรณ และความหลากหลายทางชีวภาพ รวมถึงแก้ไขความขัดแย้งการใช้ที่ดินและพัฒนาอาชีพยั่งยืนที่ลดการพึ่งพาการเผา',
        },
        elNinoRelevance: {
          en: 'Hotter and drier conditions associated with El Niño can increase vegetation dryness and the risk of wildfires. By strengthening community-based forest management, early detection, and fire prevention, Forest Guardians helps reduce potential wildfire damage and smoke pollution while protecting watersheds. Its integrated approach also supports the long-term resilience of forest-dependent communities.',
          th: 'สภาพอากาศที่ร้อนและแห้งแล้งขึ้นจากเอลนีโญทำให้พืชพรรณแห้งกรอบและเพิ่มความเสี่ยงต่อการเกิดไฟป่า การเสริมสร้างการจัดการป่าโดยชุมชน การตรวจจับไฟแต่เนิ่นๆ และการป้องกันไฟป่า ช่วยลดความเสียหายจากไฟป่าและมลพิษทางอากาศ พร้อมปกป้องพื้นที่ต้นน้ำและสร้างภูมิคุ้มกันระยะยาวให้แก่ชุมชนพึ่งพิงป่า',
        },
        imageUrl: '/images/projects/forestguardians.png',
        taejaiUrl: 'https://taejai.com/th/project/env-forestguardians',
      },
      {
        id: 'wildfire-volunteer-insurance',
        title: {
          en: 'Wildfire Volunteer Insurance',
          th: 'Wildfire Volunteer Insurance — ประกันภัยเพื่ออาสาสมัครดับไฟป่า',
        },
        organization: {
          en: 'Bangkok Breath Council',
          th: 'สภาลมหายใจกรุงเทพฯ',
        },
        location: {
          en: 'Nationwide',
          th: 'ทั่วประเทศ',
        },
        shortDescription: {
          en: 'Provides life and accident insurance for ~20,000 volunteer forest guardians and firefighters at THB 30 per volunteer, protecting frontline responders and their families.',
          th: 'จัดทำประกันชีวิตและอุบัติเหตุให้อาสาสมัครพิทักษ์ป่าและดับไฟป่าประมาณ 20,000 คน (เฉลี่ยคนละ 30 บาท) เพื่อคุ้มครองแนวหน้าและครอบครัว',
        },
        fullDescription: {
          en: "This project provides life and accident insurance for approximately 20,000 volunteer forest guardians and firefighters working alongside Thailand's Department of National Parks, Wildlife and Plant Conservation. At an estimated cost of THB 30 per volunteer, the insurance offers financial protection against accidents, disability, and death resulting from hazardous firefighting duties.",
          th: 'โครงการนี้จัดหาประกันชีวิตและอุบัติเหตุให้แก่อาสาสมัครพิทักษ์ป่าและนักดับไฟป่าประมาณ 20,000 คน ที่ปฏิบัติงานร่วมกับกรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช ด้วยงบประมาณเฉลี่ย 30 บาทต่อคน เพื่อสร้างหลักประกันทางการเงินคุ้มครองกรณีเกิดอุบัติเหตุ ทุพพลภาพ หรือเสียชีวิตจากการปฏิบัติหน้าที่ดับไฟป่าที่มีความเสี่ยงสูง',
        },
        elNinoRelevance: {
          en: 'A hotter, drier fire season could increase the risks faced by frontline volunteers working to prevent and suppress forest fires. Providing insurance strengthens the social protection of these essential responders and reduces the financial vulnerability of their families. Although insurance does not directly prevent fires, it supports the people on whom community wildfire preparedness and response depend.',
          th: 'ฤดูไฟป่าที่ร้อนและแห้งแล้งกว่าปกติเพิ่มความเสี่ยงต่ออันตรายที่อาสาสมัครแนวหน้าต้องเผชิญ การมีประกันภัยช่วยเสริมสร้างความคุ้มครองทางสังคมให้แก่ผู้ปฏิบัติงานสำคัญเหล่านี้ และลดความเปราะบางทางการเงินของครอบครัว แม้ประกันภัยจะไม่ได้ป้องกันไฟป่าโดยตรง แต่เป็นการดูแลกำลังหลักที่ชุมชนต้องพึ่งพาในการรับมือไฟป่า',
        },
        imageUrl: '/images/projects/DNPVOLUNTEER.png',
        taejaiUrl: 'https://taejai.com/th/project/Dst-DNPVOLUNTEER',
      },
      {
        id: 'breath-of-hope',
        title: {
          en: 'Breath of Hope — Mae Ai Hospital',
          th: 'Breath of Hope — ลมหายใจแห่งความหวัง โรงพยาบาลแม่อาย',
        },
        organization: {
          en: 'Mae Ai Hospital',
          th: 'โรงพยาบาลแม่อาย',
        },
        location: {
          en: 'Chiang Mai',
          th: 'จ.เชียงใหม่',
        },
        shortDescription: {
          en: 'Strengthens home-based healthcare for ~200 vulnerable patients in Mae Ai District by providing oxygen concentrators, air purifiers, and hospital beds.',
          th: 'ยกระดับการดูแลผู้ป่วยกลุ่มเปราะบางที่บ้านประมาณ 200 ราย ใน อ.แม่อาย ด้วยการจัดหาเครื่องผลิตออกซิเจน เครื่องฟอกอากาศ และเตียงผู้ป่วย',
        },
        fullDescription: {
          en: "This project strengthens home-based healthcare for approximately 200 vulnerable patients in Mae Ai District, Chiang Mai, by providing oxygen concentrators, air purifiers, and adjustable hospital beds through the hospital's medical equipment lending service. It primarily serves low-income patients, people with chronic respiratory conditions, bedridden patients, and those receiving palliative care who cannot afford essential medical equipment.",
          th: 'โครงการนี้เสริมสร้างระบบการดูแลสุขภาพที่บ้านให้แก่ผู้ป่วยกลุ่มเปราะบางประมาณ 200 ราย ในอำเภอแม่อาย จังหวัดเชียงใหม่ ด้วยการจัดหาเครื่องผลิตออกซิเจน เครื่องฟอกอากาศ และเตียงผู้ป่วยปรับระดับผ่านระบบยืมอุปกรณ์ทางการแพทย์ของโรงพยาบาล เพื่อช่วยเหลือผู้ป่วยรายได้น้อย ผู้ป่วยโรคทางเดินหายใจเรื้อรัง ผู้ป่วยติดเตียง และผู้ป่วยประคับประคองที่ไม่สามารถเข้าถึงอุปกรณ์จำเป็นได้',
        },
        elNinoRelevance: {
          en: 'Hotter and drier conditions may contribute to increased wildfire risk and smoke exposure in northern Thailand, potentially aggravating respiratory conditions among vulnerable populations. Appropriate air purifiers can help reduce indoor exposure to PM2.5, while access to prescribed respiratory-support equipment improves continuity of care. The project strengthens healthcare resilience during severe haze episodes, although not all the equipment is specifically intended to address El Niño-related impacts.',
          th: 'สภาพอากาศที่ร้อนและแห้งแล้งอาจเพิ่มความเสี่ยงไฟป่าและหมอกควันในภาคเหนือ ทำให้อาการของกลุ่มเปราะบางและผู้ป่วยโรคทางเดินหายใจรุนแรงขึ้น เครื่องฟอกอากาศที่เหมาะสมช่วยลดการสัมผัสฝุ่น PM2.5 ภายในบ้าน ขณะที่อุปกรณ์ช่วยหายใจช่วยให้การรักษาต่อเนื่อง โครงการนี้ช่วยเสริมภูมิคุ้มกันด้านสาธารณสุขในช่วงวิกฤตหมอกควันรุนแรง',
        },
        imageUrl: '/images/projects/maeai.jpeg',
        taejaiUrl: 'https://taejai.com/th/project/sck-breath-maeai-hospital',
      },
    ],
  },
  {
    id: 'climate-agriculture',
    number: '04',
    shortLabel: { en: '04 Agriculture', th: '04 เกษตรยั่งยืน' },
    title: {
      en: '04 Climate-Resilient Agriculture & Livelihoods',
      th: '04 เกษตรกรรมและการดำรงชีพที่ทนทานต่อสภาพภูมิอากาศ',
    },
    description: {
      en: 'Support farmers and vulnerable households through water-efficient agriculture, livelihood diversification, and income protection.',
      th: 'สนับสนุนเกษตรกรและครัวเรือนเปราะบางผ่านการทำเกษตรที่ใช้น้ำอย่างมีประสิทธิภาพ การสร้างรายได้หลากหลาย และการคุ้มครองรายได้',
    },
    status: 'active',
    projects: [
      {
        id: 'trees4all-phase-3',
        title: {
          en: 'Trees4All Phase 3 — Restoring Forests and Farmer Livelihoods',
          th: 'Trees4All ระยะที่ 3 — ฟื้นฟูป่าต้นน้ำและสร้างอาชีพที่ยั่งยืนให้เกษตรกร',
        },
        organization: {
          en: 'RECOFTC',
          th: 'ศูนย์วนศาสตร์ชุมชนเพื่อคนกับป่า (RECOFTC)',
        },
        location: {
          en: 'Nan',
          th: 'จ.น่าน',
        },
        shortDescription: {
          en: 'Restores degraded upstream forests in Nan by planting 20,000 trees with ~100 farmers annually, transitioning from monoculture to agroforestry and regenerative farming.',
          th: 'ฟื้นฟูป่าต้นน้ำเสื่อมโทรมใน จ.น่าน ด้วยการปลูกต้นไม้ 20,000 ต้น ร่วมกับเกษตรกร 100 รายต่อปี เปลี่ยนจากเกษตรเชิงเดี่ยวสู่ระบบวนเกษตร',
        },
        fullDescription: {
          en: 'Trees4All Phase 3 supports the restoration of degraded upstream forest ecosystems in Nan by planting 20,000 trees and working with approximately 100 farmers annually. The project helps farmers transition from environmentally damaging monoculture practices towards more diversified and regenerative land management, including agroforestry and alternative income-generating activities. Farmers are involved in tree maintenance and GPS-based monitoring, with annual progress reporting over three years. Previous phases reported planting 46,760 trees and annual survival rates exceeding 90%.',
          th: 'Trees4All ระยะที่ 3 สนับสนุนการฟื้นฟูระบบนิเวศป่าต้นน้ำที่เสื่อมโทรมในจังหวัดน่าน ด้วยการปลูกต้นไม้ 20,000 ต้น และทำงานร่วมกับเกษตรกรประมาณ 100 รายต่อปี ช่วยให้เกษตรกรเปลี่ยนผ่านจากการทำเกษตรเชิงเดี่ยวไปสู่การจัดการที่ดินแบบฟื้นฟูที่หลากหลายมากขึ้น เช่น ระบบวนเกษตรและอาชีพเสริม โดยเกษตรกรมีส่วนร่วมในการดูแลและติดตามผลด้วยระบบ GPS (ระยะก่อนหน้าปลูกไปแล้ว 46,760 ต้น อัตรารอดตายเกิน 90%)',
        },
        elNinoRelevance: {
          en: "Drought, high temperatures, and wildfire risks can intensify pressures on degraded watersheds and agricultural communities. By restoring tree cover, improving land management, reducing reliance on agricultural burning, and diversifying rural livelihoods, Trees4All helps strengthen ecological and economic resilience over time. Although forest restoration cannot prevent an immediate drought, healthier landscapes and more diversified livelihoods can reduce communities' vulnerability to recurring climate stresses.",
          th: 'ภัยแล้ง อุณหภูมิสูง และความเสี่ยงไฟป่าสร้างแรงกดดันต่อพื้นที่ต้นน้ำเสื่อมโทรมและชุมชนเกษตรกรรม การเพิ่มพื้นที่ปกคลุมของต้นไม้ ปรับปรุงการจัดการที่ดิน ลดการเผาภาคเกษตร และสร้างรายได้ที่หลากหลาย ช่วยเสริมสร้างภูมิคุ้มกันทางนิเวศและเศรษฐกิจในระยะยาว ลดความเปราะบางของชุมชนต่อวิกฤตสภาพภูมิอากาศที่เกิดซ้ำ',
        },
        imageUrl: '/images/projects/tree4all.jpg',
        taejaiUrl: 'https://taejai.com/th/project/env-trees4all-3',
      },
      {
        id: 'food-for-breath',
        title: {
          en: 'Food for Breath — Supporting Farmers, Clean Air, and Elephants',
          th: 'Food for Breath — เชื่อมเกษตรกร อากาศสะอาด และช้างไทย',
        },
        organization: {
          en: 'Asian Elephant Conservation Foundation',
          th: 'มูลนิธิอนุรักษ์ช้างเอเชีย',
        },
        location: {
          en: 'Chiang Mai',
          th: 'จ.เชียงใหม่',
        },
        shortDescription: {
          en: 'Creates economic value from crop residues by purchasing agricultural produce from farmers who avoid burning to feed 50 elephants across 10 camps.',
          th: 'สร้างมูลค่าเพิ่มจากเศษวัสดุเกษตร โดยรับซื้อผลผลิตจากเกษตรกรที่งดการเผา เพื่อนำไปเป็นอาหารช้าง 50 เชือก ใน 10 ปางช้าง',
        },
        fullDescription: {
          en: 'Food for Breath connects farmers and elephant camps through a model that creates economic value from agricultural produce and residues. The project purchases food and suitable agricultural materials from farmers, including those willing to avoid burning crop residues, to feed elephants in tourism-dependent camps facing financial difficulties. It aims to support 20 farmers, 50 elephants, and ten elephant camps, while encouraging alternatives to agricultural burning.',
          th: 'Food for Breath เชื่อมโยงเกษตรกรและปางช้างเข้าด้วยกันผ่านโมเดลที่สร้างมูลค่าทางเศรษฐกิจจากผลผลิตและเศษวัสดุทางการเกษตร โครงการรับซื้ออาหารและวัสดุเกษตรที่เหมาะสมจากเกษตรกรที่ร่วมมืองดการเผาตอซัง เพื่อนำไปเลี้ยงช้างในปางช้างที่ประสบปัญหาทางการเงิน ตั้งเป้าสนับสนุนเกษตรกร 20 ราย ช้าง 50 เชือก และปางช้าง 10 แห่ง พร้อมส่งเสริมทางเลือกทดแทนการเผา',
        },
        elNinoRelevance: {
          en: 'Dry conditions can increase the risk that agricultural burning will contribute to uncontrolled fires and seasonal PM2.5 pollution. By creating economic incentives for farmers to avoid burning and put agricultural materials to productive use, the project offers a community-based approach to reducing fire risks while supporting rural livelihoods. Its climate-resilience contribution would be stronger if reductions in burning and the quantity of agricultural residues reused were systematically monitored.',
          th: 'สภาพอากาศที่แห้งแล้งเพิ่มความเสี่ยงที่การเผาในพื้นที่เกษตรจะลุกลามเป็นไฟป่าและก่อให้เกิดฝุ่นควัน PM2.5 ตามฤดูกาล การสร้างแรงจูงใจทางเศรษฐกิจให้เกษตรกรงดเผาและนำเศษวัสดุเกษตรมาใช้ประโยชน์ เป็นแนวทางระดับชุมชนที่ช่วยลดความเสี่ยงไฟป่าควบคู่กับการพยุงรายได้ของเกษตรกรในชนบท',
        },
        imageUrl: '/images/projects/food-for-breath.jpg',
        taejaiUrl: 'https://taejai.com/th/project/anm-food-for-breath',
      },
    ],
  },
  {
    id: 'ecosystem-resilience',
    number: '05',
    shortLabel: { en: '05 Ecosystem', th: '05 ระบบนิเวศ' },
    title: {
      en: '05 Ecosystem & Nature-Based Resilience',
      th: '05 การฟื้นฟูระบบนิเวศและธรรมชาติ',
    },
    description: {
      en: 'Restore watersheds, forests, wetlands, and coastal ecosystems that help communities withstand climate stresses.',
      th: 'ฟื้นฟูพื้นที่ต้นน้ำ ป่าไม้ พื้นที่ชุ่มน้ำ และระบบนิเวศชายฝั่ง เพื่อช่วยให้ชุมชนสามารถรับมือและฟื้นตัวจากแรงกดดันทางสภาพภูมิอากาศได้',
    },
    status: 'coming_soon',
    projects: [],
  },
  {
    id: 'community-preparedness',
    number: '06',
    shortLabel: { en: '06 Emergency Response', th: '06 เตรียมพร้อมภัยพิบัติ' },
    title: {
      en: '06 Community Preparedness & Emergency Response',
      th: '06 การเตรียมพร้อมของชุมชนและการรับมือเหตุฉุกเฉิน',
    },
    description: {
      en: 'Build early-warning capacity, community response networks, and targeted assistance for households affected by climate-related emergencies.',
      th: 'สร้างขีดความสามารถในการเตือนภัยล่วงหน้า เครือข่ายตอบโต้ภัยพิบัติโดยชุมชน และความช่วยเหลือเฉพาะจุดสำหรับครัวเรือนที่ได้รับผลกระทบ',
    },
    status: 'active',
    projects: [
      {
        id: 'mirror-emergency-fund',
        title: {
          en: 'Mirror Foundation Emergency Fund',
          th: 'Mirror Foundation Emergency Fund — กองทุนฉุกเฉินมูลนิธิกระจกเงา',
        },
        organization: {
          en: 'Mirror Foundation',
          th: 'มูลนิธิกระจกเงา',
        },
        location: {
          en: 'Nationwide',
          th: 'ทั่วประเทศ',
        },
        shortDescription: {
          en: 'Provides rapid assistance to vulnerable individuals and communities affected by major disasters across Thailand by mobilizing volunteers and emergency supplies.',
          th: 'ให้ความช่วยเหลือเร่งด่วนแก่ผู้เปราะบางและชุมชนที่ประสบภัยพิบัติรุนแรงทั่วประเทศ ผ่านการระดมอาสาสมัคร อุปกรณ์ และสิ่งของจำเป็น',
        },
        fullDescription: {
          en: 'The Mirror Foundation Emergency Fund provides rapid assistance to vulnerable individuals and communities affected by major disasters and humanitarian emergencies across Thailand. The foundation mobilizes volunteers, emergency supplies, equipment, and operational resources to respond to urgent needs, while also supporting recovery efforts for households with limited financial and social resources.',
          th: 'กองทุนฉุกเฉินมูลนิธิกระจกเงาให้ความช่วยเหลืออย่างรวดเร็วแก่บุคคลและชุมชนกลุ่มเปราะบางที่ได้รับผลกระทบจากภัยพิบัติครั้งใหญ่และเหตุฉุกเฉินด้านมนุษยธรรมทั่วประเทศไทย โดยระดมกำลังอาสาสมัคร สิ่งของจำเป็น อุปกรณ์กู้ภัย และทรัพยากรปฏิบัติการเพื่อตอบสนองความต้องการเร่งด่วน พร้อมสนับสนุนการฟื้นฟูสำหรับครัวเรือนที่ขาดแคลนทรัพยากร',
        },
        elNinoRelevance: {
          en: "Severe drought, wildfires, heat-related emergencies, and other climate-related disruptions can place additional pressure on already vulnerable communities. Flexible emergency funding enables experienced responders to mobilize resources quickly when disasters occur. The fund contributes to Thailand's overall disaster-response capacity, although a dedicated allocation or reporting arrangement would be needed to demonstrate how donations specifically support El Niño-related emergencies.",
          th: 'ภัยแล้งรุนแรง ไฟป่า เหตุฉุกเฉินจากคลื่นความร้อน และภัยพิบัติทางสภาพอากาศ สร้างแรงกดดันซ้ำเติมชุมชนกลุ่มเปราะบาง เงินทุนฉุกเฉินที่คล่องตัวช่วยให้ทีมปฏิบัติการที่มีประสบการณ์สามารถระดมทรัพยากรเข้าพื้นที่ได้อย่างทันท่วงทีเมื่อเกิดเหตุ เสริมศักยภาพการรับมือภัยพิบัติของประเทศในภาพรวม',
        },
        imageUrl: '/images/projects/mirrorfoundation.jpg',
        taejaiUrl: 'https://taejai.com/th/project/ots-mirrorfoundation-fund',
      },
      {
        id: 'elderly-disaster-relief',
        title: {
          en: 'Elderly Disaster Relief Fund',
          th: 'Elderly Disaster Relief Fund — กองทุนช่วยเหลือผู้สูงอายุในภาวะภัยพิบัติ',
        },
        organization: {
          en: "Foundation for Older Persons' Development",
          th: 'มูลนิธิพัฒนางานผู้สูงอายุ',
        },
        location: {
          en: 'Northern and Southern Thailand',
          th: 'ภาคเหนือและภาคใต้',
        },
        shortDescription: {
          en: 'Supports isolated and low-income older people affected by seasonal disasters through community networks providing protective gear and recovery aid.',
          th: 'ช่วยเหลือผู้สูงอายุที่ยากจนและอยู่ลำพังเมื่อเผชิญภัยพิบัติตามฤดูกาล ผ่านเครือข่ายชุมชนที่มอบอุปกรณ์ป้องกันและฟื้นฟูเยียวยา',
        },
        fullDescription: {
          en: 'The Elderly Disaster Relief Fund supports older people affected by seasonal disasters, particularly those living in poverty, isolation, or circumstances that limit their access to emergency assistance. Through community networks and volunteers, it provides essential supplies, protective equipment, recovery assistance, and psychosocial support to help older people cope with disasters and their aftermath.',
          th: 'กองทุนช่วยเหลือผู้สูงอายุในภาวะภัยพิบัติสนับสนุนผู้สูงอายุที่ได้รับผลกระทบจากภัยพิบัติตามฤดูกาล โดยเฉพาะผู้ที่มีฐานะยากจน อยู่ตามลำพัง หรือมีข้อจำกัดในการเข้าถึงความช่วยเหลือฉุกเฉิน ผ่านเครือข่ายชุมชนและอาสาสมัครในการส่งมอบสิ่งของจำเป็น อุปกรณ์ป้องกัน การฟื้นฟู และการดูแลจิตใจหลังเกิดภัย',
        },
        elNinoRelevance: {
          en: 'Older people are particularly vulnerable to extreme heat, dehydration, smoke exposure, and interruptions to essential services. The fund’s established community networks could help identify and assist at-risk older people during periods of intensified climate stress. Its relevance would be strengthened by explicitly incorporating heat-related assistance, safe drinking water, and PM2.5 protection into its 2027 preparedness activities.',
          th: 'ผู้สูงอายุเป็นกลุ่มที่เปราะบางอย่างยิ่งต่อความร้อนจัด ภาวะขาดน้ำ การสูดดมควันไฟ และภาวะบริการสาธารณสุขหยุดชะงัก เครือข่ายชุมชนที่เข้มแข็งของกองทุนช่วยให้สามารถค้นหาและเข้าช่วยเหลือผู้สูงอายุกลุ่มเสี่ยงในช่วงวิกฤตสภาพอากาศรุนแรงได้อย่างตรงจุด',
        },
        imageUrl: '/images/projects/ElderlyDisasterRelief.jpg',
        taejaiUrl: 'https://taejai.com/th/project/dst-ElderlyDisasterRelief',
      },
      {
        id: 'luuk-riang-emergency-fund',
        title: {
          en: 'Luuk Riang Emergency Fund — Protecting Vulnerable Communities in Southern Thailand',
          th: 'Luuk Riang Emergency Fund — กองทุนฉุกเฉินคุ้มครองกลุ่มเปราะบางชายแดนใต้',
        },
        organization: {
          en: 'Luuk Riang Group',
          th: 'กลุ่มลูกเหรียง',
        },
        location: {
          en: 'Southern Border Provinces',
          th: 'จังหวัดชายแดนภาคใต้',
        },
        shortDescription: {
          en: 'Supports children, youth, women, and vulnerable families in southern border provinces facing recurring natural disasters alongside social challenges.',
          th: 'ช่วยเหลือเด็ก เยาวชน ผู้หญิง และครอบครัวเปราะบางในจังหวัดชายแดนใต้ที่เผชิญทั้งภัยธรรมชาติซ้ำซากและความท้าทายทางสังคม',
        },
        fullDescription: {
          en: "The Luuk Riang Emergency Fund supports children, young people, women, and vulnerable families in Thailand's southern border provinces, where communities face recurring natural disasters alongside prolonged social and security challenges. The fund provides emergency relief, essential supplies, temporary assistance, and support for frontline community volunteers. It also strengthens local coordination networks and longer-term recovery initiatives to improve the capacity of communities to respond to emergencies.",
          th: 'กองทุนฉุกเฉินลูกเหรียงสนับสนุนเด็ก เยาวชน ผู้หญิง และครอบครัวเปราะบางในพื้นที่จังหวัดชายแดนภาคใต้ ซึ่งต้องเผชิญภัยพิบัติทางธรรมชาติซ้ำซากควบคู่กับความท้าทายด้านสังคมและความมั่นคง โดยมอบความช่วยเหลือฉุกเฉิน สิ่งของจำเป็น การเยียวยาชั่วคราว และสนับสนุนอาสาสมัครชุมชนแนวหน้า พร้อมเสริมสร้างเครือข่ายประสานงานท้องถิ่นเพื่อการฟื้นฟูระยะยาว',
        },
        elNinoRelevance: {
          en: 'Climate-related shocks can compound existing vulnerabilities in communities already facing poverty, insecurity, and limited access to assistance. Strong local response networks can help protect vulnerable families when emergencies disrupt essential services or livelihoods. Although the fund is not specifically designed around El Niño, it contributes to broader community resilience and the ability to respond to overlapping crises.',
          th: 'ผลกระทบจากสภาพภูมิอากาศสามารถซ้ำเติมความเปราะบางที่มีอยู่เดิมในชุมชนที่เผชิญความยากจนและความไม่มั่นคง เครือข่ายตอบโต้ภัยพิบัติในท้องถิ่นที่เข้มแข็งช่วยปกป้องครอบครัวเปราะบางเมื่อเกิดเหตุฉุกเฉินที่กระทบต่อบริการพื้นฐานและการทำมาหากิน เสริมสร้างภูมิคุ้มกันในการรับมือวิกฤตซ้อนทับ',
        },
        imageUrl: '/images/projects/LuukRiang.jpg',
        taejaiUrl: 'https://taejai.com/th/project/dst-luukrieangfund',
      },
    ],
  },
];