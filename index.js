// DOM Elements
    const CurTime = document.querySelector('#time');
    const Greeting = document.getElementById('greeting');
    const UserName = document.getElementById('name');
    const UserFocus = document.getElementById('focus');
 
    // Show AM PM 
    const showAmPm = true;
 
    // Show Time
    function displayTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
 
        // Set AM or PM
        const amPm = hour >= 12 ? 'PM' : 'AM';
 
        // 12hr Format
        hour = hour % 12 || 12;
 
        // add zero to time
        // hour = hour>=12 ? hour : '0'+hour;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
 
        // print time
        document.getElementById('time').innerHTML = time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec} ${amPm}`;
    }
    setInterval(displayTime, 1000);
 
    // Set Background and Greeting
    function setBgGreet() {
 
        let today = new Date()
        let hour = today.getHours();
        if (hour < 12) {
            // Morning
            document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?morning')";
            Greeting.textContent = 'Good Morning, ';
        } else if (hour < 18) {
            // Afternoon
            document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?afternoon')";
            Greeting.textContent = 'Good Afternoon, ';
        } else {
            // Night
            document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?night')";
            Greeting.textContent = 'Good Night, ';
        }
    }
 
    // Get Name
    function GetName() {
        if (localStorage.getItem('UserName') === null) {
            UserName.textContent = '[Enter Name]';
        } else {
            UserName.textContent = localStorage.getItem('UserName');
        }
    }
 
    //Set Name
 
    function SetName(e) {
        if (e.type === 'keypress') {
            // Make sure enter is pressed
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('UserName', e.target.innerText);
                UserName.blur();
            }
        } else {
            localStorage.setItem('UserName', e.target.innerText);
        }
    }
 
    // Get Focus
    function GetFocus() {
        if (localStorage.getItem('UserFocus') === null) {
            UserFocus.textContent = '[Enter Focus]';
        } else {
            UserFocus.textContent = localStorage.getItem('UserFocus');
        }
    }
 
    // Set Focus
    function SetFocus(e) {
        if (e.type === 'keypress') {
            // Make sure enter is pressed
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('UserFocus', e.target.innerText);
                UserFocus.blur();
            }
        } else {
            localStorage.setItem('UserFocus', e.target.innerText);
        }
    }
    // Add eventlistner
    UserName.addEventListener('keypress', SetName);
    UserName.addEventListener('blur', SetName);
    UserFocus.addEventListener('keypress', SetFocus);
    UserFocus.addEventListener('blur', SetFocus);
 
    // Call The Function 
    setBgGreet();
    GetName();
    GetFocus();
