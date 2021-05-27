<template>
    <div class="relative w-full bg-gray-200 rounded flex justify-center items-center">
      <div class="text-2xl absolute"><slot></slot></div>
      <div :style="`width: ${percentage}%`" :class="`absolute top-0 h-16 rounded shim-${color}`"></div>
    </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0,
      required: true
    },
    color: {
      default: 'blue'
    }
  }
}
</script>

<style scoped>
.shim-green {
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 255, 0, 0.7);
}
.shim-green::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
      90deg,
      rgba(233, 233, 233, 1) 0,
      rgba(233, 233, 233, 0.9) 50%,
      rgba(233, 233, 233, 0.8) 100%
  );
  animation: shimmer 2s ease-out infinite;
  content: "";
}

.shim-blue {
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 155, 255, 0.7);
}
.shim-blue::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
      90deg,
      rgba(233, 233, 233, 1) 0,
      rgba(233, 233, 233, 0.9) 50%,
      rgba(233, 233, 233, 0.8) 100%
  );
  animation: shimmer 2.5s ease-out infinite;
  content: "";
}

.shim-red {
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 0, 0, 0.7);
}
.shim-red::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
      90deg,
      rgba(233, 233, 233, 1) 0,
      rgba(233, 233, 233, 0.9) 50%,
      rgba(233, 233, 233, 0.8) 100%
  );
  animation: shimmer 3s ease-out infinite;
  content: "";
}

@keyframes shimmer {
  100% {
    transform: translateX(0%);
    opacity: 0;
  }
}


</style>
