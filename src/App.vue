<template>
  <div class="ctr">
    <Questions
      v-if="questionsAnswered < questions.length"
      :questions="questions"
    />
    <Result v-else />
    <button type="button" class="reset-btn">Reset</button>
  </div>
</template>

<script>
import Questions from './components/Questions.vue';
import Result from './components/Result.vue';

import { data as quizData } from './data';

export default {
  name: 'App',
  components: { Questions, Result },
  data() {
    return {
      questionsAnswered: 0,
      questions: quizData.questions,
      results: quizData.results,
    };
  },
};
</script>

<style></style>
