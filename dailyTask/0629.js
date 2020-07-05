<div id="app">
  <div>難以飛躍的{{ rock }} </div>
  <div>轉角遇到{{ wall }} </div>
</div>;

new Vue({
  el: "#app",
  data: {
    rock: "巨大的岩石",
    wall: "牆壁",
  },
});

<div id="app">小明招喚 {{ variable }} 來擋住敵人的去路</div>;

new Vue({
  el: "#app",
  data: {
    variable: "三寶",
  },
});
