 <?php
  session_start();
  
  $db = new mysqli("localhost","as981217","Hyunji0901","as981217");
  $db->set_charset("utf8");

  function mq($sql){
    global $db;
    return $db->query($sql);
  }

  ?>