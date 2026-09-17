<template>
  <header class="navbar">
    <div class="navbar-inner">
      <router-link to="/" class="logo"
        >Scripts<span>Executores</span></router-link
      >
      <nav class="nav-links">
        <router-link to="/" exact-active-class="active">Todos</router-link>
        <router-link to="/?categoria=Script" exact-active-class="active"
          >Scripts</router-link
        >
        <router-link to="/?categoria=Executor" exact-active-class="active"
          >Executores</router-link
        >
      </nav>
    </div>
  </header>
</template>
