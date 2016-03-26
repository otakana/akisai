<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];
$mail_to = 'akisai2016@gmail.com';
$subject = 'Message from a site vivitor '.$field_name;
$body_message = 'Form: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;
$headers = 'Form: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
$mail_status = mail($mail_to, $subject, $body_message, $headers);
if($email_status){?>
	<script language = "javascript" type="text/javascript">
		window.location = 'hogehoge.html';//送信成功
	</script>
<?php
}else{?>
	<script language = "javascript" type="text/javascript">
		alert("メールの送信に失敗しました。こちらまでお問い合わせください。");
		window.location = 'test.html';//送信失敗
	</script>
<?php
}
?>