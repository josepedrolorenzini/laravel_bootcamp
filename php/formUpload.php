<?php

$submitUploadForm = function() {
    if(isset($_POST['submit'])){
            echo 'Uploading';

     if(file_exists($_FILES['uploadFile']['name'])){
         echo 'File already exists.';
     }else{
         move_uploaded_file($_FILES['uploadFile']['tmp_name'], 'uploads/'. $_FILES['uploadFile']['name']);
         echo 'File uploaded successfully.';
         echo "<b>File to be uploaded: </b>" . $_FILES["uploadFile"]["name"] . "<br>";
        echo "<b>Type: </b>" . $_FILES["uploadFile"]["type"] . "<br>";
        echo "<b>File Size: </b>" . $_FILES["uploadFile"]["size"]/1024 . "<br>";
        echo "<b>Store in: </b>" . $_FILES["uploadFile"]["tmp_name"] . "<br>";

     }
    }

};


?>



<form action="<?php echo $_SERVER['PHP SELF'] ?>" method="POST" enctype="multipart/form-data">
<input type="file" name="uploadFile"></input><br>
<input type="submit" name="submit" value="upload">
</form>
<div>
 <strong><?= $submitUploadForm(); ?></strong>   
</div>
<script type="text/javascript" src="script.js"></script>