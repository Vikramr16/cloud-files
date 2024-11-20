<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="main_div">
        <div class="title">Login Form</div>
        <div id="login_form" class="form_container active">
            <form action="login.php" method="POST">
                <div class="input_box">
                    <input type="text" name="username" placeholder="Enter your name" required>
                    <div class="icon"><i class="fas fa-user"></i></div>
                </div>
                <div class="input_box">
                    <input type="email" name="email" placeholder="Email" required>
                    <div class="icon"><i class="fab fa-google"></i></div>
                </div>
                <div class="input_box">
                    <input type="password" name="password" placeholder="Password" required>
                    <div class="icon"><i class="fas fa-lock"></i></div>
                </div>
                <div class="option_div">
                    <div class="check_box">
                        <input type="checkbox" name="agree">
                        <span>I agree</span>
                    </div>
                    <div class="forget_div">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                <div class="input_box button">
                    <input type="submit" value="Login">
                </div>
                <div class="form_toggle">
                    Not a member? <a onclick="toggleForm()">Signup now</a>
                </div>
            </form>
        </div>
        <div id="signup_form" class="form_container">
            <form id="signup_form" action="login.php" method="POST" onsubmit="return validateForm()">
                <div class="input_box">
                    <input type="text" name="username" placeholder="Full Name" required>
                    <div class="icon"><i class="fas fa-user"></i></div>
                </div>
                <div class="input_box">
                    <input type="email" name="email" placeholder="Email" required>
                    <div class="icon"><i class="fab fa-google"></i></div>
                </div>
                <div class="input_box">
                    <input type="password" name="password" id="password" placeholder="Password" required>
                    <div class="icon"><i class="fas fa-lock"></i></div>
                </div>
                <div class="input_box">
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" required>
                    <div class="icon"><i class="fas fa-lock"></i></div>
                </div>
                <div class="input_box button">
                    <input type="submit" value="Signup">
                </div>
                <div class="form_toggle">
                    Already have an account? <a onclick="toggleForm()">Sign in</a>
                </div>
            </form>
        </div>
    </div>
    <script src="login.js"></script>
</body>
</html>
