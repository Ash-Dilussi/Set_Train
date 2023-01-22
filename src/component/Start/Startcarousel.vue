<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide relative h-3/4"
    data-bs-ride="carousel"
  >
    <div
      class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
    >
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner relative w-full overflow-hidden">
      <div class="carousel-item active float-left w-full">
        <img
          src="https://images.unsplash.com/photo-1612083111232-29f08821e47a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          class="block w-full"
          alt="Wild Landscape"
        />
      </div>
      <div class="carousel-item float-left w-full">
        <img
          src=" https://images.unsplash.com/photo-1543967625-f24827a5fdb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaWx3YXl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          class="block w-full"
          alt="Camera"
        />
      </div>
      <div class="carousel-item float-left w-full">
        <img
          src="https://images.unsplash.com/photo-1589392764091-2aaa3afe42df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          class="block w-full"
          alt="Exotic Fruits"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
