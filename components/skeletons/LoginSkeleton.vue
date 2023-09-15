<template>
  <div class="animate-pulse">
    <!-- logo -->
    <div class="mt-[60px]">
      <div class="bg-slate-200 mx-auto h-[120px] w-[120px] max-w-full bg" />
    </div>

    <div class="text-center mt-10">
      <h1 class="text-2xl font-bold mb-2 text-slate-200 bg-slate-200 w-fit h-fit m-auto overflow-hidden">Login</h1>
    </div>

    <div class="p-[20px]">
      <div>
        <div class="mb-4">
          <input disabled required type="email" name="email" id="email" placeholder="" class="bg-slate-200 border-2 w-full p-4 rounded-lg" />
        </div>
        <div class="mb-4">
          <div class="relative">
            <input disabled required type="password" name="password" id="password" placeholder="" class="bg-slate-200 border-2 w-full p-4 rounded-lg" />
            <button class="absolute right-3 top-1/2 -translate-y-1/2" type="button">
            </button> 
          </div>         
        </div>
        <div class="mb-4">
          <button class="bg-slate-200 text-slate-200 px-4 py-3 rounded font-medium w-full">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>