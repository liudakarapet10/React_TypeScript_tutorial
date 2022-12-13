type HorisintalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
  position: Exclude<`${HorisintalPosition}-${VerticalPosition}`, 'center-center'> | 'center'  
}

export const Toast = ({position} : ToastProps) => {
  return <div>Toast Notifacation posotion - {position}</div>
}