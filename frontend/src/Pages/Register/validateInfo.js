export default function validateInfo(values){
let errors ={}

if(!values.firstName.trim())
{
    errors.firstName= "FirstName Required"
}

if(!values.lastName.trim())
{
    errors.lastName="LastName Required"
}

if(!values.email)
{
    errors.email ="Email Required"
}else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/i.test(values.email))
{
    errors.email="Email address is invalid"
}

if(!values.password){
    errors.password ="Password is required "
}else if (values.password.length <= 6 )
{
    errors.password ="Password needs to be 6 characters or more"
}
if(!values.confirmpassword){
    errors.confirmpassword ="Confirm Password is required"
}
else if(values.confirmpassword != values.password)
{
    errors.confirmpassword ="Password donot match"
}

return errors;
}

