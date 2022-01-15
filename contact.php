<?php
//variable setting
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];

//Check input fields

if(empty($name)|| empty($email) || empty($subject) || empty($message))
{
    echo "please fill all the fields";
}
else{
    
    mail("testlaravel26@gmail.com", "phuldev Mandal", $message, "From: $name <$email>");
    echo 
    "<script type='text/javascript'>
        alert('Your Message Sent Successfully');
        window.history.log(-1);
    </script>";
}

?>