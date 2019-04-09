<template>
  <div id="head-nav">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Research</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
          </ul>

          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#" class="iconfont iconview">浏览 113</a>
            </li>
            <li class="nav-item">
              <a href="#" class="iconfont iconaui-icon-comment">评论 21</a>
            </li>
            <li class="nav-item">
              <a href="#" class="iconfont iconlike">喜欢 67</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <img src="../../static/img/imgfile.png" alt="news">
  </div>
</template>

<script>
export default {
    name:"head-nav"
}

</script>

<style lang='css' scoped>

.nav-item{
    margin-right:0;
    margin-left:2em;  
}
a:hover{
  color: rgb(249,50,80);
}
img{
  width:5em;
  position:relative; 
  top:-2.5em;
  
  }
</style>



