<template>
  <header class="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
    <div class="flex justify-between items-end px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center">
      <div>
        <svg class="h-9 w-auto" viewBox="0 0 185 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M62.824 12.2c1.616 0 2.976.544 4.08 1.632 1.104 1.088 1.656 2.424 1.656 4.008s-.552 2.92-1.656 4.008c-1.104 1.088-2.464 1.632-4.08 1.632h-2.952V29H56.56V12.2h6.264zm0 8.184c.704 0 1.288-.24 1.752-.72.464-.496.696-1.104.696-1.824 0-.736-.232-1.344-.696-1.824-.464-.48-1.048-.72-1.752-.72h-2.952v5.088h2.952zM70.572 29V11.48h3.096V29h-3.096zm15.05-12h3.096v12h-3.096v-1.416c-.928 1.168-2.232 1.752-3.912 1.752-1.6 0-2.976-.608-4.128-1.824-1.136-1.232-1.704-2.736-1.704-4.512 0-1.776.568-3.272 1.704-4.488 1.152-1.232 2.528-1.848 4.128-1.848 1.68 0 2.984.584 3.912 1.752V17zm-5.712 8.448c.624.624 1.416.936 2.376.936s1.752-.312 2.376-.936c.64-.64.96-1.456.96-2.448s-.32-1.8-.96-2.424c-.624-.64-1.416-.96-2.376-.96s-1.752.32-2.376.96c-.624.624-.936 1.432-.936 2.424s.312 1.808.936 2.448zM99.35 17h3.311l-4.368 12c-.624 1.728-1.456 2.976-2.496 3.744-1.024.784-2.304 1.136-3.84 1.056v-2.88c.832.016 1.488-.16 1.968-.528.496-.368.888-.96 1.176-1.776L90.181 17h3.384l3.12 8.064L99.35 17z"
            fill="#fff"
          />
          <path
            d="M109.847 29.336c-1.808 0-3.32-.608-4.536-1.824-1.2-1.216-1.8-2.72-1.8-4.512 0-1.792.6-3.296 1.8-4.512 1.216-1.216 2.728-1.824 4.536-1.824 1.168 0 2.232.28 3.192.84.96.56 1.688 1.312 2.184 2.256l-2.664 1.56a2.697 2.697 0 00-1.104-1.176 3.11 3.11 0 00-1.632-.432c-.928 0-1.696.312-2.304.936-.608.608-.912 1.392-.912 2.352 0 .944.304 1.728.912 2.352.608.608 1.376.912 2.304.912.624 0 1.176-.136 1.656-.408.496-.288.864-.68 1.104-1.176l2.688 1.536a6.1 6.1 0 01-2.232 2.28c-.96.56-2.024.84-3.192.84zM125.841 17h3.096v12h-3.096v-1.416c-.928 1.168-2.232 1.752-3.912 1.752-1.6 0-2.976-.608-4.128-1.824-1.136-1.232-1.704-2.736-1.704-4.512 0-1.776.568-3.272 1.704-4.488 1.152-1.232 2.528-1.848 4.128-1.848 1.68 0 2.984.584 3.912 1.752V17zm-5.712 8.448c.624.624 1.416.936 2.376.936s1.752-.312 2.376-.936c.64-.64.96-1.456.96-2.448s-.32-1.8-.96-2.424c-.624-.64-1.416-.96-2.376-.96s-1.752.32-2.376.96c-.624.624-.936 1.432-.936 2.424s.312 1.808.936 2.448zm18.479-5.472h-2.712v4.992c0 .416.104.72.312.912.208.192.512.304.912.336.4.016.896.008 1.488-.024V29c-2.128.24-3.632.04-4.512-.6-.864-.64-1.296-1.784-1.296-3.432v-4.992h-2.088V17h2.088v-2.424l3.096-.936V17h2.712v2.976zm3.719-4.416a1.882 1.882 0 01-1.896-1.896c0-.512.184-.96.552-1.344.384-.384.832-.576 1.344-.576.528 0 .976.192 1.344.576.384.384.576.832.576 1.344 0 .512-.192.96-.576 1.344a1.83 1.83 0 01-1.344.552zM140.791 29V17h3.096v12h-3.096zm16.154-1.488c-1.232 1.216-2.736 1.824-4.512 1.824-1.776 0-3.28-.608-4.512-1.824-1.216-1.232-1.824-2.736-1.824-4.512 0-1.776.608-3.272 1.824-4.488 1.232-1.232 2.736-1.848 4.512-1.848 1.776 0 3.28.616 4.512 1.848 1.232 1.216 1.848 2.712 1.848 4.488 0 1.776-.616 3.28-1.848 4.512zm-6.84-2.136c.624.624 1.4.936 2.328.936.928 0 1.704-.312 2.328-.936.624-.624.936-1.416.936-2.376s-.312-1.752-.936-2.376c-.624-.624-1.4-.936-2.328-.936-.928 0-1.704.312-2.328.936-.608.624-.912 1.416-.912 2.376s.304 1.752.912 2.376zm17.538-8.712c1.312 0 2.392.44 3.24 1.32.864.88 1.296 2.096 1.296 3.648V29h-3.096v-6.984c0-.8-.216-1.408-.648-1.824-.432-.432-1.008-.648-1.728-.648-.8 0-1.44.248-1.92.744s-.72 1.24-.72 2.232V29h-3.096V17h3.096v1.344c.752-1.12 1.944-1.68 3.576-1.68z"
            fill="#A3BFFA"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.911 11.8l-7.698-4.445V28h9v2h-44v-2h4V15.28l-3.728.933L0 14.273 21.09 9h3.122a9.551 9.551 0 00-.68 2.559l-.483 3.975 5.164-2.982V28h5V7.356l-7.696 4.443A7.502 7.502 0 0128.082 7h-4.12a7.489 7.489 0 016.646-2.973L25.017.8a7.488 7.488 0 016.696.402c1.039.6 1.88 1.41 2.5 2.347a7.461 7.461 0 012.5-2.347 7.49 7.49 0 016.698-.402l-5.593 3.228A7.488 7.488 0 0144.464 7h-4.12a7.498 7.498 0 012.567 4.8zM24.213 28V18h-6v10h6zm-11-8a2 2 0 11-4 0 2 2 0 014 0z"
            fill="#A3BFFA"
          />
        </svg>
      </div>
      <div class="flex sm:hidden">
        <button @click="toggle" type="button" class="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
          <svg
            v-if="!isOpen"
            class="h-6 w-6 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="h-6 w-6 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <nav class="sm:flex sm:items-center sm:mt-1 md:mt-0 xl:flex-1 xl:justify-between" :class="{ hidden: !isOpen, block: isOpen }">
      <div class="hidden xl:block mx-4 xl:max-w-xl xl:w-full">
        <div class="relative max-w-xs w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pt-1">
            <svg class="w-5 h-5 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.32 12.906l1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 01-2.122 2.122l-3-3a1.497 1.497
               0 01-.437-1.145l-1.096-1.096a8 8 0 111.414-1.414zM8 14A6 6 0 108 2a6 6 0 000 12z"
              />
            </svg>
          </div>
          <input
            class="
              block
              w-full
              bg-teal
              focus:outline-none
              focus:bg-gray-200
              focus:text-gray-500
              text-gray-900
              rounded-lg
              pl-10
              pr-4
              pt-1
              pb-1
            "
            placeholder="Search by keywords"
          />
        </div>
      </div>

      <div class="sm:flex sm:items-center sm:mt-1 md:mt-0">
        <div class="px-4 pt-3 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:pr-0">
          <router-link
            to="#"
            class="
              block
              px-2
              py-1
              rounded
              font-semibold
              text-white
              hover:bg-gray-800
              sm:text-sm
              sm:font-normal
              xl:text-gray-900
              xl:hover:bg-gray-100
            "
          >
            List your property
          </router-link>
          <router-link
            to="#"
            class="
              mt-2
              block
              px-2
              py-1
              rounded
              font-semibold
              text-white
              hover:bg-gray-800
              sm:mt-0
              sm:text-sm
              sm:font-normal
              xl:text-gray-900
              xl:hover:bg-gray-100
            "
          >
            Trips
          </router-link>
          <router-link
            to="#"
            class="
              mt-2
              block
              px-2
              py-1
              rounded
              font-semibold
              text-white
              hover:bg-gray-800
              sm:mt-0
              sm:text-sm
              sm:font-normal
              xl:text-gray-900
              xl:hover:bg-gray-100
            "
          >
            Messages
          </router-link>
        </div>
        <div class="relative px-4 py-5 sm:py-0">
          <div class="flex items-center sm:hidden">
            <img
              class="h-10 w-10 object-cover rounded-full border-2 border-gray-600 sm:h-8 sm:w-8 xl:border-gray-300"
              src="https://pbs.twimg.com/profile_images/1345141426347192321/BGckg2a1_400x400.jpg"
              alt="Profile"
            />
            <span class="ml-3 font-semibold text-gray-200">Benn Ajax</span>
          </div>
          <button @click="toggleDropDown" class="hidden sm:block focus:outline-none" type="button">
            <img
              class="h-8 w-8 object-cover rounded-full border-2 border-gray-300"
              src="https://pbs.twimg.com/profile_images/1345141426347192321/BGckg2a1_400x400.jpg"
              alt="Profile"
            />
          </button>
          <div :class="dropDownOpen ? 'sm:block' : 'sm:hidden'">
            <button
              @click="dropDownOpen = false"
              type="button"
              class="hidden sm:block sm:fixed sm:opacity-0 sm:inset-0 sm:cursor-default sm:w-full sm:h-full sm:z-10"
            ></button>
            <div
              class="
                mt-5
                sm:bg-white
                sm:rounded-lg
                sm:absolute
                sm:right-4
                sm:mt-3
                sm:w-48
                sm:shadow-xl
                sm:py-1
                sm:text-sm
                sm:z-10
              "
            >
              <router-link
                to="#"
                class="block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-1 sm:hover:bg-teal-500"
                >Account Settings</router-link
              >
              <router-link
                to="#"
                class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-1 sm:hover:bg-teal-500"
                >Support</router-link
              >
              <router-link
                to="#"
                class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-1 sm:hover:bg-teal-500"
                >Sign out</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "SiteHeader",
  mounted() {
    const onEscape = (e) => {
      if (!this.dropDownOpen || e.key !== "Escape") {
        return;
      }
      this.dropDownOpen = false;
    };
    document.addEventListener("keydown", onEscape);
    this.on("hook:destroyed", () => {
      document.removeEventListener("keydown", onEscape);
    });
  },
  data: function () {
    return {
      isOpen: false,
      dropDownOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    toggleDropDown() {
      this.dropDownOpen = !this.dropDownOpen;
    },
  },
};
</script>

<style scoped></style>
