import React, { useContext } from "react";
import { store } from "../../context/context";
import uzb from "../../assets/flag-uzb.avif";
import "./style.css";
function About() {
  const {
    state: { lang },
  } = useContext(store);
  return (
    <section>
      <div className="container">
        <div className="text2-div">
          <p className="p-text">
            {lang === "uz"
              ? "Innovatsion texnologiyalar butun dunyodagi o'qituvchilar va o'quvchilar uchun o'quv jarayonini o'zgartiradi. O'zbekiston Respublikasi maktab va maktabgacha ta'limi tizimini 2030-yilgacha rivojlantirish konsepsiyasiga muvofiq tizimni modernizatsiya qilish maqsadida faol harakatlar amalga oshirilmoqda. Konsepsiyada qayd etilgan vazifalardan kelib chiqib, maktabgacha va maktab ta'limi  tizimiga zamonaviy axborot-kommunikatsiya texnologiyalari va innovatsion loyihalarni tatbiq etish, yoshlarni maktabdan tashqari ta'lim va tarbiyalashning zamonaviy uslub va yo'nalishlarini joriy  etish, hamda ularning bandlik bilan ta'minlash, DUK “Innovatsiya, texnologiya va strategiya markazi” ITSM ushbu dasturlarni amalga oshirish bo'yicha maqsadlarni belgilaydi. ITSM 2018-yil 28-noyabr   kuni O'zbekiston Respublikasi maktabgacha va maktab ta'limi ta'limi vazirligi huzurida tashkil etilgan. ITSMning asosiy maqsadi maktabgacha va maktab ta'limi tizimiga zamonaviy va innovatsion  texnologiyalar, veb-platformalar, dasturiy mahsulotlar, axborot tizimlarini joriy etish hamda, strategik tahlil va rejalashtirish orqali sohani yanada rivojlantirishdan iboratdir. ITSM loyihalari  O'zbekiston maktabgacha va maktab ta'limi tizimini boshqarish jarayonlarini raqamlashtirish va avtomatlashtirish hamda o'qituvchilar va talabalarning imkoniyatlarini kengaytirish uchun innovatsion yondashuvlar, platformalar va tizimlarni joriy etishga qaratilgan."
              : lang === "ru"
              ? " Инновационные технологии меняют процесс обучения преподавателей и студентов по всему миру. в соответствии  Концепцией развития системы школьного и дошкольного образования Республики Узбекистан до 2030 года ведется активная работа по модернизации системы. на основании обозначенных в концепции задач внедрение современных информационно-коммуникационных технологий и инновационных проектов в систему дошкольного и школьного образования, внедрение современных методов и направлений внешкольного образования и воспитания молодежи,  также обеспечивая их трудоустройством, «Центр инноваций, технологий и стратегии» ИТСМ Государственного образовательного учреждения ставит цели по реализации этих программ. ITSM создан 28 ноября 2018 года при Министерстве дошкольного и школьного образования Республики Узбекистан. Основная цель ITSM — внедрение современных и инновационных технологий, веб-платформ, программных продуктов, информационных систем в систему дошкольного и школьного образования,  также дальнейшее развитие отрасли посредством стратегического анализа и планирования. Проекты ITSM направлены на внедрение инновационных подходов, платформ и систем для оцифровки и автоматизации процессов управления системой дошкольного и школьного образования Узбекистана и расширения прав и возможностей учителей и учащихся."
              : "Innovative technologies are changing the learning process for teachers and students around the world. In accordance with the  concept of development of the school and preschool education syste of the Republic of Uzbekistan until 2030, active efforts are being made to modernize the system. Based on the tasks mentioned in the concept, implementation of modern information and communication technologies and innovative projects in the system of preschool and school education, introduction of modern methods and directions of out-of-school education and upbringing of young people, as well as providing them with employment, The Innovation, Technology and Strategy Center ITSM of the State Educational Institution sets the goals for the implementation of these programs. ITSM was established on November 28, 2018 under the Ministry of Preschool and  School Education of the Republic of Uzbekistan. The main goal of ITSM is to introduce modern and innovative technologies, web   platforms, software products, information systems to the system of  preschool and school education, and to further develop the field   through strategic analysis and planning. ITSM projects are aimed at introducing innovative approaches, platforms and systems to digitize and automate the management processes of Uzbekistan's preschool and school education system and empower teachers and students."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
