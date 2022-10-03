import './css/text-component.scss'

export const TextComponent =function ({title,details, children}) {
  return (
    <div className='text-component'>
      <h3><b>{title}</b></h3>
      {details && <p dangerouslySetInnerHTML={{__html:details}}/>}
      {children}
  
    </div>
  );
}

