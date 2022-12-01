const change_english = document.getElementById("Change_lenguage");
const profileTittle = document.getElementById("Tittle");
const profileFirstText = document.getElementById("First_text");
const profileSecondText = document.getElementById("Second_text");
const profileThirdText = document.getElementById("Third_text");
const Lenguage = document.getElementById("Lenguage");
const English = document.getElementById("Lenguage_Desc");
const Contact = document.getElementById("Contact");
const Country = document.getElementById("Country");
const Cellphone = document.getElementById("Cellphone");
const Email = document.getElementById("Email");
const Experience = document.getElementById("Experience");
const FirstExp = document.getElementById("First_Exp");
const SecondExp = document.getElementById("Second_Exp");
const ThirdExp = document.getElementById("Third_Exp");
const FourthExp = document.getElementById("Fourth_Exp");
const Datee = document.getElementById("Date");
const IndunorExp = document.getElementById("Indunor_Exp");
const Education = document.getElementById("Education");
const DateEdu = document.getElementById("Date_Edu");
const EduDescr = document.getElementById("Edu_Desc");
const TittleEdu = document.getElementById("Tittle_Edu");
const SqlIcon = document.getElementById("Sql");
const PhpIcon = document.getElementById("Php");

const changeLenguage = (e) => {
  if (e.target && !change_english.classList.contains("active")) {
    /*button*/
    change_english.textContent="Spanish Version"
    change_english.classList.add("active");
    /*PROFILE*/
    profileTittle.textContent = "PROFILE";
    profileFirstText.textContent ="For a year i have been training in this new passion that is web desing and with this, i am looking for completly change my  work route. I am seartching my first experience as a web Designer. I am really anxious to be part of a team and i know that is the best way of improve my self, learn from other web designer that have been years in this world.";
    profileSecondText.textContent="i have good aptitude to work in a team because, from another angle, i have been part of a team and leadership successfully a twenty persons group"
    profileThirdText.textContent="Until now i learned Html, Css And JS. Im still learning and training , the next step its the backend part."
    /*Lenguage*/
    Lenguage.textContent = "LENGUAGE";
    English.textContent="English: medium";
    /*CONTACT*/
    Contact.textContent="CONTACT";
    Country.innerHTML= "Argentine";
    Cellphone.textContent= "+5401133901851";
    Email.textContent= "matiascarmixano@hotmail.com"
    /*EXPERIENCE*/
    Experience.textContent= "EXPERIENCE"
    FirstExp.textContent= "I was responsable for the comercial and operative performance of six branch offices placed on Capital Federal."
    SecondExp.textContent= "I was Lead teams of three to five people, with a total of twenty people on my charge."
    ThirdExp.textContent= "My only mision as a leader of the zone was to guide my team optimizing and innovating the sell process according to enterprise priorities. We achieved together, for a year straight, the commercial objectives requested."
    FourthExp.textContent = "I had an active participation on the interview and the subsequent decision-making about the new profilse to join my work team as well as their extensive training and support during this important process. I always worked over the tangible, my capacity of analisis was crucial on this job, being indispensable on good and bad result."
      /*Indunor*/
    Datee.textContent= " Jan 2015 – Oct 2017";
    IndunorExp.textContent= "I was in charge of all banking procedures, deposits. Carry out procedures in AFIP with tax code level three. I Handled large amounts of cash and checks."
    /*EDUCATION*/
    Education.textContent="EDUCATION";
    DateEdu.textContent = "March 2022 - March 2023";
    EduDescr.textContent = "Full stack Developer. I am in process to learn backend.";
    TittleEdu.textContent = "Level of learning";
  }
  else{
    
    /*button*/
    change_english.classList.remove("active");
    change_english.textContent= "English Version"
    /*PROFILE*/
    profileTittle.textContent = "PERFIL";
    profileFirstText.textContent ="Llevo ya un año capacitándome en esta nueva pasión que es el diseño web y busco dar un giro completo a mi camino laboral. Me encuentro en busca de mi primer experiencia como diseñador web. Estoy ansioso de poder trabajar y ser parte de un equipo, sé que de esta forma voy a poder absorber mucho conocimiento de diseñadores que llevan años en este rubro.";
    profileSecondText.textContent="Cuento con buenas aptitudes para trabajo en equipo ya que ,desde otro angulo, e sido parte de equipos de trabajo y e llegado a liderar un equipo de veinte personas con exito."
    profileThirdText.textContent="Hasta ahora domino Html, Css y JS. Me encuentro todavia cursando y capacitandome."
    /*Lenguage*/
    Lenguage.textContent = "IDIOMAS";
    English.textContent="Ingles: Intermedio";
    /*CONTACT*/
    Contact.textContent="CONTACTO";
    Country.innerHTML= "Argentina";
    Cellphone.textContent= "+5401133901851";
    Email.textContent= "matiascarmixano@hotmail.com"
    /*EXPERIENCE*/
    Experience.textContent= "EXPERIENCIA"
    FirstExp.textContent= "Me responsabilicé por el desempeño comercial y operativo de seis sucursales ubicadas en Capital Federal."
    SecondExp.textContent= "Lidere equipos de trabajo de tres a cinco personas por sucursal, con un total de veinte personas a cargo."
    ThirdExp.textContent= "Mi principal misión como jefe zonal era guiar a mis equipos de trabajo optimizando e innovando los procesos de venta según las necesidades de la empresa. Logramos así Alcanzar juntos durante un año consecutivo los objetivos comerciales solicitados."
    FourthExp.textContent = "Tenía una Participación activa en las entrevistas y la posterior toma de decisiones sobre los perfiles nuevos a ingresar a mi equipo de trabajo como también de su extensa capacitación y acompañamiento durante este importante proceso. Siempre trabajé sobre lo tangible, la capacidad de análisis fue de mis virtudes más importantes en este puesto, siendo indispensable tanto en buenos como en malos resultados."
    
    /*Indunor*/
    Datee.textContent= "Enero 2015 – Oct 2017";
    IndunorExp.textContent= "Estaba a cargo de todos los trámites bancarios, depósitos. Realizaba trámites en AFIP con clave fiscal nivel tres. Manejaba grandes cantidades de dinero en efectivo y cheques."
    /*EDUCATION*/
    Education.textContent="EDUCACIÓN" ;
    DateEdu.textContent = "Marzo 2022 - Marzo 2023";
    EduDescr.textContent = "Desarrollador web completo. Me encuentro en proceso de aprendizaje de backend.";
    TittleEdu.textContent = "Nivel de aprendizaje";
  }
};


var intervalID = setInterval(Learning, 500);


function Learning() {
      SqlIcon.classList.remove("fa-regular");
      SqlIcon.classList.add("fa-solid");
      PhpIcon.classList.remove("fa-regular");
      PhpIcon.classList.add("fa-solid");
      clearInterval(intervalID);
      intervalID = setInterval(remover,500)
      
}


const remover = () =>{
  SqlIcon.classList.remove("fa-solid");
  SqlIcon.classList.add("fa-regular");
  PhpIcon.classList.remove("fa-solid");
  PhpIcon.classList.add("fa-regular");
  clearInterval(intervalID);
  intervalID = setInterval(Learning,500)

}



const init = () => {
  change_english.addEventListener("click", changeLenguage);
};

init();
