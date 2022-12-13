type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean,
}

export const Greet = (props:GreetProps) => {
    return(
        <div>
            {
              props.isLoggedIn ? <h2>Welcome {props.name}! I have {props.messageCount} massage! </h2> : 'Welcome Guest'    
            }
           
        </div>
    )
   
}