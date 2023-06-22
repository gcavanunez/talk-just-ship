---
theme: seriph
background: gray
# background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
title: Welcome to Slidev
---

<div class="font-excalidraw">

# Just ship

<div class="text-gray-300">Deep diving into patterns that will</div>
get you/your team to ship code

</div>


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

<div class="font-excalidraw">

# The outline

## We'll be `hitting` the following...
<v-clicks>

- **decisions** with a focus on shipping to users
- **patterns** that provide actual agility
- (light) examples of `Just Shipping`
- (light) examples of smells, when falling into a trap
- **safety nets**
</v-clicks>
<v-click>

## We will be `missing` the following...

</v-click>
<v-clicks>

- methodologies*
- code architecture*

</v-clicks>

</div>

---
layout: center
---
<div class="font-excalidraw text-center">

# Decisions

<div class="text-white">

What do the peoples that `just ship` actually do?

</div>

</div>

---

<div class="font-excalidraw">

# Decade long over night successes

## Companies that made it happen despite odds

<v-click>

😂 [RemoteOk)](https://remoteok.com/) - Job Board

</v-click>
<v-click>

- to this day just work on a: single vps + index.php + jQuery + sqlite

</v-click>
<br />
<v-click>

🤯 [Savvycal](https://savvycal.com/) - Scheduling tool

</v-click>
<v-click>

- started with only 2 calendar integrations

</v-click>
<br />
<v-click>

🧠 [Tuple](https://tuple.app/) - Pair programming app

</v-click>
<v-click>

- for years they didn't have a way to manage teams or reset passwords
- for years their Webrtc native client had 0 testing

</v-click>

</div>

<!--
#### Tuple

_brief_: It got started as a tool to replace at the time the lack of a nice, performant and dev focus tool for code pairing. Before tuple there was a tool call ScreenHero which later got acquired by Slack and then killed.

_the ugly_:
- for years they didn't have a way to manage teams or reset passwords
- for years their WebRTC native client had 0 testing

_the good_:
- talked to users
- focused on making a performant native client


#### Savvycal

_brief_: It got started as a tool to compete in the Calendly space. It's main selling point is the amount of calendar integrations it was performed up to this point and ability to truly slot in with anyone you are trying to book time with.

_the ugly_:
- started with only 2 calendar integrations (competitors could have killed the product)

_the good_:
- talked to users
- focused on getting their UX/UI differentiable 

#### RemoteOk

_brief_: Job board started by nomad, started back in 2014 when working remote was not so much of a thing, is now making well over a million bucks a year.

_the ugly_:
- meme stack

_the good_:
- used tools at hand, creator understood the stack
- keeping things simple (even api)

-->

---

<div class="font-excalidraw">

# Testing is great, but it can backfire
## When falling back to industry standards slows you 

<br />

<v-click>

> !!! Warning:
> Testing `can` be good and needed 


</v-click>
<br />
<v-click>

When it ends up getting bad and slowing you

</v-click>
<v-clicks>

- Mocking falling out of sync
- Everything needs unit testing
- Code coverage as THE indicator
</v-clicks>


<!-- 🎥 [Ping.gg](https://tuple.app/) -> Testing WebRTC is hard (AV devices,Headless Chrome, etc.) -->
<!-- 🎥 [Facebook](https://tuple.app/) -> Testing WebRTC is hard (AV devices,Headless Chrome, etc.) -->

<br />

<v-click>

> When a test is flaky, engineers quickly learn to ignore it and eventually remove it
> 
> How do you test your tests? - Facebook

</v-click>

<!--

# PLEASE TAKE THIS WITH A GRAIN OF SAULT

Everything here is strictly my opinion. I've been on both sides of this conversation on the past, and where i have recently landed been for the most part due to the builds I have seen built.

Being that said, I still think that was cases where testing is critical
- Financial transaction (+Web3)
- Hardware that won't be getting updates after reaching consumer
- Dev facing libraries which behavior need to be places in N number of ways

What I mean to criticize 
- Mocking 
  - It can fall out of sync and provide false positives 
- Unit Testing
  - unit testing everything or using this as a rule of thumb is not best practice 
- Using code coverage as something meaningful
  - This is by far the worse of the worse, code coverage also provides a false sense of security 

Why is mostly bad
- used a means to provide security (false positives)
- make you end up writing too much boilerplate (thus dead time)
- automating certain pieces can lead you to faking key pieces that are out right impossible other wise

 -->


</div>

---
layout: two-cols
---

<div class="font-excalidraw">

# Clean code is overrated 

<br />

## [Keep things in one file](https://overreacted.io/goodbye-clean-code/)

<br />

<v-clicks at="1">

## [The wrong abstraction often hurts more than no abstraction](https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components)

</v-clicks>

</div>

::right::

<div class="grid grid-cols-1 relative">

<Tweet v-click-hide id="1027248875072114689"  />
<v-clicks at="1">
<div class="absolute inset-0">
<Tweet  id="1216318002276102144"   />
</div>
</v-clicks>
</div>



<!-- 
Clean code
- https://overreacted.io/goodbye-clean-code/
- https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components

 -->


---

<div class="font-excalidraw">

# Wrap up

<v-clicks>

- Talk to users
  - catch 22, users may not always know what they want


- Don't compromising on delivery
  - When reaching certain pieces


- Accepting the future refactor 
  - The future will always be uncertain

</v-clicks>

</div>

---
layout: center
---
<div class="font-excalidraw text-center">

# Patterns

<div class="text-white">

What actually helps you ship?

</div>

</div>

---

<div class="font-excalidraw">

# How to `Just Ship`?

<v-clicks>

- Deadlines are your friends

- Break up large goals
  - Scope in effort
  - Shippable chunks

- If on web, get the domain and code -> domain working right away

- Make sure reaching your users is in scope

</v-clicks>

</div>

---
layout: two-cols
---

<div class="font-excalidraw pr-2">

# Examples
## Focusing on `Just Shipping`

<br />

### Google Meet clone

<v-clicks>

- 🗒: I want my app to have a Video Chat
- ⌛️: Deadline: 1 week
- 🧠: Break up goals
  - WebRTC is hard
  <!-- - , bring in Twilio/100ms for the video part -->
  - Making your own designs is hard
  <!-- - , using a pre built component system -->
  - Building own Auth is hard
  <!-- - , just using an OAuth provider* -->
- 💨: Mount it on a (sub)domain and use Vercel/Netlify
- 🤣: You tell no one 


</v-clicks>

</div>

::right::

<div class="font-excalidraw pl-2">
<v-click>

### Image service

</v-click>

<v-clicks>

- 🗒: Handling images suck
```jsx
<MagicImageComponent 
  appKey={"key-registered-on-site"} 
  onUploadComplete={(url) => postToMyDatabase(url)} 
/>
```

- ⌛️: Deadline: 4 weeks
- 👋: You start talking to potential customers 
- 🧠: Break up goals
  - User dashboard to manage uploaded files
  - S3+cloudfront 
  - Personalized Domains for customers
  - Headless component
  - Payment integrations
- 💨: Use Heroku/Railway for vps

</v-clicks>

</div>

---

<div class="font-excalidraw">

# Examples
## Detecting the smells

<v-clicks>

- Too much testing or flaky tests

- Complex DB design from day 1

- The UI is getting cluttered 

- Product owners chasing perfect

</v-clicks>

</div>
<!-- 
it depends™️
Testing: maybe you are in a place where you need to over think about test
DB design: maybe you are doing something where it does matter
UI: the less the better
PMs: ca be chasing metrics and foot gunning dev
-->

---

<div class="font-excalidraw">

# Safety nets
## How do we make sure we can delivery?

<v-clicks>

- Newer Dev's should be asking the silly questions, PS: they are not silly

- Your CI/CD pipeline should be really slim and fast

- Choosing tech stacks your team is comfortable with and easy to adopt*

</v-clicks>

</div>
<!-- 
it depends™️
Testing: maybe you are in a place where you need to over think about test
DB design: maybe you are doing something where it does matter
UI: the less the better
PMs: ca be chasing metrics and foot gunning dev
-->

---

<div class="font-excalidraw">

# The real wrap up
## Takeaways

<v-clicks>

- We are builders

- Dev's are bad a identifying pit falls and valuing our time, time should be our friend

- Dev's don't really mind getting it wrong a bunch of times, and that is how mountains move

- Talk to users and get on the hands of your users

</v-clicks>

</div>
<!-- Certain level of contradiction no doubt -->

---

<div class="font-excalidraw">

# Resources

<v-clicks>

## The musts

- [Shape Up: Stop Running in Circles and Ship Work that Matters](https://basecamp.com/shapeup)

- [The Mom Test - How to talk to customers & learn if your business is a good idea when everyone is lying to you.](https://www.momtestbook.com/)

## The extras

- [Designing the Ideal Bootstrapped Business with Jason Cohen](https://www.youtube.com/watch?v=otbnC2zE2rw&ab_channel=MicroConf)

- [Interview with RemoteOK Founder](https://www.youtube.com/watch?v=V0ej29G7ZGg&ab_channel=MyFirstMillion)

- [Developer-owned databases: a new frontier?](https://www.youtube.com/watch?v=HDclqWeYt5M&ab_channel=Prisma)

- [Shipping to customer: Founder to founder advice](https://overcast.fm/+SuyGAkn4c)

- [Your Goals Kinda Suck - LEVEL UP As A Developer](https://www.youtube.com/watch?v=rzwaaWH0ksk&ab_channel=Theo-ping%E2%80%A4gg)

</v-clicks>

</div>
