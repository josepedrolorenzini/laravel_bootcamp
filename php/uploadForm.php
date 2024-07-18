<?php

$filename = basename($_FILES['myfile']['name']);

if(isset($_POST['submit'])){

  if (move_uploaded_file($_FILES['myfile']['tmp_name'], "files/$filename")) {
    echo "File uploaded";
  } else {
     throw new Error("An error occurred");
    ;
  }

}
?>
<form action="<?php echo htmlspecialchars($_SERVER['REQUEST_URI']); ?>" method="post" enctype="multipart/form-data">
  <label>File: <input type="file" name="myfile" accept="image/jpeg" /></label>
    <input type="submit" value="send"  name="submit"/>
  </form>


  <?php
  echo $_FILES['myfile']['tmp_name'] ."<br>" ;
  echo $filename ; 
   
  $photo = $_FILES['C:\laragon\www\php\files\6c0354c1d589045e7c18_marble_ceramic_corp1.jpg'] ;
  echo $photo;
   var_dump($filename);
  ?>



