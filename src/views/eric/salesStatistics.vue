<template>
  <div class="d-flex">
    <aside class="sidebar  border-5  pt-3 border-end d-flex bg-secondary flex-column ">
      <BackendFunctions v-once></BackendFunctions>
    </aside>
    <main class="main ">
      <div class="container  mx-auto px-0 ">
        <div class="row p-3 ">
          <div class="col-3">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <my-radia></my-radia>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <my-radiasm></my-radiasm>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card shadow-sm">
              <div class="card-body">
                <h2 class="display-6">當日訂單數</h2>
                <p class="display-4">{{ todayOrder }}</p>
              </div>
            </div>
            <div class="card shadow-sm mt-1">
              <div class="card-body text-end">
                <h2 class="display-6 ">當日營業額</h2>
                <p><span class="fs-3">NT$</span><span class="display-4 text-success">{{ todayTotal }}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-2">
          <div class="col-4">
            <div class="card shadow-sm h-100">
              <div class="card-body mt-5">
                <my-pie></my-pie>
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <my-bar></my-bar>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-2">
          <div class="col">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <my-line></my-line>
              </div>
            </div>
          </div>
        </div>
        <div class="card shadow-sm h-100 mb-5">
          <div class="card-body">
            <my-hat></my-hat>
          </div>
        </div>
      </div>

    </main>
  </div>

</template>

<script>
import BackendFunctions from '/src/components/eric/BackendFunctions.vue';
import myLine from '/src/components/eric/charts/myLine.vue';
import myBar from '/src/components/eric/charts/myBar.vue';
import myPie from '/src/components/eric/charts/myPie.vue';
import myRadia from '/src/components/eric/charts/myRadia.vue';
import myRadiasm from '/src/components/eric/charts/myRadiasm.vue';
import myHat from '/src/components/eric/charts/myHat.vue'
export default {

  components: {
    BackendFunctions,
    myLine,
    myBar,
    myPie,
    myRadia,
    myRadiasm,
    myHat,
  },
  data() {
    return {
      todayTotal: 0,
      todayOrder: 0
    }
  },

  mounted() {
    this.$axios.get('/orders')
      .then(res => {
        res.data.forEach((element, index) => {
          this.todayTotal += element.price
          this.todayOrder++
        })
      })
  }
};
</script>


<style lang="scss" scoped>
@import '/src/assets/main.scss';

.d-flex {
  background: $secondary;
  height: 100vh;
}

.bar {
  height: 50vh;
}

.sidebar {
  flex: 0 0 auto;
  width: 280px;
  overflow: hidden;
  transition: width 0.5s;
}

.main {
  flex: 1;
  /* 让主要内容区域占据剩余的所有可用空间 */
  overflow-y: auto;
  max-width: 100%;
  transition: width 0.5s, margin-left 0.5s;
}

.sidebar:not(:hover) {
  width: 0;
}

.sidebar:hover {
  width: 280px;

  .main {
    width: calc(100vw - var(--sidebar-width));
    /* margin-left: 0; */
  }
}
</style>
