<template>
  <div class="bg-[#38383B] rounded-3xl highlight min-w-84 p-5">
    <div class="flex flex-col gap-4">
      <div class="flex items-center text-zinc-500">
        <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-zinc-500 hover:text-gray-500">
          <span class="sr-only">Previous month</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="flex-auto text-center text-white font-semibold">
          November
        </div>
        <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-zinc-500 hover:text-gray-500">
          <span class="sr-only">Next month</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="flex flex-col gap-2 max-h-48 overflow-hidden relative p-px">
        <div class="grid grid-cols-7 text-center text-zinc-500">
          <div class="text-xs font-medium leading-6">
            M
          </div>
          <div class="text-xs font-medium leading-6">
            T
          </div>
          <div class="text-xs font-medium leading-6">
            W
          </div>
          <div class="text-xs font-medium leading-6">
            T
          </div>
          <div class="text-xs font-medium leading-6">
            F
          </div>
          <div class="text-xs font-medium leading-6">
            S
          </div>
          <div class="text-xs font-medium leading-6">
            S
          </div>
        </div>
        <div class="isolate grid grid-cols-7 gap-px rounded-lg bg-white bg-opacity-8 ring-1 ring-white ring-opacity-8 text-sm">
          <button type="button" class="rounded-tl-lg bg-[#313134] py-1.5 text-zinc-500 text-opacity-70 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2021-12-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
          </button>
          <button type="button" class="bg-[#313134] py-1.5 text-zinc-500 text-opacity-70 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2021-12-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
          </button>
          <button type="button" class="bg-[#313134] py-1.5 text-zinc-500 text-opacity-70 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2021-12-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
          </button>
          <button type="button" class="bg-[#313134] py-1.5 text-zinc-500 text-opacity-70 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2021-12-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
          </button>
          <button type="button" class="bg-[#313134] py-1.5 text-zinc-500 text-opacity-70 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2021-12-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
          </button>
          <button type="button" class="rounded-tr-lg bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-07" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">7</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-08" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">8</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-09" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">9</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-10" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">10</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-11" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">11</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-cyan/100 font-semibold hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-12" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">12</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-13" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">13</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-14" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">14</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-15" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">15</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-16" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">16</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-17" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">17</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-18" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">18</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-19" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">19</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-20" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">20</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-21" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">21</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-22" class="bg-cyan mx-auto flex h-7 w-7 items-center justify-center rounded-full font-semibold text-zinc-900">22</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-23" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">23</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-24" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">24</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-25" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">25</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-26" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">26</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-27" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-28" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-29" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-30" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
          </button>
          <button type="button" class="rounded-bl-lg bg-[#38383B] py-1.5 text-zinc-300 font-medium hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-01-31" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-500 hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-02-01" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-500 hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-02-02" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-500 hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-02-03" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-500 hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-02-04" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
          </button>
          <button type="button" class="bg-[#38383B] py-1.5 text-zinc-500 hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-02-05" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
          </button>
          <button type="button" class="rounded-br-lg bg-[#38383B] py-1.5 text-zinc-500 hover:bg-[#48484A] focus:z-10">
            <time datetime="2022-02-06" class="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
          </button>
        </div>

        <div class="absolute inset-x-none bottom-none min-h-24 select-none pointer-events-none bg-gradient-to-b from-transparent/100 to-[#38383B]/100 z-100" />
      </div>

      <Button
        type="button"
        bg="cyan/100"
        border-transparent
        text-zinc-900
        w-full
      >
        Publish
      </Button>
    </div>
  </div>
</template>
