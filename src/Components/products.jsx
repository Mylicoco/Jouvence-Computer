import Modal from "./Modal";

export default function Products(props) {
  const { item } = props;
  return (
    <div>
    
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="p-8 rounded-t-lg" src="4.jpeg" alt="product image" />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 hover:text-blue-800 hover:text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>

            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-md font-bold text-gray-900 dark:text-white">
              {item.price}XAF{" "}
            </span>

            <Modal item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
