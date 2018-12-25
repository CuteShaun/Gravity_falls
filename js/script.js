(function() {
  const data = [
    {
      name: "puhlya",
      imgPath: "img/puhlya.png",
      description:
        "Пухля (англ. Waddles) — домашний, ручной поросёнок Мэйбл, которого она выиграла на Ярмарке Чудес в эпизоде «Свинья путешественника во времени»."
    },

    {
      name: "dipper",
      imgPath: "img/dipper.png",
      description:
        "Мэйсон «Диппер» Пайнс (ориг. Mason «Dipper» Pines) — умный, доброжелательный, любопытный, любознательный и предприимчивый двенадцатилетний (тринадцатилетний в конце сериала) мальчик, проводящий лето с дядей Стэном в Гравити Фолз, штат Орегон, где он и его сестра Мэйбл постоянно сталкиваются с паранормальной стороной города. Вооружён дневником. Является одним из главных героев Гравити Фолз, исследующим тайны Хижины Чудес в течении лета."
    },

    {
      name: "ford",
      imgPath: "img/ford.jpg",
      description:
        "Стэнфорд «Форд» Филбрик Пайнс(англ. Stanford Philbrik «Ford» Pines) — является автором дневников, старшим сыном Филбрика Пайнса и братом-близнецом Стэна Пайнса. Точно так же, как и Стэн, он является двоюродным дедушкой Диппера и Мэйбл. Его знак на колесе Билла - шестипалая рука."
    },

    {
      name: "mabel",
      imgPath: "img/mabel.png",
      description:
        "Мэйбл Пайнс (англ. Mabel Pines) — жизнерадостная, энергичная, гиперактивная, полна энтузиазма и свободно-настроена 12-летняя девочка (в конце сериала ей исполняется 13 лет), проводящая лето с дядей Стэном в Гравити Фолз, штат Орегон, где ей и Дипперу приходится постоянно сталкиваться с паранормальными явлениями города. Она относится к своей жизни намного проще, когда находится в новой обстановке, чем ее брат-близнец.Обожает свою свинку Пухлю. Является одним из главных героев этого сериала."
    },

    {
      name: "robby",
      imgPath: "img/robby.png",
      description:
        "Роберт «Робби» Стэйси Валентино (рожд. 1994-1995[2]), более известный как Робби Ви, — это саркастический, высокомерный подросток-гот с плохим поведением. Бывший парень Вэнди и основной конкурент Диппера, пока пара не распалась. На данный момент встречается с Тэмбри. Он является ведущим гитаристом в своей группе «Робби Ви и Надгробия»."
    },

    {
      name: "soos",
      imgPath: "img/soos.png",
      description:
        "Хесус Альзамирано «Сус» Рамирез —  мастер и постоянный сотрудник Хижины Чудес, как и Вэнди. Друг Диппера и Мэйбл, Сус — очень добрый и милый человек, который хочет всегда быть в курсе событий. Увлекается аниме и репом. В настоящий момент является владельцем Хижины Чудес. Ему соответствует вопросительный знак на колесе Билла."
    },

    {
      name: "vendy",
      imgPath: "img/vendy.png",
      description:
        "Вэнди Блёрбл Кордрой (ориг. Wendy Blerble Corduroy) — девочка-подросток, живущая в Гравити Фолз, подрабатывающая в неполный рабочий день в Хижине Чудес. Диппер влюблён в неё, и она это знает. В эпизоде «В бункер» он признаётся в любви. В эпизоде «Свинья путешественника во времени», она начинает встречаться с Робби во всех вариантах времени. Но в конечном варианте Пухля опрокидывает чашу с водой на Робби, после чего он уходит. Робби, в эпизоде «Парнепокалипсис», загипнотизировал её. В конечном счёте, она расстаётся с ним в этом же эпизоде. В колесе Билла её знак — пакет со льдом."
    },

    {
      name: "stan",
      imgPath: "img/stan.png",
      description:
        "Стэнли «Стэн» Пайнс (англ. Stanley «Stan» Pines), ранее известный как Стэнфорд Пайнс — двоюродный дедушка Диппера и Мэйбл Пайнс, постоянный житель городка Гравити Фолз. После многих лет мошенничества и преступлений он поселился в отдаленном городке Гравити Фолз, штат Орегон, где руководит ловушкой для туристов, Хижиной Чудес. Несмотря на изначальный скептицизм по отношению к сверхъестественному, позже выясняется, что он сам тесно связан с паранормальными явлениями в Гравити Фолз."
    }
  ];

  ///DOM
  const nav = document.getElementById("nav-list");
  const main = document.getElementById("main");
  let prevListItem;

  nav.addEventListener("click", function(event) {
    if (prevListItem !== undefined && prevListItem.id !== event.target.id) {
      prevListItem.classList.remove("active");
    }

    if (event.target.classList.contains("characters-nav__item")) {
      event.target.classList.toggle("active");
      prevListItem = event.target;
    }

    return data.filter(function(item) {
      if (event.target.id === item.name) {
        return (main.innerHTML = `<h2 id="character-heading" class="characters-content__heading">
        ${item.name}
      </h2>
      <img
        id="character-img"
        class="characters-content__img"
        src="${item.imgPath}"
        alt="img-${item.name}"
      />

      <p id="character-description" class="characters-content__main-description">
        ${item.description}
      </p>`);
      }
    });
  });
})();
