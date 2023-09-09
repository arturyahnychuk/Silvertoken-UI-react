export function Info({ className, type, text }) {
  return (
    <div className="relative h-fit group cursor-default">
      {type === "info" ? (
        <svg
          className={className}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00001 2C6.81332 2 5.65328 2.35189 4.66658 3.01118C3.67989 3.67047 2.91085 4.60754 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17054C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.59131 2 8.00001 2ZM8.00001 13C7.0111 13 6.0444 12.7068 5.22215 12.1574C4.39991 11.6079 3.75904 10.827 3.38061 9.91342C3.00217 8.99979 2.90315 7.99445 3.09608 7.02455C3.289 6.05464 3.76521 5.16373 4.46447 4.46447C5.16373 3.7652 6.05465 3.289 7.02455 3.09607C7.99446 2.90315 8.99979 3.00216 9.91342 3.3806C10.8271 3.75904 11.6079 4.3999 12.1574 5.22215C12.7068 6.0444 13 7.01109 13 8C13 9.32608 12.4732 10.5979 11.5355 11.5355C10.5979 12.4732 9.32609 13 8.00001 13Z"
            fill="#231F20"
          />
          <path
            d="M7.99999 6.85003C7.86739 6.85003 7.74021 6.90271 7.64644 6.99648C7.55267 7.09024 7.49999 7.21742 7.49999 7.35003V10.75C7.49999 10.8826 7.55267 11.0098 7.64644 11.1036C7.74021 11.1974 7.86739 11.25 7.99999 11.25C8.1326 11.25 8.25978 11.1974 8.35355 11.1036C8.44732 11.0098 8.49999 10.8826 8.49999 10.75V7.35003C8.49999 7.21742 8.44732 7.09024 8.35355 6.99648C8.25978 6.90271 8.1326 6.85003 7.99999 6.85003ZM7.99999 4.80003C7.86464 4.80512 7.73636 4.86184 7.64152 4.95854C7.54667 5.05525 7.49245 5.1846 7.48999 5.32003V5.40003C7.48976 5.46526 7.5031 5.52984 7.52918 5.58963C7.55526 5.64943 7.59351 5.70314 7.64148 5.74735C7.68945 5.79156 7.7461 5.8253 7.80783 5.84642C7.86955 5.86754 7.93499 5.87558 7.99999 5.87003C8.13102 5.86508 8.25534 5.81081 8.34806 5.71809C8.44078 5.62538 8.49504 5.50106 8.49999 5.37003V5.25003C8.50039 5.18648 8.48732 5.12357 8.46164 5.06544C8.43597 5.00731 8.39827 4.95527 8.35104 4.91276C8.3038 4.87025 8.2481 4.83822 8.18759 4.81879C8.12708 4.79936 8.06315 4.79297 7.99999 4.80003Z"
            fill="#231F20"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.625 11.25C8.625 11.3736 8.58835 11.4945 8.51967 11.5972C8.451 11.7 8.35338 11.7801 8.23918 11.8274C8.12498 11.8747 7.99931 11.8871 7.87807 11.863C7.75683 11.8389 7.64547 11.7794 7.55806 11.6919C7.47065 11.6045 7.41113 11.4932 7.38701 11.3719C7.3629 11.2507 7.37527 11.125 7.42258 11.0108C7.46988 10.8966 7.54999 10.799 7.65277 10.7303C7.75555 10.6617 7.87639 10.625 8 10.625C8.16576 10.625 8.32473 10.6908 8.44195 10.8081C8.55916 10.9253 8.625 11.0842 8.625 11.25ZM8 4.625C6.6875 4.625 5.625 5.57812 5.625 6.75V7C5.625 7.09946 5.66451 7.19484 5.73484 7.26516C5.80516 7.33549 5.90055 7.375 6 7.375C6.09946 7.375 6.19484 7.33549 6.26517 7.26516C6.33549 7.19484 6.375 7.09946 6.375 7V6.75C6.375 5.99187 7.10375 5.375 8 5.375C8.89625 5.375 9.625 5.99187 9.625 6.75C9.625 7.50813 8.89625 8.125 8 8.125C7.90055 8.125 7.80516 8.16451 7.73484 8.23483C7.66451 8.30516 7.625 8.40054 7.625 8.5V9C7.625 9.09946 7.66451 9.19484 7.73484 9.26517C7.80516 9.33549 7.90055 9.375 8 9.375C8.09946 9.375 8.19484 9.33549 8.26517 9.26517C8.33549 9.19484 8.375 9.09946 8.375 9V8.84875C9.50688 8.6875 10.375 7.8075 10.375 6.75C10.375 5.57812 9.3125 4.625 8 4.625ZM14.375 8C14.375 9.26086 14.0011 10.4934 13.3006 11.5418C12.6001 12.5901 11.6045 13.4072 10.4396 13.8897C9.27473 14.3722 7.99293 14.4985 6.7563 14.2525C5.51967 14.0065 4.38376 13.3994 3.4922 12.5078C2.60064 11.6162 1.99348 10.4803 1.7475 9.2437C1.50152 8.00707 1.62776 6.72527 2.11027 5.56039C2.59278 4.39551 3.40988 3.39988 4.45824 2.69938C5.50661 1.99889 6.73915 1.625 8 1.625C9.69015 1.62698 11.3105 2.29927 12.5056 3.49439C13.7007 4.6895 14.373 6.30985 14.375 8ZM13.625 8C13.625 6.88748 13.2951 5.79994 12.677 4.87492C12.0589 3.94989 11.1804 3.22892 10.1526 2.80318C9.12476 2.37743 7.99376 2.26604 6.90262 2.48308C5.81148 2.70012 4.8092 3.23585 4.02253 4.02252C3.23586 4.80919 2.70013 5.81147 2.48309 6.90262C2.26604 7.99376 2.37744 9.12476 2.80318 10.1526C3.22892 11.1804 3.94989 12.0589 4.87492 12.677C5.79995 13.2951 6.88748 13.625 8 13.625C9.49134 13.6233 10.9211 13.0302 11.9757 11.9756C13.0302 10.9211 13.6233 9.49134 13.625 8Z"
            fill="black"
          />
        </svg>
      )}
      <div className="max-w-[150px] w-[150px] transition-all opacity-0 group-hover:opacity-100 z-[-999] group-hover:z-[999] arrow-up rounded absolute top-[calc(100%+10px)] left-[50%] translate-x-[-50%] px-3 py-2 bg-primitives-100 shadow-md">
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
}