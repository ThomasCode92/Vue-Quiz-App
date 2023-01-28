<template>
  <div class="ctr">
    <transition name="fade" mode="out-in">
      <Questions
        v-if="questionsAnswered < questions.length"
        :questions="questions"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered"
      />
      <Result v-else :results="results" :totalCorrect="totalCorrect" />
    </transition>
    <button
      v-if="this.questionsAnswered === questions.length"
      type="button"
      class="reset-btn"
      @click.prevent="reset"
    >
      Reset
    </button>
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
      totalCorrect: 0,
      questions: quizData.questions,
      results: quizData.results,
    };
  },
  methods: {
    questionAnswered(is_correct) {
      if (is_correct) {
        this.totalCorrect++;
      }

      this.questionsAnswered++;
    },
    reset() {
      this.questionsAnswered = 0;
      this.totalCorrect = 0;
    },
  },
};
</script>

<style></style>
