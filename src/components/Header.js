import React from 'react';
const Header = ()=>{

const CurrentTime = ()=>{
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var dateTime = date;
return dateTime
}
    return(
        <div>
             <h2 class="athelas ph3 ph0-l">ReactJS Application'</h2>
             <h3 class="athelas ph3 ph0-l">{'Current time is: ' + CurrentTime()}</h3>
        </div>
    )
}
export default Header;
