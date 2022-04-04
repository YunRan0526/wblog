<template>
  <canvas id="moveStar" />
</template>
<script setup>
import { onMounted, onBeforeUnmount, reactive } from "vue";

const Star = (canvas, ctx, options) => {
  function Star(canvas, ctx, options) {
    this.timer = null;
    this.colors = ["#C45C66", "#C3CE5F", "#00ACA5", "#F19923", "#B493F3"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.size = Math.random() * options.size + 10;
    this.radius = this.size / 2;
    this.shortRadius = this.radius * 0.5;
    this.num = 5;
    this.split = 360 / this.num;
    this.speed = Math.random() * options.mainSpeed + 0.1;
    this.add = 0;
    //方向设置
    switch (options.direction) {
      case "left-to-right":
        this.x = -this.size;
        this.y = Math.random() * (canvas.height - this.size);
        break;
      case "right-to-left":
        this.x = this.size + canvas.width;
        this.y = Math.random() * (canvas.height - this.size);
        break;
      case "bottom-to-top":
        this.y = this.size + canvas.height;
        this.x = Math.random() * (canvas.width - this.size);
      case "top-to-bottom":
        this.y = -this.size;
        this.x = Math.random() * (canvas.width - this.size);
        if (options.sideSpeed) {
          if (options.sideSpeed > 0) {
            this.x = Math.random() * canvas.width - 50;
          }
          if (options.sideSpeed < 0) {
            this.x = Math.random() * canvas.width + 50;
          }
        }
    }
    //
    this.getAngle = (angle) => {
      return (angle * Math.PI) / 180;
    };
    this.draw = () => {
      ctx.save();
      this.add += this.speed;
      //方向设置
      switch (options.direction) {
        case "left-to-right":
          this.x += this.add;
          break;
        case "right-to-left":
          this.x -= this.add;
          break;
        case "bottom-to-top":
          this.y -= this.add;
          break;
        case "top-to-bottom":
          this.y += this.add;
          if (options.sideSpeed) {
            this.x += options.sideSpeed * this.add;
          }
      }
      //
      ctx.beginPath();
      ctx.lineWidth = Math.random() * 6;
      ctx.lineJoin = "round";
      ctx.shadowColor = this.color;
      ctx.shadowBlur = Math.random() * 45;
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
      ctx.rotate(this.getAngle(this.add));
      this.drawStar(-(this.size / 2), -(this.size / 2));
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };
    this.drawStar = (centerX, centerY) => {
      [...Array(this.num).keys()].forEach((i) => {
        let angle = this.getAngle(i * this.split - 90);
        let x = this.radius * Math.cos(angle) + centerX;
        let y = this.radius * Math.sin(angle) + centerY;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        angle += this.getAngle(this.split / 2);
        x = this.shortRadius * Math.cos(angle) + centerX;
        y = this.shortRadius * Math.sin(angle) + centerY;
        ctx.lineTo(x, y);
      });
    };
  }
  return new Star(canvas, ctx, options);
};
const Box = (canvas, ctx, options) => {
  function Box(canvas, ctx, options) {
    this.timer = null;
    this.colors = ["#C45C66", "#C3CE5F", "#00ACA5", "#F19923", "#B493F3"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.size = Math.random() * options.size + 10;
    this.px = canvas.width / 2 - this.size / 2;
    this.py = canvas.height / 2 - this.size / 2;
    this.speed = Math.random() * options.mainSpeed + 0.1;
    this.add = 0;
    //方向设置
    switch (options.direction) {
      case "left-to-right":
        this.x = -this.size;
        this.y = Math.random() * (canvas.height - this.size);
        break;
      case "right-to-left":
        this.x = this.size + canvas.width;
        this.y = Math.random() * (canvas.height - this.size);
        break;
      case "bottom-to-top":
        this.y = this.size + canvas.height;
        this.x = Math.random() * (canvas.width - this.size);
        break;
      case "top-to-bottom":
        this.y = -this.size;
        this.x = Math.random() * (canvas.width - this.size);
        if (options.sideSpeed) {
          if (options.sideSpeed > 0) {
            this.x = Math.random() * canvas.width - 50;
          }
          if (options.sideSpeed < 0) {
            this.x = Math.random() * canvas.width + 50;
          }
        }
        break;
    }
    //
    this.getAngle = (angle) => {
      return (angle * Math.PI) / 180;
    };
    this.draw = () => {
      ctx.save();
      this.add += this.speed;
      //方向设置
      switch (options.direction) {
        case "left-to-right":
          this.x += this.add;
          break;
        case "right-to-left":
          this.x -= this.add;
          break;
        case "bottom-to-top":
          this.y -= this.add;
          break;
        case "top-to-bottom":
          this.y += this.add;
          if (options.sideSpeed) {
            this.x += options.sideSpeed * this.add;
          }
          break;
      }
      ctx.globalCompositeOperation = "lighter";
      ctx.beginPath();
      ctx.lineWidth = Math.random() * 6;
      ctx.lineJoin = "round";
      ctx.shadowColor = this.color;
      ctx.shadowBlur = Math.random() * 45;
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
      ctx.rotate(this.getAngle(this.add));
      ctx.rect(-(this.size / 2), -(this.size / 2), this.size, this.size);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    };
  }
  return new Box(canvas, ctx, options);
};
const tick = () => {
  const canvas = document.getElementById("moveStar");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let particle = null;
  if (Math.random() > 1 - options.num) {
    const num = Math.round(Math.random() * 1);
    switch (num) {
      case 0:
        particle = Box(canvas, ctx, options);
        break;

      case 1:
        particle = Star(canvas, ctx, options);
        break;
    }
    //删除不需要的节点
    if (collection.length > 99) {
      collection.shift();
    }
    collection.push(particle);
  }
  collection.forEach((particle) => {
    particle.draw();
  });
  window.requestAnimationFrame(tick);
};
const collection = reactive([]);
const options = reactive({
  direction: "top-to-bottom",
  sideSpeed: -0.3,
  delay: 2500,
  size: 40,
  mainSpeed: 0.4,
  num: 0.25,
});
onMounted(() => {
  {
    const canvas = document.getElementById("moveStar");
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth - 300;
    canvas.height = innerHeight;
    window.addEventListener("resize", () => {
      canvas.width = innerWidth - 300;
      canvas.height = innerHeight;
    });
    function initAnimation() {
      !options.direction ? (options.direction = "left-to-right") : "";
      !options.delay ? (options.delay = 2500) : "";
      !options.size ? (options.size = 40) : "";
      !options.mainSpeed ? (options.mainSpeed = 0.4) : "";
      !options.num ? (options.num = 0.25) : "";
      console.log("OPTIONS:", options);
      setTimeout(() => {
        tick();
      }, options.delay);
    }
    initAnimation();
  }
});
onBeforeUnmount(() => {
  const canvas = document.getElementById("moveStar");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log("清空画布", 0, 0, canvas.width, canvas.height);
  window.cancelAnimationFrame(tick);
});
</script>
