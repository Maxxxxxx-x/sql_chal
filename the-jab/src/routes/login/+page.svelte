<script lang="ts">
    import { onMount } from "svelte";
    import {} from "$app/environment";
    import logo from "$lib/assets/logo.png";
    let Email : string;
    let Password : string;
    let RememberMe = false;
    let Debounce = false;
    async function Login(){
        if (Debounce) return;
        Debounce = true;
        alert(Email + " | " + Password);
        try {
            const Response = await fetch("./api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: Email, password: Password}),
            });
        } finally {
            Debounce = false;
        }
    }

    function ShowSignup(){

    }
</script>

<body class="Background">
    <nav class="TopNav">
        <img class="TopNav-Logo" src={logo} alt="logo">
        <h1 class="TopNav-Title">CSIE Internal Tool</h1>
    </nav>
    <div class="Login" hidden>
        <h1 class="Title">Sign in</h1>
        <h2 class="Description">Login to access the CSIE panel</h2>
        <form class="LoginForm">
            <input
                class="LoginEmail"
                id="LoginEmail"
                type="email"
                bind:value={Email}
                placeholder="Email"
                disabled={Debounce} 
            />
            <input
                class="LoginPassword"
                id="LoginPassword"
                type="password"
                bind:value={Password}
                on:keydown={(e) => {
                    if (e.key !== "Enter") return;
                    Login();
                }}
                placeholder="Password"
                disabled={Debounce}
            />
            <button class="LoginButton" id="LoginButton" type="button" on:click={Login} >Login</button>
            <button class="SignupButton" id="SignupButton" type="button" on:click={ShowSignup}>Sign up</button>
        </form>
    </div>
</body>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
    * {
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
    }

    .Background {
        background: rgba(48, 54, 66, 255);
    }
    
    .TopNav {
        background: rgba(37, 41, 51, 255);
        height: 55px;
        color: rgba(105, 121, 150, 255);
        color: rgba(255, 255, 255, 255);
        display: flex;
        flex-direction: row;
        align-items: center;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    .TopNav-Logo {
        width: 40px;
        height: 40px;
        padding-left: 20px;
    }

    .TopNav-Title {
        padding-left: 10px;
    }

    .Title {
        font-size: 30px;
    }
    
    .Description {
        padding-top: 10px;
        font-size: 20px;
    }

    .Login {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 10%;
        justify-content: center;
        color: rgba(255, 255, 255, 255);
    }

    .LoginForm {
        padding: 4%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .LoginEmail {
        background: url("$lib/assets/mail.svg") no-repeat center center;
        background-position-x: left;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 255);
        padding: 6%;
        padding-left: 29%;
        color: rgba(255, 255, 255, 255);
        font-size: 15px;
    }

    .LoginPassword {
        background: url("$lib/assets/key.svg") no-repeat center center;
        background-position-x: left;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 255);
        padding: 6%;
        padding-left: 29%;
        margin: 15px;
        color: rgba(255, 255, 255, 255);
        font-size: 15px;
    }

    .LoginButton {
        border: 1px solid rgb(108, 252, 56);
        background: transparent;
        color: rgb(108, 252, 56);
        border-radius: 5px;
        font-size: 20px;
        margin: 15px;
        width: 100%;
        padding: 3%;
        cursor: pointer;
    }
    
    .SignupButton {
        border: 1px solid rgb(166, 166, 166);
        background: transparent;
        color: rgba(255, 255, 255, 255);
        font-size: 20px;
        padding: 3%;
        width: 100%;
        cursor: pointer;
        border-radius: 5px;
    }

    ::placeholder {
        color: rgba(255, 255, 255, 255);
    }

</style>