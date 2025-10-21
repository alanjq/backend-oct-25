<?php
    include './site-config.php';

    function navItem($texto,$url){
        return '<li class="sidebar-nav-item"><a href="'. $url .'">' . $texto . '</a></li>';
    }
?>

<!-- Navigation-->
<a class="menu-toggle rounded" href="#"><i class="fas fa-bars"></i></a>
<nav id="sidebar-wrapper">
    <ul class="sidebar-nav">
        <li class="sidebar-brand"><a href="#page-top"><?=$NOMBRE_SITIO?></a></li>
        <?=navItem("Home", "#page-top");?>
        <?=navItem("About", "#about");?>
        <?=navItem("Services", "#services");?>
        <?=navItem("Portfolio", "#portfolio");?>
        <?=navItem("Contact", "#contact");?>
        <?=navItem("Clases", "#clases");?>
        <!-- <li class="sidebar-nav-item"><a href="#page-top">Home</a></li> -->
        <!-- <li class="sidebar-nav-item"><a href="#about">About</a></li> -->
        <!-- <li class="sidebar-nav-item"><a href="#services">Services</a></li> -->
        <!-- <li class="sidebar-nav-item"><a href="#portfolio">Portfolio</a></li> -->
        <!-- <li class="sidebar-nav-item"><a href="#contact">Contact</a></li> -->
    </ul>
</nav>