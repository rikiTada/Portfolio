<script setup>
import AppMockup from "../molecules/AppMockup.vue";
import AppSvg from "../Atoms/AppSvg.vue";
// import SkillList from "../Atoms/SkillList.vue";
</script>
<template>
  <h2 class="section_ttl">PROFILE</h2>
  <div class="profile flex gap-8 md:flex-row flex-col justify-center">
    <AppSvg class="pointer-events-none" />
    <!-- <img src="../../assets/photo.png" class="lg:w-1/2 w-auto" alt="" /> -->
    <div class="text-white tracking-widest">
      <h3 class="text-2xl font-bold hover:after:content-['🙌']">
        Hi, I'm Riki.
      </h3>
      <hr />
      <div class="mt-4 [&>p]:my-3 font-normal">
        <p>
          東京在住のフロントエンダーです。<br />
          趣味は、読書とお酒の’96年生まれ。デザインも大好きです。
        </p>
        <p>
          幅広い知識と、能動的に動く姿勢から、<br />
          職場では”雑食系男子”の称号をいただいています。
        </p>
        <p>前職はアイス屋の店長という一面もあります。</p>
        <p>
          仕事の早さ・精度・信頼性に自信がありますので、<br />
          気になった方は、ぜひ
          <span class="underline font-bold pr-1 hover:text-blue-600"
            ><a href="#contact">Contact</a></span
          >からご連絡ください。
        </p>
        <div>
          <h4 class="font-semibold text-sm mt-5 mb-1">好きな言葉:</h4>
          <ul
            class="text-xl md:text-3xl font-semibold grid md:flex gap-1 md:gap-3"
          >
            <li>効率</li>
            <li>自動化</li>
            <li>まったり</li>
          </ul>
        </div>
      </div>
      <!-- <SkillList
        title="Languages I speak:"
        skills="HTML/CSS, JavaScript, PHP, Python"
      />
      <SkillList title="Frameworks/Libraries:" skills="React, Vue.js, Astro" />

      <SkillList title="Communication Tools:" skills="Notion, Slack" />
      <SkillList
        title="Other Skills:"
        skills="Tailwindcss, SCSS, StoryBook, Figma, WordPress, microCMS"
      /> -->
    </div>
  </div>
  <AppMockup />
</template>
