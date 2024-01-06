const quotes = [
  {
    quote: "시작하는 방법은 말을 그만두고 실행하는 것이다.",
    author: "월트 디즈니",
  },
  {
    quote: "당신이 바쁘게 다른 계획을 세울 때 삶이 일어난다.",
    author: "존 레논",
  },
  {
    quote: "세상은 책이며 여행하지 않는 사람들은 단지 한 페이지만 읽는다.",
    author: "성 아우구스틴",
  },
  {
    quote: "인생은 대담한 모험이거나 아무것도 아니다.",
    author: "헬렌 켈러",
  },
  {
    quote: "여행은 살아 있는 것이다.",
    author: "한스 크리스티안 안데르센",
  },
  {
    quote: "다른 사람들을 위해 살아가는 삶만이 가치 있는 삶이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "당신은 단 한 번만 산다. 그러나 제대로 살 경우, 단 한 번이면 충분하다.",
    author: "메이 웨스트",
  },
  {
    quote: "사랑하지 않는 사람과는 여행에 나가지 마라.",
    author: "헤밍웨이",
  },
  {
    quote: "우리는 방황하기 위해 움직이지만, 우리는 충족을 위해 여행한다.",
    author: "힐레어 벨록",
  },
  {
    quote: "여행은 마음을 넓히고 공백을 채운다.",
    author: "셰다 샤비지",
  },
];

const quote = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todaysQuote);

quote.innerHTML = todaysQuote.quote + " - " + todaysQuote.author;
