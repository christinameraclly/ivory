<?php
$name = $_POST['name'];
$email = $_POST['email'];
$total = $_POST['total'];
$plan = $_POST['plan'];
$theme = $_POST['theme'];
$phone = $_POST['phone']




?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirm to Pay</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <div class="container ">
        <div class="parent_main">
            <h2 class="h3 text-center">Click the Pay button for payment!</h2>
            <div>
                <button class="btn btn-success" id="rzp-button1">Pay with Razorpay</button>
            </div>
        </div>
    </div>

    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script>
        var options = {
            "key": "rzp_test_Gavj0qJUPrgJ98", // Enter the Key ID generated from the Dashboard
            "amount": "<?php echo $total * 100; ?>", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Your Company Name",
            "description": "Transaction for <?php echo $plan; ?>",
            "image": "https://example.com/your_logo",
            //"order_id": " //echo(rand(10,100));", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "thankyou.html",
            "prefill": {
                "name": "<?php echo $name; ?>",
                "email": "<?php echo $email; ?>",
                "phone": "<?php echo $phone; ?>",
        
            },
          
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        document.getElementById('rzp-button1').onclick = function(e) {
            rzp1.open();
            e.preventDefault();
        }
    </script>

    <script>
        window.onload = function() {
            document.getElementById('rzp-button1').click();
        }
    </script>

<script>

session_start();

function generate_csrf_token() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function validate_csrf_token($token) {
    return hash_equals($_SESSION['csrf_token'], $token);
}


session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!validate_csrf_token($_POST['csrf_token'])) {
        die("Invalid CSRF token");
    }

    // Sanitize and validate inputs
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_NUMBER_INT);
    $theme = filter_input(INPUT_POST, 'theme', FILTER_SANITIZE_STRING);
    $plan = filter_input(INPUT_POST, 'plan', FILTER_VALIDATE_INT);
    $qty = filter_input(INPUT_POST, 'qty', FILTER_VALIDATE_INT);
    $total = filter_input(INPUT_POST, 'total', FILTER_VALIDATE_INT);
    $date = filter_input(INPUT_POST, 'date', FILTER_SANITIZE_STRING);

    // Additional server-side validation
    if ($name && $email && $phone && $theme && $plan && $qty && $total && $date) {
        // Process the payment
    } else {
        die("Invalid input");
    }
}

    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>
