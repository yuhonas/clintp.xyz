---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "clintp.xyz"
  text: "My bio in two mouse clicks or less"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<!-- My bio in two mouse clicks or less -->

## who?

I grew up in Melbourne, Australia in the 80's, an unwilling combatant in the [console wars](https://www.denofgeek.com/games/sega/33279/sega-vs-nintendo-revisiting-the-deadliest-console-war),
 my passion for computing started with typing lengthy [programs](https://en.wikipedia.org/wiki/Type-in_program) from [Commodore 64 magazines](https://en.wikipedia.org/wiki/Zzap!64)
only to see many uneventfully or eventfully (depending on how you look at it) fail

I went on to study Computer Science at Swinburne University and am also deeply intrigued by the Social Sciences, particularly Psychology, Sociology and Economics. In my professional life I have been a business owner, engineer, senior engineer, delivery lead, engineering manager, product owner, solutions architect and involved in a startup from seed to exit.

My most recent position was as an Engineering Manager at [GOAT](https://www.goat.com) in Los Angeles, All in all I enjoy leading teams and organizations on rewarding journeys.

Outside of work I love traveling with ~25 countries under my belt, hiking, studying Spanish, reading, coffee (trying to perfect my latte art) and alcohol (not in any kind of [Rick & Morty](https://www.adultswim.com/videos/rick-and-morty) high functioning alcoholic type love but more of a gentle fascination with its production and how it could be perceived as a distillation of a culture)

## looking for a resume?

[Resume_ClintPlummer_ENMR.pdf](/Resume_ClintPlummer_ENMR.pdf) or
[[ipynb](https://github.com/yuhonas/clintp.xyz/blob/master/public/Resume_ClintPlummer_ENMR.ipynb)]

## would like to get in contact?

I can be reached at [hello@clintp.xyz](mailto:hello@clintp.xyz) or my [Linked-In](https://www.linkedin.com/in/clint-plummer/)


<script>
export default {
  mounted() {
    const content = this.$el.querySelector('#who');
    console.log(content)
  }
}
</script>
