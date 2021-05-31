<template>
  <div class="min-h-screen bg-teal antialiased xl:flex xl:flex-col xl:h-screen">
    <site-header></site-header>
    <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
      <search-filters></search-filters>
      <main class="px-3 py-6 space-y-2 xl:flex-1 xl:overflow-x-hidden">
        <h3 class="text-gray-900 text-xl font-medium">Los Angeles</h3>
        <p class="text-gray-600 leading-5">Live like the stars in these luxurious Southern California estates</p>

        <div
          class="
            sm:flex
            sm:-mx-2
            sm:overflow-x-auto
            scrollbar scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-md scrollbar-track-gray-200
            sm:pb-8
          "
        >
          <div class="mt-6 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2" v-for="i in 7" :key="i">
            <div class="relative pb-2/3 rounded-lg shadow-md">
              <img
                class="absolute h-full w-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdl
              fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="house"
              />
            </div>
            <div class="relative px-4 -mt-16">
              <div class="bg-white rounded-lg px-4 py-4 shadow-lg">
                <div class="flex items-center">
                  <span
                    class="
                      inline-block
                      bg-green-200
                      text-green-800
                      rounded-full
                      px-2
                      py-px
                      font-semibold
                      uppercase
                      tracking-wide
                      text-xs
                    "
                    >Plus</span
                  >
                  <div class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">3 Beds &bull; 2 Baths</div>
                </div>
                <h4 class="mt-1 text-gray-900 font-semibold text-lg">Modern home in city center</h4>
                <div class="mt-1">
                  <span class="text-gray-900">$1,400</span>
                  <span class="ml-1 text-sm text-gray-600">/wk</span>
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    class="h-4 w-4 fill-current text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371
                     1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l
                     -3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1
                     1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <span class="ml-2">34 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SiteHeader from "../components/SiteHeader";
import SearchFilters from "../components/SearchFilters";
export default {
  name: "Home",
  components: { SiteHeader, SearchFilters },
};
</script>
