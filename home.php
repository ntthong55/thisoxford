<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="static/css/main.css">
    </head>
    <body>
        <?php include 'include/header.php'; ?>
        <?php include 'include/cookie.php'; ?>
        <div class="main-page">
            <div class="container">
                <a href="#" class="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div class="menufix">
                    <ul class="right-menu">
                        <li><a href="#" data-target-id="#about" class="scroll-to-div">About This Oxford</a></li>
                        <li><a href="#" data-target-id="#past-gifts" class="scroll-to-div">Past Gifts</a></li>
                        <li><a href="#" data-target-id="#future" class="scroll-to-div" >Future</a></li>
                        <li><a href="#" data-target-id="2" class="scroll-to-div">Resources</a></li>
                        <li><a href="#" data-target-id="2" class="scroll-to-div">Behind the Story</a></li>
                    </ul>
                </div>
                <div class="timeline">
                    <div class="time">
                        <span class="fun-level">1655</span>
                    </div>
                </div>
                <section id='home' class="scene-home">
                    <div class="content">
                        <h1>
                           <div class="text1">this oxford 11</div>
                           <div class="replace">this oxford 22</div>
                        </h1>
                    </div>
                    <a href="#" class="arrow-down">
                        Explore This Oxford
                        <i></i>
                    </a>
                    <div class='bg' id="bg1"></div>
                    <div class='bg' id="bg2">
                        <div class="overlay"></div>
                    </div>
                </section>
                <section id='about' class="about">
                    <div id="about-1" class="scene-about about-1">
                        <div class="content"><h2>Few places have impacted the world like Oxford.</h2></div>
                    </div>
                    <div id="about-2" class="scene-about about-2">
                        <div class="content"><h2>A kaleidoscope of thought, problem-solving, and talent, Oxford turns 1,000 years of history into world-beating science.</h2></div>
                    </div>
                    <div id="about-3" class="scene-about about-3">
                        <div class="content"><h2>Here are just a few stories that show Oxford’s unparalleled track record for producing world changing innovations.</h2></div>
                    </div>
                </section>
               
                <?php include 'include/past-gift.php'; ?>
                <?php include 'include/future.php'; ?>
            </div>
        </div>
        <script src="static/js/main.js"></script>

<!--        <script src="static/js/jquery.animateNumber.js"></script>
        <script src="static/js/jquery.easing.1.3.js"></script>
       <script src="static/js/jquery.color.js"></script>-->
    </body>
</html>
