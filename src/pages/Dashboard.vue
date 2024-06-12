<template>
  <div class="flex h-screen">
    <div class="w-1/5 bg-gray-100 p-5">
      <div class="text-lg font-bold mb-8">CRUD OPERATIONS</div>
      <nav>
        <ul>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2 bg-yellow-400 rounded-md">
              Home
            </a>
          </li>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2"> Course </a>
          </li>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2">Students </a>
          </li>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2"> Payment </a>
          </li>
          <li class="mb-5">
            <a href="#" class="flex items-center p-2"> Report </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2"> Settings </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2"> Logout </a>
          </li>
          <li>
            <button class="flex items-center p-2 bg-slate-700 w-full rounded-md text-white" @click="exit">Exit</button>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-4/5 p-10">
      <div class="grid grid-cols-4 gap-4">
        <div class="bg-blue-100 p-5 rounded-md">
          <div class="flex items-center">
            <span class="material-icons text-4xl text-blue-600">school</span>
            <div class="ml-auto text-3xl font-bold">20</div>
          </div>
          <div class="mt-3">Students</div>
        </div>
        <div class="bg-pink-100 p-5 rounded-md">
          <div class="flex items-center">
            <span class="material-icons text-4xl text-pink-600">bookmark</span>
            <div class="ml-auto text-3xl font-bold">13</div>
          </div>
          <div class="mt-3">Course</div>
        </div>
        <div class="bg-green-200 p-5 rounded-md">
          <div class="flex items-center space-x-2">
            <span class="material-icons text-4xl text-green-600">payments</span>
            <div class="ml-auto text-xl font-bold">400,000</div>
          </div>
          <div class="mt-3">Payments</div>
        </div>
        <div class="bg-orange-100 p-5 rounded-md">
          <div class="flex items-center">
            <span class="material-icons text-4xl text-orange-600">person</span>
            <div class="ml-auto text-3xl font-bold">13</div>
          </div>
          <div class="mt-3">Users</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    exit() {
      // Login logikasi, server bilan autentifikatsiya yoki oddiy misol
      // Foydalanuvchini dashboard sahifasiga yo'naltirish
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
