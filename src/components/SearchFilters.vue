<template>
  <section class="bg-gray-800 xl:w-72">
    <div class="flex justify-between px-4 py-2 xl:hidden">
      <div class="relative max-w-xs w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.32 12.906l1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 01-2.122 2.122l-3-3a1.497 1.497
               0 01-.437-1.145l-1.096-1.096a8 8 0 111.414-1.414zM8 14A6 6 0 108 2a6 6 0 000 12z"
              fill="#A0AEC0"
            />
          </svg>
        </div>
        <input
          class="
            block
            w-full
            bg-gray-900
            focus:outline-none
            focus:bg-white
            focus:text-gray-900
            text-white
            rounded-lg
            pl-10
            pr-4
            pt-1.5
            pb-2
          "
          placeholder="Search by keywords"
        />
      </div>
      <button
        @click="toggle"
        type="button"
        class="
          inline-flex
          items-center
          bg-gray-700
          rounded-lg
          shadow
          ml-2
          pl-3
          pr-4
          hover:bg-gray-600
          focus:outline-none
          focus:text-gray-900
        "
      >
        <svg class="fill-current text-gray-400" width="18" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 1a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm3 6a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zm4 5a1 1
             0 100 2h4a1 1 0 100-2H7z"
          />
        </svg>
        <span class="ml-1 text-white font-medium">Filters</span>
      </button>
    </div>
    <form
      v-show="isOpen"
      class="
        xl:h-full
        xl:flex xl:flex-col
        xl:justify-between
        xl:overflow-y-auto
        xl:scrollbar xl:scrollbar-thin xl:scrollbar-thumb-teal-500 xl:scrollbar-track-gray-600
      "
    >
      <div class="lg:flex xl:block">
        <fieldset
          class="
            px-4
            py-4
            border-t border-gray-900
            sm:flex
            sm:items-center
            sm:-mx-2
            lg:w-1/3
            lg:flex-wrap
            lg:border-r
            xl:border-0
            xl:w-full
            xl:mx-0
          "
        >
          <div class="flex -mx-2 sm:w-1/2 sm:mx-0 lg:w-full">
            <label class="block w-1/2 px-2">
              <span class="text-sm font-semibold text-gray-400">Bedrooms</span>
              <select class="mt-1 block w-full border-transparent rounded-lg bg-gray-700 text-white shadow">
                <option>4</option>
                <option>5</option>
              </select>
            </label>
            <label class="block w-1/2 px-2">
              <span class="text-sm font-semibold text-gray-400">Bathrooms</span>
              <select class="mt-1 block w-full border-transparent rounded-lg bg-gray-700 text-white shadow">
                <option>2</option>
              </select>
            </label>
          </div>

          <div class="mt-4 flex sm:w-1/2 sm:mx-0 sm:px-2 sm:mt-0 lg:w-full">
            <label class="block w-full">
              <span class="text-sm font-semibold text-gray-400">Price Range</span>
              <select class="mt-1 block w-full border-transparent rounded-lg bg-gray-700 text-white shadow">
                <option>Up to $2000/wk</option>
              </select>
            </label>
          </div>
        </fieldset>
        <fieldset class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-r xl:border-r- 0 xl:w-full xl:mx-0">
          <span class="block text-sm font-semibold text-gray-400"> Property Type </span>
          <div class="sm:flex sm:justify-between sm:w-5/6 lg:block">
            <label class="mt-3 flex items-center">
              <input class="bg-gray-900 border-transparent text-indigo-500" type="radio" name="propertyType" value="house" />
              <span class="ml-2 text-white">House</span>
            </label>
            <label class="mt-3 flex items-center">
              <input class="bg-gray-900 border-transparent text-indigo-500" type="radio" name="propertyType" value="house" />
              <span class="ml-2 text-white">Apartment</span>
            </label>
            <label class="mt-3 flex items-center">
              <input class="bg-gray-900 border-transparent text-indigo-500" type="radio" name="propertyType" value="house" />
              <span class="ml-2 text-white">Loft</span>
            </label>
            <label class="mt-3 flex items-center">
              <input class="bg-gray-900 border-transparent text-indigo-500" type="radio" name="propertyType" value="house" />
              <span class="ml-2 text-white">Townhouse</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full xl:mx-0">
          <span class="block text-sm font-semibold text-gray-400">Amenities</span>
          <div class="sm:flex sm:flex-wrap sm:-mx-2 xl:block">
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
              <input class="bg-gray-900 border-transparent rounded-md text-indigo-500" type="checkbox" name="balcony" />
              <span class="ml-2 text-white">Balcony</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
              <input class="bg-gray-900 border-transparent rounded-md text-indigo-500" type="checkbox" name="parking" />
              <span class="ml-2 text-white">Kid friendly</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
              <input class="bg-gray-900 border-transparent rounded-md text-indigo-500" type="checkbox" name="pool" />
              <span class="ml-2 text-white">Pool</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
              <input class="bg-gray-900 border-transparent rounded-md text-indigo-500" type="checkbox" name="beach" />
              <span class="ml-2 text-white">Beach</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
              <input class="bg-gray-900 border-transparent rounded-md text-indigo-500" type="checkbox" name="petFriendly" />
              <span class="ml-2 text-white">Pet friendly</span>
            </label>

            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
              <input class="bg-gray-900 border-transparent rounded-md text-indigo-500" type="checkbox" name="airConditioning" />
              <span class="ml-2 text-white">Parking</span>
            </label>

            <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
              <input class="bg-gray-900 border-transparent rounded-md text-indigo-500" type="checkbox" name="airConditioning" />
              <span class="ml-2 text-white">Air conditioning</span>
            </label>
          </div>
        </fieldset>
      </div>
      <div class="bg-gray-900 px-4 py-4">
        <button
          type="button"
          class="
            block
            w-full
            bg-teal-500
            hover:bg-indigo-400
            font-semibold
            text-white
            px-4
            py-2
            rounded-lg
            sm:w-auto
            focus:outline-none
            focus:bg-indigo-500
            xl:w-full
          "
        >
          Update results
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "SearchFilters",
  data: function () {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped></style>
