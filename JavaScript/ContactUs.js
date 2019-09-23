
function send()
{

var Name = frmContactUs.txtName.value;
var Surname = frmContactUs.txtSurname.value;
var Email = frmContactUs.txtEmail.value;
var Confirm = frmContactUs.txtConfirm.value;
var msg;

atpos = Email.indexOf("@");
dotpos = Email.lastIndexOf(".");

if (Name=="")
{
alert("Please enter your name");
frmContactUs.txtName.focus();
}
else if (Surname=="")
{
alert("Please enter your Surname");
frmContactUs.txtSurname.focus();
}
else if (isNaN(Name)==false || isNaN(Surname)==false)
alert("Name and Surname must be text only");
else if (Email=="")
{
alert("Please enter your Email address");
frmContactUs.txtEmail.focus();
}
else if (Confirm=="")
{
alert("Please type your email address again");
frmContactUs.txtConfirm.focus();
}
else if (Email!= Confirm)
{
alert("Your Email does not match");
frmContactUs.txtConfirm.focus();
}
else 

alert("Sent!");


}