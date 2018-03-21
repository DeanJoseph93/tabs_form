/**
 * @name:   js.js
 * @desc:   Index javascript page
 */


(function () {

    var
        box             =   document.getElementById("box"),
        home            =   document.getElementById("home"),
        why             =   document.getElementById("why"),
        who             =   document.getElementById("who"),
        when            =   document.getElementById("when"),
        titleMain       =   document.getElementById("titleMain"),
        paraMain        =   document.getElementById("paraMain"),
        paraMainWhy     =   document.getElementById("paraMainWhy"),
        paraMainWho     =   document.getElementById("paraMainWho"),
        paraMainWhen    =   document.getElementById("paraMainWhen"),
        leftMargin      =   0,
        whiteBar        =   document.getElementById("whiteBar"),
        btnFind         =   document.getElementById("btnFind"),
        rightMargin     =   0,
        rightBox        =   document.getElementById("rightBox"),
        statusRight     =   "none";
        ////////////// Form Validation //////////////
        submitBtn       =   document.getElementById("submitBtn"),
        answer1         =   document.getElementById("answer1"),
        answer2         =   document.getElementById("answer2"),
        answer3         =   document.getElementById("answer3"),
        usrName         =   document.getElementById("usrName"),
        usrEmail        =   document.getElementById("usrEmail"),
        usrPassword     =   document.getElementById("usrPassword"),
        invalid         =   0,
        i               =   0,
        j               =   0,
            k           =   0,

         /**
          * @name:   movinBox
          * @desc:   will manipulate the box will appear and move left at a set time
          */

         formValidation     =   function () {

             var
                 length     =   usrPassword.value.length;



             submitBtn.addEventListener("click", function () {

                 //name
                 if( usrName.value === "") {

                     answer1.innerHTML  = "You must type in a name";
                     invalid += 1;

                 } else {
                     answer1.innerHTML  = "";

                 } //if usrName


                //email
                 if( usrEmail.value.indexOf("@") == -1) {

                     answer2.innerHTML  = "Invalid Email, please re-enter";
                     invalid += 1;
                 } else {

                     answer2.innerHTML  = "";
                 } //if usrEmail


                 //Password Check

                 if ( length == 0) {
                     answer3.innerHTML  = "Must contain one lower and upper case";
                     invalid += 1;
                 } //if

                 while ( i < length) {

                     compare   =    usrPassword.value.charAt(i).toUpperCase();

                     if ( usrPassword.value.charAt(i) != compare ) {
                         j = 0;

                            while ( j < length)  {
                             compare = usrPassword.value.charAt(j).toLowerCase();

                             if ( usrPassword.value.charAt(j) != compare) {

                                 answer3.innerHTML  = "";
                                 k  = 1;

                             } else if (( j == length -1) && ( k == 0)){

                                 answer3.innerHTML  = "Must contain one lower and upper case";
                                 invalid += 1;
                             } // else if

                                j++;

                            } // while j

                     }// if usrPassword

                     else if (( i == length -1) && ( k == 0)){

                         answer3.innerHTML  = "Must contain one lower and upper case";
                         invalid += 1;
                     } // else if


                    i++;

                 } // while Password Check



                 // Final Validation
                 if( invalid != 0) {

                     return false;
                 } else {

                     return true;
                 } //if invalid



             }); //submitBtn

         }, // formValidation


        /**
         * @name:   movinBox
         * @desc:   will manipulate the box will appear and move left at a set time
         */


        displayBox     =      function () {

            btnFind.addEventListener("click", function () {

                if( statusRight == "none") {

                    rightBox.style.display = "block";
                    rightBox.style.right = rightMargin + "px";
                    statusRight = "block";

                    btnFind.innerHTML = "Hide";

                } else {
                    rightBox.style.display = "none";
                    statusRight = "none";

                    btnFind.innerHTML = "Click Here";
                }



            }); // btnFind


        }, //movinBox
        


        /**
         * @name:   barMoveRight
         * @desc:   will manipulate the image and move right at a set time
         */


        barMoveRight    =   function () {

            if( leftMargin < 570) {

                leftMargin += 3;
                whiteBar.style.marginLeft = leftMargin + "px";

                setTimeout(
                    function () {
                      barMoveRight();
                    },
                    60
                );
            } else {
                barMoveLeft();

            } // end if


        }, //barMoveRight



        /**
         * @name:   barMoveLeft
         * @desc:   will manipulate the image and move left at a set time
         */


        barMoveLeft    =   function () {

            if( leftMargin > 0) {

                leftMargin -= 3;
                whiteBar.style.marginLeft = leftMargin + "px";

                setTimeout(
                    function () {
                        barMoveLeft();
                    },
                    50
                );
            } else {

                barMoveRight();

            } // end if


        }, //barMoveLeft







        /**
         * @name:   resetPar
         * @desc:   will manipulate the par and reset each time link is clicked
         */

        resetPar    =   function () {

            paraMain.style.display = "none";
            paraMainWhy.style.display = "none";
            paraMainWho.style.display = "none";
            paraMainWhen.style.display = "none";

            home.style.color = "#FFFF";
            why.style.color = "#FFFF";
            who.style.color = "#FFFF";
            when.style.color = "#FFFF";

        }, //

        /**
         * @name:   bindBtns
         * @desc:   will manipulate main and display new text boxes with information
         */




        bindBtns        =       function () {


            home.addEventListener("click", function () {
                resetPar();
                var
                    title   =   true,
                    para    =   true ;

                if( title == true || para == true) {


                    //displaying title and paragraph
                    titleMain.innerHTML = "Welcome To My Page Of Projects";
                    titleMain.style.display = "block";
                    paraMain.style.display = "block";

                    //manipulating link
                    home.style.color = "red";

                } //if
            }); //why




            why.addEventListener("click", function () {
                resetPar();
                var
                    title   =   true,
                    para    =   true ;

                if( title == true || para == true) {

                    //displaying title and paragraph
                    titleMain.innerHTML = "Why...";
                    titleMain.style.borderBottom = "none";
                    paraMainWhy.style.display = "block";

                    //manipulating link
                    home.style.color = "white";
                    why.style.color = "red";

                } //if
            }); //why





            who.addEventListener("click", function () {
                resetPar();
                var
                    title   =   true,
                    para    =   true ;

                if( title == true || para == true) {


                    //displaying title and paragraph
                    titleMain.innerHTML = "Who...";
                    titleMain.style.borderBottom = "none";
                    paraMainWho.style.display = "block";

                    //manipulating link
                    who.style.color = "red";


                } //if
            }); //who





            when.addEventListener("click", function () {
                resetPar();
                var
                    title   =   true,
                    para    =   true ;

                if( title == true || para == true) {

                    //displaying title and paragraph
                    titleMain.innerHTML = "When...";
                    titleMain.style.borderBottom = "none";
                    paraMainWhen.style.display = "block";

                    //manipulating link
                    when.style.color = "red";


                } //if
            }); //who


        } , //bindBtns






    
    init    = function () {
       bindBtns();
       barMoveRight();
       displayBox();
       formValidation();
    } //init
    
    
    
    ;
    
window.addEventListener("load", init);    
    
})();