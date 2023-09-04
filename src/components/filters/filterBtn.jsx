export function FilterBtn({ text, activeFilter, onFilter }) {
  const handleClick = (val)=> {  
    onFilter(val)
  }
  return (
    <li
      className={`${activeFilter === text ? 'text-textPrimary' : 'text-textSecondary'} font-mainSemibold text-xl hover:text-textPrimary capitalize transition-all`}
      role="button"
      onClick={()=> handleClick(text)}
    >
      {text}
    </li>
  );
}
