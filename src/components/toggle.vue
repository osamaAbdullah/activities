<template>

  <!-- Toggle A -->
  <div class="flex items-center justify-center w-full mb-12">

    <label
        for="toogleA"
        class="flex items-center cursor-pointer"
    >
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="toogleA" type="checkbox" class="sr-only" />
        <!-- line -->
        <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <!-- dot -->
        <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
      </div>
      <!-- label -->
      <div class="ml-3 text-gray-700 font-medium">
        Toggle Me!
      </div>
    </label>

  </div>

<!--  &lt;!&ndash; Toggle B &ndash;&gt;
  <div class="flex items-center justify-center w-full mb-12">

    <label for="toggleB" class="flex items-center cursor-pointer">
      &lt;!&ndash; toggle &ndash;&gt;
      <div class="relative">
        &lt;!&ndash; input &ndash;&gt;
        <input type="checkbox" id="toggleB" class="sr-only">
        &lt;!&ndash; line &ndash;&gt;
        <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
        &lt;!&ndash; dot &ndash;&gt;
        <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
      </div>
      &lt;!&ndash; label &ndash;&gt;
      <div class="ml-3 text-gray-700 font-medium">
        Toggle Me!
      </div>
    </label>

  </div>-->

</template>

<style scoped>
/* Toggle A */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

/*!* Toggle B *!*/
/*input:checked ~ .dot {*/
/*  transform: translateX(100%);*/
/*  background-color: #48bb78;*/
/*}*/

</style>