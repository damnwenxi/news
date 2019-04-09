<template>
  <div class="news">
    <div id="back">
      <div class="container">
        <hr style="border:1px dashed #bbb">
        <h1>This is the article title or info.</h1>
        <img src="../../static/img/city.jpg" alt="news">

        <div id="info">
          <p class="left" align="justify">
            <label>项目介绍</label>
            <br>兼容性良好，支持 IE8+，及所有现代浏览器。
            相比于 Unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。
            因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。
            不过因为本质上还是使用的字体，所以多色图标还是不支持的。
          </p>
          <p class="right" align="justify">
            <label>团队信息</label>
            <br>兼容性良好，支持 IE8+，及所有现代浏览器。
            相比于 Unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。
            因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。
            不过因为本质上还是使用的字体，所以多色图标还是不支持的。
          </p>
        </div>
      </div>
    </div>
    <article>
      <section class="chapter1 container">chapter1
        <chart1 class="container "/>
      </section>
      <section class="chapter2">chapter2

      </section>
      <section class="chapter3">chapter3</section>
      <section class="chapter4">chapter4</section>
      <section class="chapter5">chapter5</section>
    </article>
  </div>
</template>

<script>

import chart1 from './chart/chart1'

export default {
  name: "news",
  components: {
    chart1
  }
};
</script>

<style lang='css' scoped>
#back {
  height: 100%;
  width: 100%;
  background-color: #eee;
  overflow: hidden;
  margin-top: -70px;
  padding-top: 40px;
}
#back img {
  width: 100%;
  z-index: -1;
}
#back h1 {
  color: #454554;
}
#info p {
  display: block;
  width: 50%;
  padding: 30px;
  float: left;
}
#info label {
  font-size: 1.5em;
  font-weight: 700;
}
article section {
  height: 600px;
  width: 100%;
}



/* chart */
.echarts{
  max-width: 600px;
  margin: 0 auto;
}
</style>
